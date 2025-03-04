const companyFormType={
        id:{type:"text",size:300,disable:true,label:"numero d'identification",title:"Identification"},
        name:{type:"text",size:150,label:"Nom de la compagnie",title:"nom de l'entreprise",required:true},
        username:{type:"text", disable:true,label:"garant de la compgnie"},
        email:{type:"email",label:"email de la compagnie", size:300,title:"email de l'entreprise",required:true},
        activated:{type:"boolean",label:"Compte actif ?",disable:true,title:""},
        phone:{required:true,type:"tel",label:"numero de téléphone de l'entreprise",title:"numero de téléphone",size:10},
        address:{required:true,type:"text",label:"adresse de l'entreprise",title:"adresse postal",size:150},
        referenceNumber:{required:true,type:"text",label:"le numero de reférence", title:"numero de reférence",size:32}
    };
export default companyFormType;