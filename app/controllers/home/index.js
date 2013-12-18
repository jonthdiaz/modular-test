var express=require('express');
var app=module.exports=express();

//AHORA ASIGNAMOS LA RUTA DONDE EL CONTROLLADOR VA A BUSCAR LA VISTA

app.set('views', './app/views/home');

app.get('/',function  (req,resp) {
	resp.render('./index',{
		title:"hola, desde el controlador home"
	});
});

