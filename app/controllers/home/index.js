var express=require('express');
var app=module.exports=express();

//AHORA ASIGNAMOS LA RUTA DONDE EL CONTROLLADOR VA A BUSCAR LA VISTA

app.set("views",'/app/views/home/index');

app.get('/',function  (req,resp) {
	debugger;
	console.log(__dirname);
	//resp.send("saludo jonathan diaz");
	resp.render('index',{
		title:"hola, desde el controlador home"
	});

});

