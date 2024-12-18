const mongo = require('mongoose');
const Schema = mongo.Schema;
const Niveau=new Schema (
    {
        nom:String,
        nbr_chambre: Number,
        etat_construction: {
            type: Boolean,
            default: false,
            },
        id_batiment:String
        
    }
);

module.exports=mongo.model('niveau',Niveau)