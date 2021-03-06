
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

//MODULOS
var home = require('./app/controllers/home');



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, './public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//RUTAS DE LA APLICACIÓN 
app.use(home);

app.get('/test',function  (req,resp) {
	resp.render('./home/index',{
		title:"hola, desde el controlador home"
	});

	
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
