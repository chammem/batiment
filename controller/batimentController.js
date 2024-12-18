const Batiment = require("../models/batiments");
const Niveau = require("../models/niveaus");

async function addBatiment (req,res) {
    try{
        console.log(req.body)
        const batiment = new Batiment(req.body);
        await batiment.save();
        res.status(200).json(batiment);
        console.log(batiment)
    }catch(err)
    {
        console.log(err)
    }
}; 

    async function getallbatiment (req,res) {
        try{
            const batiments = await Batiment.find();
            res.status(200).json(batiments);
        }catch(err)
        {
            console.log(err)
        }
    };

    async function getbyidbatiment (req,res)  {
        try{
            const batiment = await Batiment.findById(req.params.id);
            res.status(200).json(batiment);
        }catch(err)
        {
            console.log(err)
        }
        
    };

    async function deletebatiment (req,res)  {
        try{
            await  Batiment.findByIdAndDelete(req.params.id);
            res.status(200).send("deleted");
        }catch(err)
        {
            console.log(err)
        }
        
    }

async function addniveau (req,res) {
    try{
           
        const niveau = new Niveau({
            nom: req.body.nom,
            nbr_chambre: req.body.nbr_chambre,
            id_batiment: req.body.id_batiment
        });
        await niveau.save();
        res.status(200).json(niveau)
    }catch(err)
    {
        console.log(err)
    }
    
}; 

async function construction (req,res)  {
    try{
        const niveauId = req.params.niveauId;
        const niveau = await Niveau.findById(niveauId);
        const batiment = await Batiment.findById(niveau.id_batiment);

        
        if (niveau.etat_construction) {
            return res.status(400).json({ message: "Le niveau est déjà construit." });
        }
        niveau.etat_construction=true;
        batiment.nbr_niveau +=1


         await niveau.save();
         await batiment.save();

        res.status(200).json({niveau,batiment});
    }catch(err)
    {
        console.log(err)
    }
    
}

async function getnonbati ()  {
    try{
        const niveauxNonConstruits = await Niveau.find({ etat_construction: false });
        return niveauxNonConstruits;
     }catch(err)
    {
        console.log(err)
    }
    
};

module.exports = {addBatiment,getallbatiment,getbyidbatiment,deletebatiment,addniveau,construction,getnonbati}
