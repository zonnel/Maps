var express= require('express');
var app=express();
var mysql= require('mysql');

app.set('view engine','html');
app.use(express.static(__dirname+'/views'));

var conexion= mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	port: '3306',
	database: 'tecnologico'
});

conexion.connect();

app.get('/',function(req,res){
	res.render(__dirname+'index.html');
});

app.get('/edificios',function(req,res){
	conexion.query("SELECT * FROM edificios",function(err,rows,fields){
		if (err) {
			res.send("error!!!");
			return;
		}
		res.json(rows);
	});

});

app.get('/imagenes/:ide',function(req,res){
	conexion.query('SELECT * FROM edificios where idEdificios=?',req.params.ide,function(err,rows,fields){
		if(err) {
			res.send("error en la consulta");
			return;
		}else{
			if (rows.length>0) {
				//res.json(rows);
				res.render(__dirname+'imagen.html');
			}
		}
		console.log(rows.length);
		res.json(rows);
	});
});

app.get('/departamentos',function(req,res){
	conexion.query('SELECT * FROM departamento',function(err,rows,fields){
		if (err) {
			res.send("error!!!")
			return;
		}
		res.json(rows);
	});
});
app.listen(3000,function(){
	console.log('servidor iniciado...en el puerto 30000');
})