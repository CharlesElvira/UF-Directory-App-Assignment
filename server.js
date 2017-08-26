var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) 
{
    /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
  var parsedUrl = url.parse(request.url);
  
  if(request.method == 'GET' && parsedUrl.pathname == '/listings')//Response only if GET is used and a precise path
  {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(listingData);
  }
  else
  {
    response.writeHead(404);//Write 404 in the head for error
    response.end('Bad gateway error');
  }
};

server = http.createServer(requestHandler).listen(port, 
  function()
  {
    console.log('server listening on: http://localhost:'+ port);
  });

fs.readFile('listings.json', 'utf8', function(err, data) //asynchronous call to read a file
{
/*
  This callback function should save the data in the listingData variable, 
  then start the server. 
  */
  listingData = data;
    
});
