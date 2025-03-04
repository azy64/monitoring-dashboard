const customerFormType={
    id:{type:"text",size:300,disable:true,label:"numero d'identification",title:"Identification"},
    name:{type:"text",size:150,label:"Nom du client",title:"nom du client",required:true},
    //username:{type:"text", disable:true,label:"garant de la compgnie"},
    email:{type:"email",label:"email du client", size:300,title:"email du client",required:true},
    createAt:{type:"date",label:"Compte actif ?",disable:true,title:""},
    phone:{required:true,type:"tel",label:"numero de téléphone du client",title:"numero de téléphone",size:10},
    address:{required:true,type:"text",label:"adresse du client",title:"adresse postal",size:150},
    referenceNumber:{required:true,type:"text",label:"le numero de reférence", title:"numero de reférence",size:32}
};
export default customerFormType;