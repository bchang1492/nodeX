var express = require('express'); 
var app = express(); app.get('/', 
function(req, res){ 
    res.send('Hello World!'); 
}); 

app.listen(3300, function(){ 
    console.log("Express server is listening on port 3300."); 
});
