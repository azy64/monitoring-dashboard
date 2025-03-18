import CONSTANTS from "../components/constants/constants"

const setHeaderAuthorization=(token)=>{
    const requestHeader = new Headers();
    requestHeader.set("Authorization",`Bearer ${token.trim()}`);
    requestHeader.set("Access-Control-Allow-Origin","*");
    requestHeader.set("Content-Type","application/json");
    requestHeader.set("Accept","*");
    return requestHeader;
}

export const getMyAround=(token,set)=>{
    fetch(CONSTANTS.BASE_URL_USERS+userId+"/"+CONSTANTS.COMPANY_URL,{
        method:"GET",
        headers:setHeaderAuthorization(token)
    })
    .then(result=>result.json())
    .then(data=>{
        //console.log("data received:",data);
        set({company:data[0]})
    })
}

export const getOnearound=(token, set,id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.COMPANY_URL+"/"+id,{
        method:"GET",
        headers:requestHeader,

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        set({company:data})
    })
}

export const postAround=(token, set, payload)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.COMPANY_URL,{
        method:"POST",
        headers:requestHeader,
        body:JSON.stringify(payload)

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        set({company:data.company})
    })
}

export const putAround=(token, set, payload,id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.COMPANY_URL+"/"+id,{
        method:"PUT",
        headers:requestHeader,
        body:JSON.stringify(payload)

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        set({company:data})
    })
}

export const deleteAround=(token, set,id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.COMPANY_URL+"/"+id,{
        method:"DELETE",
        headers:requestHeader,

    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        set({company:null})
    })
}