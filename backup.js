function insertValue(varr){
	var db_url = config.database.db_url;
	MongoClient.connect(db_url, { useNewUrlParser: true }, function(err, client) {
		var db = client.db(config.database.db_name);
		db.collection("settings").findOne({}, function(err, result){
			if (err) throw err;
			return result.user.site.varr;
		});

		client.close();
	});
}

var newMarkupText;
function edit(markupFile){
	var markupText = fs.readFileSync("./data/resources/template/default/"+markupFile+".fhtml", "utf-8");
	newMarkupText = markupText;
	var res = markupText.match(/\[(.*?)\]/g);
	for(i=0;i<res.length;i++){
		newMarkupText = newMarkupText.replace(res[i], insertValue(res[i].replace("[", "").replace("]", "")));
	}
	return newMarkupText;
}