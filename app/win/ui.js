'use strict'

const onNewWinSuccess = function(){
    console.log("New win added successfully")
}

const onNewWinFail = function(){
    // console.log("New win added successfully")
    console.log("Win didn't add!")
    $('#status').html('Win not added! Make sure the date is correct!')
}

const onLoadAllWinSuccess = function(response){
    console.log(response)
    const winArray = response.wins
    console.log("array: " + winArray)

    let allWins = ""
    winArray.forEach(element =>{
        console.log("In here")
        let title = "<h3> " + element.title + " </h3>" 
        //console.log("title " + title)
        let description = "<p>" + element.text + "</p>"
        // console.log("date" + element.date.slice(0,10))
        let date = "<p>" + element.date.slice(0,10) + "</p>"

        let fullWin = "<div class='win'>" +  title + description + date + "</div>"; 
        
        allWins = allWins + fullWin
        // let newContent = document.createElement("div");
        // newContent.html= `"HELLO, testing!"`
        // document.getElementById("wins").appendChild(newContent);

    })
    $('#wins').html(allWins)
}

module.exports= {
    onNewWinSuccess,
    onNewWinFail,
    onLoadAllWinSuccess
}