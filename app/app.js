// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const { changePassword } = require('./auth/api.js')
const authEvents = require('./auth/events.js')
const winEvents = require('./win/events.js')

let currentEditId = ""
$(() => {
  // attatch event listeners 
  // console.log("hi")
  $('#sign-up-form').on('submit', authEvents.onSignUp)

  $('#sign-in-form').on('submit',  authEvents.onSignIn)
  $('#sign-out-button').on('click',  authEvents.onSignOut)
  $('#add-win-form').on('submit',  winEvents.onNewWin)

  $('#sign-out-div').hide()

  $('main').hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#change-password-form').hide()
  

  $('#account_logo').hide()
  
  $('#account_logo').on('click', showAccount )
  
  $('#wins').on('click' , '.delete-button' ,winEvents.deleteWin)


  $('#wins').on('click' , '.edit-button' , helperFunction)

  $('#edit-win-form').on('submit' , ()=>{
    // let id = $(this).attr('id')
    // console.log("id: " + id)
    // console.log("id: " + currentEditId)
    winEvents.editWin(currentEditId)
  })
  
})

let helperFunction = function(){
  // console.log("currentEditId: "+ $(this).attr('id'))
  currentEditId = $(this).attr('id') ;
  $('#edit-win-form').show()
}

let accountStatusShowing = false;

let  showAccount = function(){
  // console.log("Showing account")
  if(!accountStatusShowing){
    $('#sign-out-div').show()
    $('#change-password-form').show()
    accountStatusShowing = true
  }else{
    $('#sign-out-div').hide()
    $('#change-password-form').hide()
    accountStatusShowing = false
  }

}