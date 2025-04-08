const customerFormType={
    id:{id:1,type:"text",size:300,disable:true,label:"numero d'identification",title:"Identification"},
    name:{id:2,type:"text",size:150,label:"Nom du client",title:"nom du client",required:true},
    //username:{type:"text", disable:true,label:"garant de la compgnie"},
    siret:{id:8,type:"text",label:"Siret de la compagnie"},
    email:{id:3,type:"email",label:"email du client", size:300,title:"email du client",required:true},
    createAt:{id:4,type:"date",label:"Compte actif ?",disable:true,title:""},
    phone:{id:5,required:true,type:"tel",label:"numero de téléphone du client",title:"numero de téléphone",size:10},
    address:{id:6,required:true,type:"text",label:"adresse du client",title:"adresse postal",size:150},
    referenceNumber:{id:7,required:true,type:"text",label:"le numero de reférence", title:"numero de reférence",size:32}
};
export default customerFormType;