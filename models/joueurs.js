const mongo = require('mongoose');
const Schema = mongo.Schema;
const Joueur=new Schema (
    {
        pseudo:String,
        sante:{
        type:Number,
        default: 100,
        },
        score:{
        type:Number,
        default: 0,
        }
    }
);

module.exports=mongo.model('joueur',Joueur)