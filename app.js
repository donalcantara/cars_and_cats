
var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request,response){

	console.log('client request URL: ', request.url);
	//this is how we do routing:
	if(request.url === '/cars') {
		fs.readFile('views/cars.html', function (errors, contents){

			response.writeHead(200, {'Content-Type': 'text/html'}); //send data about response
			
			response.write(contents); // send response body
			
			response.end(); // finished!

		});
	}
  else if(request.url === '/cats') {
		fs.readFile('views/cats.html', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents); 
			response.end();
		});
	}
  else if(request.url === '/stylesheets/style.css'){
     fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
  else if(request.url === '/images/clean.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/clean.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/black.jpg'){
    fs.readFile('./images/black.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/eyes.jpg'){
    fs.readFile('./images/eyes.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/cart.jpg'){
    fs.readFile('./images/cart.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/pika.jpg'){
    fs.readFile('./images/pika.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  else if(request.url === '/images/white.jpg'){
    fs.readFile('./images/white.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
  

	else {
		response.writeHead(404);
		response.end('File not found!');
	}
});

server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");