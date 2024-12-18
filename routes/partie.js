const express = require('express');
const router= express.Router();
const partieController = require ('../controller/partieController')


router.post("/newpartie/:joueur1Id/:joueur2Id", partieController.newpartie);
router.get("/partie",(req,res)=>{res.render("partie");});

module.exports = router;
