const companyFormType={
        id:{id:1,type:"text",size:300,disable:true,label:"numero d'identification",title:"Identification"},
        name:{id:2,type:"text",size:150,label:"Nom de la compagnie",title:"nom de l'entreprise",required:true},
        username:{id:3,type:"text", disable:true,label:"garant de la compgnie"},
        email:{id:4,type:"email",label:"email de la compagnie", size:300,title:"email de l'entreprise",required:true},
        activated:{id:5,type:"radio",label:"Compte actif ?",disable:true,title:""},
        siret:{id:6,disable:true, title:"siret",label:"SIRET", type:"text"},
        phone:{id:7,required:true,type:"tel",label:"numero de téléphone de l'entreprise",title:"numero de téléphone",size:10},
        address:{id:8,required:true,type:"text",label:"adresse de l'entreprise",title:"adresse postal",size:150},
        referenceNumber:{id:9,required:true,type:"text",label:"le numero de reférence", title:"numero de reférence",size:32}
    };
export default companyFormType;