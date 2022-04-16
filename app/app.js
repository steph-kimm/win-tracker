// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const winEvents = require('./win/events.js')


$(() => {
  // attatch event listeners 
  console.log("hi")
  $('#sign-up-form').on('submit', authEvents.onSignUp)

  $('#sign-in-form').on('submit',  authEvents.onSignIn)
  $('#sign-out-button').on('click',  authEvents.onSignOut)
  $('main').on('submit',  winEvents.onNewWin)
  $('#sign-out-div').hide()

  $('main').hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#change-password-form').hide()
  
})
