var express = require('express');
var app = express();

app.get('/',function (req, res){
	res.send("Hallooo 3002 !");
});

app.use('/webapp', express.static('webapp'));

app.listen(3002, function(){
	console.log("Server started on port 3002");
});