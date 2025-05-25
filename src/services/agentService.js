import CONSTANTS from "../components/constants/constants"

const setHeaderAuthorization=(token)=>{
    const requestHeader = new Headers();
    requestHeader.set("Authorization",`Bearer ${token.trim()}`);
    requestHeader.set("Access-Control-Allow-Origin","*");
    requestHeader.set("Content-Type","application/json");
    requestHeader.set("Accept","*");
    return requestHeader;
}

export const getMyAgents=(token,companyId,callBack)=>{
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.COMPANY_URL+"/"+companyId+"/"+CONSTANTS.AGENT_URL,{
        method:"GET",
        headers:setHeaderAuthorization(token)
    })
    .then(result=>result.json())
    .then(data=>{
        //console.log("data received:",data);
        callBack(data);
        //set({agents:data})
    })
}

export const getOneAgent=(token, id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AROUND_URL+"/"+id,{
        method:"GET",
        headers:requestHeader,

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        ///set({company:data})
    })
}

export const postAgent=(token, payload,callBack)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AGENT_POST_URL,{
        method:"POST",
        headers:requestHeader,
        body:JSON.stringify(payload)

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("agent saved:", data);
        callBack(data);
    })
}

export const putAgent=(token, payload,id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AGENT_POST_URL+"/"+id,{
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

export const deleteAgent=(token,id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AGENT_POST_URL+"/"+id,{
        method:"DELETE",
        headers:requestHeader,

    })
    .then(result=>result.text())
    .then(data=>{
        console.log("data received:",data);
        //set({company:null})
    })
}