// users.router.js
import {db} from "../server";
const express = require('express');
const router = express.Router();
const pool = require('../server');

router.get("/", (req:any, res:any)=> {

  let sql ='select * from matiere';
  db.query(sql,(err:any,result:any)=>{
   if (err) throw err;
   res.send(result)
  });

});
router.get("/:id", (req:any, res:any)=> {
 
  const id=req.params.id;
  let sql ='select distinct id ,nom , planning from matiere m join matiere_classe mc on id=id_matiere where id_prof='+id;
  db.query(sql,(err:any,result:any)=>{
   if (err) throw err;
   res.send(result)
  });

});

// Autres routes pour les opérations CRUD sur les utilisateurs
export default router;
