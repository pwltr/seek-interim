import axios from 'axios'

const widget = $('.js-newsletter-widget')
const form = widget.find('.js-nw-form')
const statusBox = widget.find('.js-nw-status')
const btn = widget.find('.js-nw-btn')
const emailField = widget.find('#nw-mail')

form.on('submit', function(e) {
  e.preventDefault()

  let messages = []
  const email = emailField.val()

  statusBox.empty()
  emailField.parent().removeClass('has-error')

  if (email.length == 0) {
    messages = [...messages, 'Bitte geben Sie Ihre E-mail-Adresse ein.']
    emailField.parent().addClass('has-error')

    widget.attr('data-state', 'error')
    messages.forEach(msg => statusBox.append(`<div>${msg}</div>`))

    return false
  }

  const data = { email }

  axios({
    method: 'post',
    url: '/',
    contentType: 'application/json; charset=utf-8',
    data: data,
    dataType: 'json',
    beforeSend: () => widget.attr('data-state', 'loading')
  })
  .then(res => {
    console.log(res.data)
    // widget.attr('data-state', 'success')
    //
    // if (res.success === 'pending') {
    //   messages = [...messages, 'Bitte bestätigen Sie die Anmeldung in Ihrer Mailbox.']
    // }
  })
  .catch(error => {
    if (error.response) {
      const message = error.response.data.error

      widget.attr('data-state', 'error')

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
