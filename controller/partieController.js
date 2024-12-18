const Joueur = require("../models/joueurs");
const Partie = require("../models/partie");


async function newpartie (req,res) {
    try{
           const { joueur1Id, joueur2Id } = req.params; 
        
                const joueur1 = await Joueur.findById(joueur1Id);
                const joueur2 = await Joueur.findById(joueur2Id);
        const partie = new Partie({
            nom: req.body.nom,
            joueur_1: joueur1,
            joueur_2: joueur2,
            etat: 'en cours' 
        });
        await partie.save();
        res.status(200).json(partie)
    }catch(err)
    {
        console.log(err)
    }
    
};

async function newpartiesocket (data) {
    try{
          const partie = new Partie({
            nom: data.nompartie,
            joueur_1: data.id1,
            joueur_2: data.id2,
            etat: 'en cours' 
        });
        await partie.save();
    }catch(err)
    {
        console.log(err)
    }
    
};


async function affichersocket(data)  {
    try{
        const joueur1 = await Joueur.findById(data.id1);
        const joueur2 = await Joueur.findById(data.id2);
        
      
        return { j1:joueur1,j2:joueur2}
    }catch(err)
    {
        console.log(err)
    }
    
};

module.exports = {newpartie,newpartiesocket,affichersocket}
