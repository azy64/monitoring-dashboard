import CONSTANTS from "../components/constants/constants"

const setHeaderAuthorization=(token)=>{
    const requestHeader = new Headers();
    requestHeader.set("Authorization",`Bearer ${token.trim()}`);
    requestHeader.set("Access-Control-Allow-Origin","*");
    requestHeader.set("Content-Type","application/json");
    requestHeader.set("Accept","*");
    return requestHeader;
}
const RESSOURCE_URL= CONSTANTS.BASE_URL_USERS+CONSTANTS.CONTROL_POINT_URL;

export const getControlPoints=(token,set,aroundId)=>{
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AROUND_POST_URL+"/"+aroundId+"/"+CONSTANTS.CONTROL_POINT_URL,{
        method:"GET",
        headers:setHeaderAuthorization(token)
    })
    .then(result=>result.json())
    .then(data=>{
        console.log("data received:",data);
        set({controlPoints:data})
    })
}

export const getOneControlPoint=(token, id)=>{
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

export const postControlPoint=(token, payload,callBack)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(RESSOURCE_URL,{
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

export const putControlPoint=(token, payload,id)=>{
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

export const deleteControlPoint=(token, id)=>{
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