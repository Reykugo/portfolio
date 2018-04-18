var mongoose = require("mongoose");
require('../../models/Data');

const DATA ={
    "profileDescription":"Je suis actuellement étudiant en quatrième année (Mastère 1) d'informatique en alternance au sein de l'école Ingésup YNOV et en tant que développeur Python chez TWIN GROUP. Je me spécialise dans le développement informatique et logiciel. <br/><br/>\n\nIntéressé par développement back-end, je me suis dirigé dans les technologies Python et Node js.<br/><br/>\n\nJ'ai pu à travers des projets professionnels, scolaires et personnels, travailler sur plusieurs technologies différentes. Je suis donc capable de m'adapter à plusieurs situations et domaines tel que le développement logiciel, mobile ou web.<br/><br/>\n\nDynamique et motivé, je suis déterminé à me former rapidement et efficacement. \nD'autre part, Je m'investi totalement dans les tâches qui me sont confiés afin de les mener à bien!",
    "skills":{
        "backend":[
            {"name":"python","img":"./img/python.png","alt":"python","description":"J'ai pu effectué plusieurs projets en python"},
            {"name":"java","img":"./img/java.png","alt":"java","description":""}
        ],
        "frontend":[
            {"name":"react","img":"https://wpoffice365.com/wp-content/uploads/2017/07/react-logo.png","alt":"react","description":""}
        ]
    }
}

mongoose.Promise = global.Promise;
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/portfolio', function(err){
  if(err) {
    throw err;
  }else{
    var Data = mongoose.model("Data")
    Data.findOne().then(data =>{
            if(data){
                data.update(DATA).catch(e=>{throw e})
            }
            else{
                new Data(DATA).save().catch(e=>{throw e})
            }
        })
  }
})
