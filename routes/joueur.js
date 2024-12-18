const express = require('express');
const router= express.Router();
const joueurController = require ('../controller/joueurController.js')


router.post("/newjoueur", joueurController.newjoueur);
router.get("/getalljoueur", joueurController.getalljoueur);
router.get("/getjoueur/:id", joueurController.getjoueur);
router.delete("/deletejoueur/:id", joueurController.deletejoueur);
router.put("/attaque/:attaquantId/:victimeId", joueurController.attaque);

module.exports = router;