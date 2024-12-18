const express = require('express');
const router= express.Router();
const batimentController = require ('../controller/batimentController')


router.post("/addBatiment", batimentController.addBatiment);
router.get("/getallbatiment", batimentController.getallbatiment);
router.get("/getbyidbatiment/:id", batimentController.getbyidbatiment);
router.delete("/deletebatiment/:id", batimentController.deletebatiment);
router.post("/addniveau", batimentController.addniveau);
router.put("/construction/:niveauId", batimentController.construction);
router.get("/niveau",(req,res)=>{res.render("niveau");});

module.exports = router;