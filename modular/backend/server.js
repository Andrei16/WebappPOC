var express = require('express');
var app = express();

var userData=[];
userData=[
	{'id':1,'fname':'Mircea', 'lname':'Mihai', 'username':'@omir'},
	{'id':2,'fname':'Jacob', 'lname':'Thornton', 'username':'@fat'},
	{'id':3,'fname':'Larry', 'lname':'the bird', 'username':'@twitter'}
];
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/',function (req, res){
	res.send("Hallooo 3001 backend!");
});

app.get('/users', function(request, response){
	response.setHeader('content-Type','application/json');
	response.send(JSON.stringify(userData));
});

app.listen(3001, function(){
	console.log("Server started on port 3001");
});