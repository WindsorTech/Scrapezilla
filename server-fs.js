// Server modules
var express = require('express');
var app = express();

// Scrape modules
// var request = require("request");
// var cheerio = require("cheerio");

//Server Port
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("App OK on port", port);
}); 

var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    pageURL = 'http://globoesporte.globo.com/futebol/copa-do-mundo/classificacao.html';

function scrapePage () {
    //make an HTTP request for the page to be scraped
    request(pageURL, function(error, response, responseHtml){        

        //write the entire scraped page to the local file system
        fs.writeFile(__dirname + '/copaz.html', responseHtml, function(err){
            console.log('Copa do Mundo successfully written to HTML folder');
        })
    }) ;
}

//scrape the page
scrapePage();


//=================================================//

// // Make public a static dir
// app.use(express.static("public"));

// app.get("/", function(req, res) {

// 	res.redirect("/copa");

// });

// app.get("/copa", function(req, res, body) {

// 	request("http://globoesporte.globo.com/futebol/copa-do-mundo/classificacao.html", function(error, response, body) {

// 	var $ = cheerio.load(body);

// 	res.send($("div#widget-classificacao").html());

// 	});

// });

//=================================================//