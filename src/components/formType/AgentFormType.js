const AgentFormType={
    id:{id:1,type:"text",size:300,disable:true,label:"numero d'identification",title:"Identification"},
    nom:{id:2,type:"text",size:150,label:"Nom",title:"Nom",required:true},
    prenom:{id:3,type:"text",size:150,label:"Prenom",title:"prenom",required:true},
    typeUser:{id:10,type:"select",label:"Type d'agent"},
    phoneNumber:{id:11,type:"text",size:150,label:"numero de telephone",title:"telephone",required:true},
    username:{id:4,type:"email",size:150,label:"email",title:"email",required:true},
    password:{id:5,type:"password",size:150,label:"mot de passe",title:"mot de passe",required:true},
    createAt:{id:6,type:"date",label:"Compte actif ?",disable:true,title:""},
    address:{id:7,required:true,type:"text",label:"adresse de l'agent",title:"adresse postal",size:150},
    pictureUser:{id:8,type:"file",size:150,label:"photo de l'agent",title:"photo",required:true},
    birth:{id:9,required:true,type:"date",label:"date de naissance",title:"date de naissance",size:350},
    //longitude:{id:6,required:false,type:"text",label:"Latitude",title:"latittude",size:350},

};
export default AgentFormType;