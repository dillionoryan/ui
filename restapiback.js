var express= require('express');

var app= express();

var api_routes= require('./restapiroutes.js');
app.use('/api', api_routes);


app.use('/demo', express.static('frontend'));
//Start server

app.listen(3000, function(){
  console.log("Server is running")
  //console.log(coursejson);
})
