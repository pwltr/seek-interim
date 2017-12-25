import axios from 'axios'

const nlForm = $('.js-newsletter-form')
const form = nlForm.find('.js-nlf-form')
const statusBox = nlForm.find('.js-nlf-status')
const btn = nlForm.find('.js-nlf-btn')
const emailField = nlForm.find('#nlf-mail')

form.on('submit', function(e) {
  e.preventDefault()

  let messages = []
  const email = emailField.val()

  statusBox.empty()
  emailField.parent().removeClass('has-error')

  if (email.length == 0) {
    messages = [...messages, 'Bitte geben Sie Ihre E-mail-Adresse ein.']
    emailField.parent().addClass('has-error')

    nlForm.attr('data-state', 'error')
    messages.forEach(msg => statusBox.append(`<div>${msg}</div>`))

    return false
  }

  const data = { email }

  axios.interceptors.request.use(function(config) {
    nlForm.attr('data-state', 'loading')
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
    nlForm.attr('data-state', 'success')

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

      nlForm.attr('data-state', 'error')

      // Handle Errors
      if (message === 'Invalid Email') {
        messages = [...messages, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']
        emailField.parent().addClass('has-error')
      }
      else if (message === 'Member Exists') {
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
