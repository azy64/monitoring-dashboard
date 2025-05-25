import CONSTANTS from "../components/constants/constants"

const setHeaderAuthorization=(token)=>{
    const requestHeader = new Headers();
    requestHeader.set("Authorization",`Bearer ${token.trim()}`);
    requestHeader.set("Access-Control-Allow-Origin","*");
    requestHeader.set("Content-Type","application/json");
    requestHeader.set("Accept","*");
    return requestHeader;
}
const RESSOURCE_URL= CONSTANTS.BASE_URL_USERS+CONSTANTS.CUSTOMER_URL;
const RESOURCE_POST_URL=CONSTANTS.BASE_URL_USERS+CONSTANTS.CUSTOMER_POST_URL;

export const getCustomer=(token,set)=>{
    fetch(RESSOURCE_URL,{
        method:"GET",
        headers:setHeaderAuthorization(token)
    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        set({customers:data})
    })
}

export const getOneCustomer=(token, id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(RESSOURCE_URL+"/"+id,{
        method:"GET",
        headers:requestHeader,

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        //set({company:data})
    })
}

export const postCustomer=(token, payload,callBack)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(RESOURCE_POST_URL,{
        method:"POST",
        headers:requestHeader,
        body:JSON.stringify(payload)

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        callBack(data);
        //set({company:data.company})
    })
}

export const putCustomer=(token, payload,id,callBack)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(RESOURCE_POST_URL+"/"+id,{
        method:"PUT",
        headers:requestHeader,
        body:JSON.stringify(payload)

    })
    .then(result=>result.json())
    .then(data=>{
        //console.log("data received:",data);
        callBack(data);
    })
}

export const deleteCustomer=(token, id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(RESOURCE_POST_URL+"/"+id,{
        method:"DELETE",
        headers:requestHeader,

    })
    .then(result=>result.text())
    .then(data=>{
        console.log("data received:",data);
        //set({company:null})
    })
}