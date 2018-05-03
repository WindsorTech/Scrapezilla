// Server modules
var express = require('express');
var app = express();

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