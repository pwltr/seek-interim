import classie from 'classie'
// import Modernizr from 'modernizr'
import imagesLoaded from 'imagesloaded'
// import LazyLoad from 'vanilla-lazyload'
import svg4everybody from 'svg4everybody'

import globals from './config/globals'
import PathLoader from './modules/pathLoader'
import { getCookie, setCookie, deleteCookie } from './utils'
// import './modules/nav-mobile'
import './modules/newsletterSignup'

$(document).ready(() => {
  svg4everybody()

  const hasVisited = getCookie('loading-screen')

  // const lazyload = new LazyLoad({ elements_selector: '.lazyload' })

  const support = { animations: Modernizr.cssanimations }
  const container = document.getElementById('ip-container')

  if (!document.body.contains(container)) {
    return false
  }

  const header = container.querySelector('.ip-intro')
  const loader = new PathLoader(document.getElementById('ip-loader-circle'))
  const animEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd',
    animation: 'animationend',
  }

  // animation end event name
  const animEndEventName = animEndEventNames[Modernizr.prefixed('animation')]

  function initLoadingScreen() {
    let onEndInitialAnimation = function() {
      if (support.animations) {
        this.removeEventListener(animEndEventName, onEndInitialAnimation)
      }

      startLoading()
    }

    // disable scrolling
    window.addEventListener('scroll', noscroll)

    // initial animation
    classie.add(container, 'loading')

    if (support.animations) {
      container.addEventListener(animEndEventName, onEndInitialAnimation)
    } else {
      onEndInitialAnimation()
    }
  }

  function startLoading() {
    // simulate loading something...
    let simulationFn = function(instance) {
      let progress = 0

      let interval = setInterval(function() {
        progress = Math.min(progress + Math.random() * 0.1, 1)

        instance.setProgress(progress)

        imagesLoaded('.preload', () => {
          // reached the end
          if (progress === 1) {
            classie.remove(container, 'loading')
            classie.add(container, 'loaded')

            clearInterval(interval)

            let onEndHeaderAnimation = function(event) {
              if (support.animations) {
                if (event.target !== header) return
                this.removeEventListener(animEndEventName, onEndHeaderAnimation)
              }

              classie.add(document.body, 'layout-switch')
              window.removeEventListener('scroll', noscroll)
            }

            if (support.animations) {
              header.addEventListener(animEndEventName, onEndHeaderAnimation)
            } else {
              onEndHeaderAnimation()
            }

            setCookie('loading-screen', true, 7)
          }
        })
      }, 80)
    }

    loader.setProgressFn(simulationFn)
  }

  function noscroll() {
    window.scrollTo(0, 0)
  }

  if (!hasVisited) {
    initLoadingScreen()
  } else {
    classie.add(container, 'loaded')
    classie.add(container, 'instant-loaded')
    classie.add(document.body, 'layout-switch')
  }
})
