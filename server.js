// Server modules
var express = require('express');
var app = express();

// Scrape modules
var request = require("request");
var cheerio = require("cheerio");

//Server Port
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("App OK on port", port);
}); 

// Make public a static dir
app.use(express.static("public"));

app.get("/copa", function(req, res) {

	request("http://globoesporte.globo.com/futebol/copa-do-mundo/classificacao.html", function(error, response, body) {

	var $ = cheerio.load(body);

	$("div#widget-classificacao").each(function(idx, element){

		//"div#widget-classificacao"

		
		//console.log($(this).html());

		res.send($(this).html());


		});

	});


	// request("https://globoesporte.globo.com/futebol/futebol-internacional/futebol-ingles/", function(error, response, body) {

	// var $ = cheerio.load(body);

	// $("div.tabela-pontos-corridos").each(function(idx, element){

	// 	// console.log($(this).text());

	// 	res.send($(this).text());

	// 	});

	// });

});