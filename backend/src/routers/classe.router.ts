import {db} from "../server";
const express = require('express');
const router = express.Router();
const pool = require('../server');



router.get("/", (req:any, res:any)=> {

    let sql ='select * from classe';
    db.query(sql,(err:any,result:any)=>{
     if (err) throw err;
     res.send(result)
    });
  
  });

  
export default router;