'use strict'
const store = require('../store.js')
const config = require('../config.js')

const addNewWin = function(win){
    return $.ajax({
        method: "POST",
        url: config.apiUrl +'/wins',
        data:win, //: data,
        headers: {
            Authorization: 'Bearer ' + store.user.token,
            
        }
    })
}


const getWins = function(){
    return $.ajax({
        method: "GET",
        url: config.apiUrl +'/wins',
        headers: {
            Authorization: 'Bearer ' + store.user.token,
            
        }
    })
}



module.exports = {
    addNewWin,
    getWins
}
