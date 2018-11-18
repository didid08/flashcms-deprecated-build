/*const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

var config = JSON.parse(fs.readFileSync("./config.json", "utf8"));

const url = config.database.db_url;

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
	var db = client.db(config.database.db_name);
	var cursor = db.collection("settings").find();
	cursor.forEach(function (doc){
		console.log(doc);
	});
	client.close();
});*/

 var str =  "dkjjnxdkdmllad[didid]dkdkkd[dida]";
 var res = str.match(/\[(.*?)\]/g);
 console.log(res);

