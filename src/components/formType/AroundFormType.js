const customerFormType={
    id:{id:1,type:"text",size:300,disable:true,label:"numero d'identification",title:"Identification"},
    label:{id:2,type:"text",size:150,label:"denomination",title:"denomination",required:true},
    createAt:{id:3,type:"date",label:"Compte actif ?",disable:true,title:""},
    customer:{id:4,required:true,type:"text",label:"Client",title:"client",size:10},
    address:{id:5,required:true,type:"text",label:"adresse du client",title:"adresse postal",size:150},
};
export default customerFormType;