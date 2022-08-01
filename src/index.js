const express=require('express');
const morgan=require('morgan');
const index= express();
const path=require('path');
const mysql=require('mysql');
const myConnection=require('express-myconnection');

// Importing Routes

const agendaRoutes=require ('./routes/agenda');

//Settings
index.set('port', process.env.PORT || 4000);
index.set('view engine', 'ejs');
index.set('views', path.join(__dirname, 'views'));

//Middlewares
index.use(morgan('dev'));
index.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: '3306',
    database: 'agendacrud'
},'single'))
index.use(express.urlencoded({extended: false}));

//Routes

index.use('/',agendaRoutes);


//Starting Server
index.listen(index.get('port'), ()=>{
    console.log('Server on port 4000');
});