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

// Make public a static dir
app.use(express.static("public"));

app.get("/copas", function(req, res) {

	var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    pageURL = 'http://globoesporte.globo.com/futebol/copa-do-mundo/classificacao.html';

function scrapePage () {
    //make an HTTP request for the page to be scraped
    request(pageURL, function(error, response, responseHtml){        

        //write the entire scraped page to the local file system
        fs.writeFile(__dirname + '/copa.html', responseHtml, function(err){
            console.log('Copa do Mundo successfully written to HTML folder');
        })
    }) ;
}

//scrape the page
scrapePage();

});

// app.get("/copa", function(req, res, body) {

// 	request("http://globoesporte.globo.com/futebol/copa-do-mundo/classificacao.html", function(error, response, body) {

// 	var $ = cheerio.load(body);

// 	res.send($("div#widget-classificacao").html());


// 	});

// });


	// $("div#widget-classificacao").each(function(idx, element){


	// 	res.send($(this).html());


	// 	});
	

	
	// request("https://globoesporte.globo.com/futebol/futebol-internacional/futebol-ingles/", function(error, response, body) {

	// var $ = cheerio.load(body);

	// $("div.tabela-pontos-corridos").each(function(idx, element){

	// 	// console.log($(this).text());

	// 	res.send($(this).text());

	// 	});

	// });