const express=require('express');
import cors from 'cors';
import { createConnection } from 'mysql2/promise';

const path = require('path');
import usersRouter from './routers/users.router';
import matiereRouter from './routers/matiere.router';
import classeRouter from './routers/classe.router';
import documentRouter from './routers/document.router';
const mysql=require('mysql');
export const db =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'studystack'
});

db.connect((err:any)=>
{
  if(err)
  {
    throw err;
  }
  console.log('Mysql Connected ..');
})
const app=express();
app.use(express.json(),cors(),(req:any, res:any, next:any) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const uploadDirectory = path.join(__dirname, 'uploads');
app.use("/users",usersRouter)
app.use("/matiere",matiereRouter)
app.use("/classe",classeRouter)
app.use("/document",documentRouter)
app.use('/uploads', express.static(uploadDirectory));

app.listen('3000',()=>{
  console.log('Server started on port 3000');
})