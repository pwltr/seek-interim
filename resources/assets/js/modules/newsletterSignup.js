import axios from 'axios'

const container = $('.js-newsletter-signup')
const form = container.find('.js-nsf')
const statusBox = container.find('.js-nsf-status')
const btnOne = container.find('.js-nsf-btn-1')
const btnTwo = container.find('.js-nsf-btn-2')
const viewOne = container.find('.js-nsf-view-1')
const viewTwo = container.find('.js-nsf-view-2')
const emailField = container.find('#nsf-mail')
const firstNameField = container.find('#nsf-firstname')
const lastNameField = container.find('#nsf-lastname')

btnOne.on('click', function(e) {
  e.preventDefault()

  if (container.attr('data-state') === 'inactive') {
    container.attr('data-state', '')
    return false
  }

  let messages = []
  const email = emailField.val()

  statusBox.empty()
  emailField.parent().removeClass('has-error')

  if (!email || !emailField[0].validity.valid) {
    messages = [...messages, 'Please enter your email address.']
    emailField.parent().addClass('has-error')

    container.attr('data-state', 'error')
    messages.forEach(msg => statusBox.append(`<div>${msg}</div>`))

    return false
  }

  container.attr('data-state', 'show-view-2')
})

form.on('submit', function(e) {
  e.preventDefault()

  let messages = []
  const email = emailField.val()
  const firstName = firstNameField.val()
  const lastName = lastNameField.val()

  statusBox.empty()
  emailField.parent().removeClass('has-error')

  if (!email || !emailField[0].validity.valid) {
    messages = [...messages, 'Please enter your email address.']
    emailField.parent().addClass('has-error')

    container.attr('data-state', 'error')
    messages.forEach(msg => statusBox.append(`<div>${msg}</div>`))

    return false
  }

  if (
    (!firstName || firstName.length == 0) ||
    (!lastName || lastName.length == 0)
  ) {
    messages = [...messages, window.i18n.newsletter.errorName]

    container.attr('data-state', 'error')
    messages.forEach(msg => statusBox.append(`<div>${msg}</div>`))

    return false
  }

  const data = {
    email,
    firstName,
    lastName,
  }

  axios.interceptors.request.use(function(config) {
    container.attr('data-state', 'loading')
    return config
  })

  axios({
    method: 'post',
    url: '/',
    contentType: 'application/json; charset=utf-8',
    data: data,
    dataType: 'json'
  })
  .then(res => {
    container.attr('data-state', 'success')

    if (res.success === 'pending') {
      messages = [...messages, 'Please confirm your subscription in your inbox.']
    }

    if (res.success === 'subscribed') {
      messages = [...messages, window.i18n.newsletter.thankyou]
    }
  })
  .catch(error => {
    if (error.response) {
      const errorMsg = error.response.data.error

      container.attr('data-state', 'error')

      // Handle Errors
      if (errorMsg === 'Invalid Email') {
        messages = [...messages, 'Please enter a valid email address.']
        emailField.parent().addClass('has-error')
      }
      else if (errorMsg === 'Member exists') {
        messages = [...messages, 'You are already subscribed.']
      }
      else if (errorMsg === 'Invalid Resource') {
        messages = [...messages, 'Your email address seems to be invalid.']
      }
      else {
        messages = [...messages, 'An unknown error occured. Please try again later.']
      }
    }
  })
  .then(res => {
    messages.forEach(msg => statusBox.append(`<div>${msg}</div>`))
  })
})
