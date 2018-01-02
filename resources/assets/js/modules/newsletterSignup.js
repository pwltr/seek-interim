import axios from 'axios'

const container = $('.js-newsletter-signup')
const form = container.find('.js-nsf')
const statusBox = container.find('.js-nsf-status')
const btn = container.find('.js-nsf-btn')
const emailField = container.find('#nsf-mail')

form.on('submit', function(e) {
  e.preventDefault()

  if (container.attr('data-state') === 'inactive') {
    container.attr('data-state', '')
    return false
  }

  let messages = []
  const email = emailField.val()

  statusBox.empty()
  emailField.parent().removeClass('has-error')

  if (email.length == 0) {
    messages = [...messages, 'Bitte geben Sie Ihre E-mail-Adresse ein.']
    emailField.parent().addClass('has-error')

    container.attr('data-state', 'error')
    messages.forEach(msg => statusBox.append(`<div>${msg}</div>`))

    return false
  }

  const data = { email }

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
      messages = [...messages, 'Bitte bestätigen Sie die Anmeldung in Ihrer Mailbox.']
    }

    if (res.success === 'subscribed') {
      messages = [...messages, 'Sie haben sich erfolgreich für den Newsletter angemeldet!']
    }
  })
  .catch(error => {
    if (error.response) {
      const message = error.response.data.error

      container.attr('data-state', 'error')

      // Handle Errors
      if (message === 'Invalid Email') {
        messages = [...messages, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']
        emailField.parent().addClass('has-error')
      }
      else if (message === 'Member exists') {
        messages = [...messages, 'Sie haben den Newsletter bereits abonniert.']
      }
      else if (message === 'Invalid Resource') {
        messages = [...messages, 'Die E-Mail-Adresse scheint ungültig zu sein.']
      }
      else {
        messages = [...messages, 'Ein unbekannter Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.']
      }
    }
  })
  .then(res => {
    messages.forEach(msg => statusBox.append(`<div>${msg}</div>`))
  })
})
