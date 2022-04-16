'use strict'
// this file handles all the events and passes them into the api 
const getFormFields = require('../../lib/get-form-fields.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')



const onSignUp = function(event){
    event.preventDefault()
    console.log("running events")

    const form = event.target 

    const data = getFormFields(form)
    console.log(data)

    //api call 
    authApi.signUp(data)
    .then(()=>{
        console.log("sign-up successfully")
        authUi.onSignUpSuccess();
    })
    .catch(authUi.onSignUpFailure())
}

const onSignIn = function(event){
    event.preventDefault()
    console.log("running events")

    const form = event.target 

    const data = getFormFields(form)
    console.log(data)

    //api call data in this case is the user info 
    authApi.signIn(data)
    .then((response)=>{
        console.log("sign-in successfully")
        authUi.onSignInSuccess(response);
    })
    .catch(authUi.onSignInFailure())
}

const onSignOut = function(){

    //api call 
    authApi.signOut()
    .then(()=>{
        authUi.onSignOutSuccess();
    })
    //.catch(authUi.onSignOutFailure())
}


const onChangePassword = function(event){
    event.preventDefault()
    const form = event.target 

    const data = getFormFields(form)
    console.log(data)

    authApi.changePassword(data)
    .then(()=>{
        authUi.onChangePasswordSuccess();
        console.log("password Changed!")
    })
    // .catch(console.log("password couldn't be changed"))
}

module.exports = {
    onSignUp, //onSignUp :onSignUp
    onSignIn,
    onSignOut,
    onChangePassword
    
}