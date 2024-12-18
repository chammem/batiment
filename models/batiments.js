const mongo = require('mongoose');
const Schema = mongo.Schema;
const Batiment=new Schema (
    {
        nom:String,
        nbr_niveau:
        {
            type:Number,
            default: 0,
            },
        description:String,
        adresse:String
        } 
);

module.exports=mongo.model('batiment',Batiment)