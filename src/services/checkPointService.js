import CONSTANTS from "../components/constants/constants"

const setHeaderAuthorization=(token)=>{
    const requestHeader = new Headers();
    requestHeader.set("Authorization",`Bearer ${token.trim()}`);
    requestHeader.set("Access-Control-Allow-Origin","*");
    requestHeader.set("Content-Type","application/json");
    requestHeader.set("Accept","*");
    return requestHeader;
}
const RESSOURCE_URL= CONSTANTS.BASE_URL_USERS+CONSTANTS.CHECK_POINT_URL;

export const getCheckPoints=(token,set,agentId)=>{
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AGENT_URL+"/"+agentId+"/"+CONSTANTS.CHECK_POINT_URL,{
        method:"GET",
        headers:setHeaderAuthorization(token)
    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        set({customers:data})
    })
}

export const getOneCheckPoint=(token, id)=>{
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

export const postCheckPoint=(token, payload)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(RESSOURCE_URL,{
        method:"POST",
        headers:requestHeader,
        body:JSON.stringify(payload)

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        //set({company:data.company})
    })
}

export const putCheckPoint=(token, payload,id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(RESSOURCE_URL+"/"+id,{
        method:"PUT",
        headers:requestHeader,
        body:JSON.stringify(payload)

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        //set({company:data})
    })
}

export const deleteCheckPoint=(token, id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(RESSOURCE_URL+"/"+id,{
        method:"DELETE",
        headers:requestHeader,

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        //set({company:null})
    })
}