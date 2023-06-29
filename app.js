//NEW CODE

var express=require("express");
var bodyParser=require("body-parser");
const session = require('express-session');


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bibekraydec:Agent47isback@cluster0.ffsrbxe.mongodb.net/LoginDB?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app = express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/login', function(req, res) {
	var Email = req.body.email;
	var Password = req.body.password;
  
	db.collection('details').findOne({ email: Email }, function(err, result) {
	  if (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred' });
	  } else {
		if (result) {
		  const { name, password } = result;
		  if (Password === password) {
			res.status(200).json({ message: 'Login successful', name: name });
		  } else {
			res.status(401).json({ error: 'Incorrect password' });
		  }
		} else {
		  // Redirect to the sign-up page
		  res.status(404).json({ error: 'User not found' }); // Replace '/signup.html' with your actual sign-up page URL
		}
	  }
	});
  });

app.post('/logout', function (req, res) {
	// Perform logout actions such as clearing session data or authentication tokens
	// ...
	localStorage.removeItem('name')
  
	res.status(200).json({ message: 'Logout successful' });
  });
  

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	db.collection('details').findOne({ email: email }, function(err, result) {
		if (err) {
		  console.error(err);
		  res.status(500).json({ error: 'An error occurred' });
		} else {
		  if (result) {
			// User already exists, handle accordingly (e.g., show an error message)
			res.status(409).json({ error: 'User already exists' });
		  } else {
			var data = {
				"name": name,
				"email":email,
				"password":pass,
				"phone":phone
			}
			db.collection('details').insertOne(data,function(err, collection){
				if (err) throw err;
				console.log("Record inserted Successfully");
					
			});
			return res.redirect('login.html');
		  }
		}
	  });
	
});


app.get('/',function(req,res){
		return res.redirect('/login.html');
}).listen(3000)



console.log("server listening at port 3000");