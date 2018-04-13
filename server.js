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

app.get("/copa", function(req, res, body) {

	request("http://globoesporte.globo.com/futebol/futebol-feminino/copa-america-feminina/", function(error, response, body) {

	var $ = cheerio.load(body);

	var result = [];

	res.send($("div#widget-classificacao").html());	

	// res.send($("div#widget-classificacao").html());


	});

});

	// $("div.tabela-pontos-corridos").each(function(idx, element){

	// 	res.send($(this).text());

	// 	// console.log($(this).text());

	// 	// 	res.send($(this).html());

	// 	});