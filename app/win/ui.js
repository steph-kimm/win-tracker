'use strict'

const winEvents = require('./events.js')

const onNewWinSuccess = function(response){
    // console.log("New win added successfully")
    // console.log(response)


    let win = response.win

    // console.log(win._id)
    let deleteBtn = `<button class='delete-button'+  id='` +win._id +`' > X </button>`
    let editBtn = `<button class='edit-button' id='` + win._id  + `'> Edit </button>`


    // console.log(response.win)
    // console.log("title" + win.title )
    let title = "<h4> " + win.title + " </h4>" 
    // console.log("title" + title)
    let description = "<p>" + win.text + "</p>"
    // console.log("date" + win.date)

    let date = "<p>" + win.date.slice(0,10) + "</p>"
    let fullWin = `<div class='win' id='` +win._id +`'>` +  title + deleteBtn + editBtn+   description + date + "</div>"; //HERE 

    $('#wins').prepend(fullWin)

}

const onNewWinFail = function(){
    // console.log("New win added successfully")
    // console.log("Win didn't add!")
    $('#status').html('Win not added! Make sure the date is correct!')
}



const onLoadAllWinSuccess = function(response){
    // console.log(response)
    const winArray = response.wins
    // console.log("array: " + winArray)

    let allWins = ""
    // let allWinsHTML = $.parseHTML(allWins)
    // let deleteBtn = `<button class='delete-button' > X </button>`
    // let editBtn = `<button class='edit-button' > Edit </button>`

    winArray.forEach(element =>{
        let deleteBtn = `<button class='delete-button'+  id='` +element._id +`' > X </button>`
        let editBtn = `<button class='edit-button' id='` + element._id  + `'> Edit </button>`
    
        // console.log("In here")
        let title = "<h4> " + element.title + " </h4>" 

        let description = "<p>" + element.text + "</p>"

        let date = "<p>" + element.date.slice(0,10) + "</p>"
        

        let fullWin = `<div class='win' id='` +element._id +`'>` +  title + deleteBtn + editBtn+   description + date + "</div>"; //HERE 

         allWins =  fullWin + allWins

    })

    $('#wins').append(allWins)
    
}

const onDeleteWinSuccess = function(id){
    // console.log("winDeleted")
    // console.log("id: " + id)
    // console.log(response.win)
    // console.log(response.win._id)
    $( "#" + id ).remove();

}

const onEditWinSuccess = function(data,id){
    // console.log(data)
    // console.log(data.win.text)
    // console.log($('#' + id))
    $(`#${id} p:first`).html(data.win.text)
    $('#edit-win-form').hide()
}


const onEditWinFail = function(data,id){
    // console.log(data)
    // console.log(data.win.text)
    // console.log($('#' + id))
    $(`#change-status`).html("error! couldn't change. Make sure the text is different")
}


module.exports= {
    onNewWinSuccess,
    onNewWinFail,
    onLoadAllWinSuccess,
    onDeleteWinSuccess,
    onEditWinSuccess,
    onEditWinFail
}