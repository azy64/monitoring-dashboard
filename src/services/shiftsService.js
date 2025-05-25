import CONSTANTS from "../components/constants/constants"

const setHeaderAuthorization=(token)=>{
    const requestHeader = new Headers();
    requestHeader.set("Authorization",`Bearer ${token.trim()}`);
    requestHeader.set("Access-Control-Allow-Origin","*");
    requestHeader.set("Content-Type","application/json");
    requestHeader.set("Accept","*");
    return requestHeader;
}
const RESSOURCE_URL= CONSTANTS.BASE_URL_USERS+CONSTANTS.SHIFT_URL;

export const getShifts=(token,agentId,callBack)=>{
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AGENT_POST_URL+"/"+agentId+"/"+CONSTANTS.SHIFT_URL,{
        method:"GET",
        headers:setHeaderAuthorization(token)
    })
    .then(result=>result.json())
    .then(data=>{
        callBack(data)
    })
}

export const getOneShift=(token, id)=>{
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

export const postShift=(token, payload)=>{
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

export const putShift=(token, payload,id)=>{
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

export const deleteShift=(token, id)=>{
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