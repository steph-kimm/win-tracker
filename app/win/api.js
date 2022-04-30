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

const deleteWin = function(id){
    return $.ajax({
        method: "DELETE",
        url: config.apiUrl +'/wins/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token,
            
        }
    })
}

const editWin = function(id,win){
    return $.ajax({
        method: "PATCH",
        url: config.apiUrl +'/wins/' + id,
        data:win,
        headers: {
            Authorization: 'Bearer ' + store.user.token,
            
        }
    })
}

module.exports = {
    addNewWin,
    getWins,
    deleteWin,
    editWin
}
