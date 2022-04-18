'use strict'

//the file we store info
const store = require('../store.js')
const winEvents = require('../win/events.js')

const onSignUpSuccess = function (){
    //console.log(response)
    $('#auth-display').html('<h3>User signed up successfully! Now please log in to start playing!</h3>')
    $('form').trigger('reset')
}

const onSignUpFailure = function (){
    $('#auth-display').html("<h2>User couldn't sign up! Make sure its a new email and the passwords match! </h2>")
}


const onSignInSuccess = function (response){
    console.log(response)
    //save the user info
    console.log("response user: " + response.user)
    // Stores the user along with the token!
    store.user= response.user
    //response.user.token 
    $('#auth-display').html('<h3>User signed in successfully! Now You can start adding wins!</h3>')
    $('form').trigger('reset')
    $('#sign-in-form').hide()
    $('#sign-up-form').hide()


    // $('#sign-out-div').show()
   // document.querySelector('#status').innerHTML = "" ;
   $('main').show()
   
   $('#account_logo').show()

   winEvents.loadAllWins()

}
const onSignInFailure = function (){
    $('#auth-display').html("<h2>User couldn't sign in! Wrong email or password </h2>")
}

const onSignOutSuccess = function (){
    $('#auth-display').html("<h2>User signed out! Sign in to play again!</h2>")
    $('#sign-in-form').show()
    $('#sign-up-form').show()
    $('#sign-out-div').hide()
    // $('#status').hide()
    $('main').hide()
    $('#change-password-form').hide()
    $('#account_logo').hide()
}

const onChangePasswordSuccess = function(){
    $('status').html("password changed!")
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onSignOutSuccess,
    onChangePasswordSuccess
    
    
}