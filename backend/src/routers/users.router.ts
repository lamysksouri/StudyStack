// users.router.js
import {db} from "../server";
const express = require('express');
const router = express.Router();
const pool = require('../server');

router.get("/", (req:any, res:any)=> {

  let sql ='select * from users';
  db.query(sql,(err:any,result:any)=>{
   if (err) throw err;
   res.send(result)
  });

});
router.get("/:id", (req:any, res:any)=> {
 
   const id=req.params.id;
  let sql ='select * from users where id='+id;
  db.query(sql,(err:any,result:any)=>{
   if (err) throw err;
   res.send(result)
  });

});
router.get("/professeur/prof", (req:any, res:any)=> {
 
 let sql ='select * from users where type in( "professeur")';
 db.query(sql,(err:any,result:any)=>{
  if (err) throw err;
  res.send(result)
 });

});
router.get("/email/:email", (req:any, res:any)=> {
 
  const email=req.params.email;
 let sql ='select * from users where email='+"'"+email+"'";
 db.query(sql,(err:any,result:any)=>{
  if (err) throw err;
  else
   { if (result.length > 0) {
      res.send(result[0]); // Envoyez les détails du premier utilisateur trouvé
    } else {
      res.status(404).send("User not found");
    }
  }})
});
router.post("/", (req:any, res:any) => {
  const { fullname, email, password, mobile, type } = req.body;

  // Insert user data into the database
  const sql = 'INSERT INTO users (fullname, email, password, mobile, type) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [fullname, email, password, mobile, type], (err:any, result:any) => {
    if (err) {
      console.error("Error during signup:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("User signed up successfully:", result);
      res.status(200).send(result);
    }
  });
});
router.post("/prof", (req: any, res: any) => {
  const { id, id_matiere, selectedClasses } = req.body;

  // Insert user data into the database
  const insertUserSql = 'INSERT INTO users(id, fullname, email, password, mobile, type) VALUES (?, ?, ?, ?, ?, ?)';
  const userData = [id, req.body.fullname, req.body.email, req.body.password, req.body.mobile, req.body.type];

  db.query(insertUserSql, userData, (err: any, userResult: any) => {
    if (err) {
      console.error("Error during user registration:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Counter to keep track of asynchronous operations
    let completedOperations = 0;
    const totalOperations = selectedClasses.length;

    selectedClasses.forEach((id_classe: any) => {
      const insertProfSql = 'INSERT INTO matiere_classe(id_prof, id_matiere,id_classe) VALUES (?,?,?)';
      const matiereClasseData = [id, id_matiere, id_classe];

      db.query(insertProfSql, matiereClasseData, (mcErr: any, mcResult: any) => {
        completedOperations++;

        if (mcErr) {
          console.error("Error during matiere_classe insertion:", mcErr);
        } else {
          console.log("Matiere_classe added successfully for class ID:", id_classe);
        }

        // Check if all operations are completed before sending the response
        if (completedOperations === totalOperations) {
          res.status(200).json({ message: "Matiere_classe added successfully" });
        }
      });
    });
  });
});


router.delete("/:id", async (req: any, res: any) => {
  const id = req.params.id;
  let sql = 'delete from users where id=' + id;
  db.query(sql, (err: any, result: any) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" }); // En cas d'erreur de base de données
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "User not found" }); // Si aucun utilisateur n'est supprimé (ID inexistant)
    } else {
      res.status(200).json({ message: "User deleted successfully" }); // Si la suppression est réussie
    }
  });
});


// Autres routes pour les opérations CRUD sur les utilisateurs
export default router;
