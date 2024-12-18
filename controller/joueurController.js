const Joueur = require("../models/joueurs");

async function newjoueur (req,res) {
    try{
        console.log(req.body)
        const joueur = new Joueur(req.body);
        await joueur.save();
        res.status(200).send(`le Joueur a été ajouté avec succès : ${joueur.pseudo}`);
        console.log(joueur)
    }catch(err)
    {
        console.log(err)
    }
    
};

async function getalljoueur(req,res) {
    try{
        const joueurs = await Joueur.find();
        res.status(200).json(joueurs);
    }catch(err)
    {
        console.log(err)
    }
};

async function getjoueur (req,res)  {
    try{
        const joueur = await Joueur.findById(req.params.id);
        res.status(200).json(joueur);
    }catch(err)
    {
        console.log(err)
    }
    
};

async function deletejoueur (req,res)  {
    try{
        await Joueur.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted");
    }catch(err)
    {
        console.log(err)
    }
    
}

async function attaque (req,res)  {
    try{
        const { attaquantId, victimeId } = req.params; 

        const attaquant = await Joueur.findById(attaquantId);
        const victime = await Joueur.findById(victimeId);

         attaquant.score+=10
         victime.sante-=20

         await attaquant.save();
         await victime.save();

        res.status(200).json({attaquant,victime});
    }catch(err)
    {
        console.log(err)
    }
    
}




module.exports = {newjoueur,getalljoueur,getjoueur,deletejoueur,attaque}
