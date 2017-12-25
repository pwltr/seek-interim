import LazyLoad from 'vanilla-lazyload'
import svg4everybody from 'svg4everybody'

import globals from './config/globals'

// import './modules/nav-mobile'
import './modules/newsletterSignup'

function init() {
  svg4everybody()

  const lazyload = new LazyLoad({ elements_selector: '.lazyload' })
}

(function ready(init) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    init()
  } else {
    document.addEventListener('DOMContentLoaded', init)
  }
})(init)
