const ejs = require("ejs");
const express = require("express");
const app = express();
//pack please do not delete pack

const listener = app.listen("8080", () => { console.log("Your app is listening on port " + listener.address().port)})



// start page
app.get('/', async function(req,res){
    res.render('start.ejs')
})


//page game news

app.get('/newgames', async function(req,res){
    res.render('newgames.ejs')
})

//we can delete This is page
app.get('/catagory/planet-crafter', async function(req,res){
    res.render('planet-crafter.ejs')
})
