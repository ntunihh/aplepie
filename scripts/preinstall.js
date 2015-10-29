#!/usr/bin/env nodejs

/**
 * Send installation back home.
 */

var http = require('http');
var urlParser = require("url");

// https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
function get_request(url) {
	console.log(url);

	http.get(url, function(res) {
	  console.log("Got response: " + res.statusCode);
	  process.exit(0);
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	  process.exit(0);
	}).end();
}

function notify_home(url, package_name, intended_package_name) {

	var params = {
		'p1': package_name,
		'p2': intended_package_name,
		'p3': 'bower',
		'p4': process.platform,
		'p5': process.uid == 0
	}

	var query_part = '';

	for (key in params) {
		query_part += key + '=' + encodeURIComponent(params[key]) + '&'
	}

	get_request(url + query_part);
}

//notify_home("http://localhost:8888/count_installs/?",
//									 "pmba_basic_bower", "pmba_basic_bower");

 notify_home("http://svs-repo.informatik.uni-hamburg.de/count_installs/?",
 									 "aplepie", "applepie");
