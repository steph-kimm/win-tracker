'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const winApi = require('./api.js')
const winUi = require('./ui.js')

const onNewWin= function(){
    event.preventDefault()
    console.log("running events")
    const form = event.target 
    const data = getFormFields(form)
    console.log(data)


    winApi.addNewWin(data)
    .then((response)=>{
        winUi.onNewWinSuccess(response);
        //const token = response.user.token 
        //console.log(token)
    })
    //.catch(authUi.onSignInFailure())

    // loadAllWins()
}

const loadAllWins = function(){
    winApi.getWins()
    .then((response)=>{
        // console.log(response)
        winUi.onLoadAllWinSuccess(response);
        //const token = response.user.token 
        //console.log(token)
    })
}

const deleteWin = function(){
    console.log("connected to events")
    console.log($(this).attr('id'))
    let id = $(this).attr('id')
    
    winApi.deleteWin(id)
    .then((response)=>{
        winUi.onDeleteWinSuccess(id);

    })
}


module.exports = {
    onNewWin,
    loadAllWins,
    deleteWin
    
}