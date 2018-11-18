var http = require('http');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

var config = JSON.parse(fs.readFileSync("./config.json", "utf8"));

function getValue(){
	var resultt = "";
	var db_url = config.database.db_url;
	MongoClient.connect(db_url, { useNewUrlParser: true }, function(err, client) {
		db = client.db(config.database.db_name);
		db.collection("settings").findOne({}, function(err, result){
			if (err) throw err;
			resultt = result.user.site.title;
		});
		client.close();
	});
	return resultt;
}
function page(fileName){
	var page = fs.readFileSync("./data/resources/template/default/"+fileName+".fhtml", "utf-8");
	var newPage = page.replace("[title]", getValue());
	return newPage;
}

http.createServer(function (req,res) {
	if(req.url == "/"){
		res.writeHead(200, {"Content-Type" : "text/html"});
		res.write("Flashcms");
		res.end();
	}else if(req.url == "/admin"){
		res.writeHead(200, {"Content-Type" : "text/html"});
		res.write(page("admin"));
		res.end();
	}
}).listen(config.webserver.port);