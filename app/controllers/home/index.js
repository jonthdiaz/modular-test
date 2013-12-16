var express=require('express');
var app=module.exports=express();

//AHORA ASIGNAMOS LA RUTA DONDE EL CONTROLLADOR VA A BUSCAR LA VISTA

app.set("views",__dirname + './app/views/home');

app.get('/',function  (req,resp) {
	resp.send("saludo jonathan diaz");

	/*resp.render('index',{
		title:"hola, desde el controlador home"
	});*/
});

