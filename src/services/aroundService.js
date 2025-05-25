import CONSTANTS from "../components/constants/constants"

const setHeaderAuthorization=(token)=>{
    const requestHeader = new Headers();
    requestHeader.set("Authorization",`Bearer ${token.trim()}`);
    requestHeader.set("Access-Control-Allow-Origin","*");
    requestHeader.set("Content-Type","application/json");
    requestHeader.set("Accept","*");
    return requestHeader;
}

export const getMyArounds=(token,set,customerId)=>{
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.CUSTOMER_URL+"/"+customerId+"/"+CONSTANTS.AROUND_URL,{
        method:"GET",
        headers:setHeaderAuthorization(token)
    })
    .then(result=>result.json())
    .then(data=>{
        //console.log("data received:",data);
        set({arounds:data})
    })
}

export const getOneAround=(token, id)=>{
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

export const postAround=(token, payload,callBack)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AROUND_POST_URL,{
        method:"POST",
        headers:requestHeader,
        body:JSON.stringify(payload)

    })
    .then(result=>result.json())
    .then(data=>{
        callBack(data);
    })
}

export const putAround=(token, payload,id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AROUND_URL+"/"+id,{
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

export const deleteAround=(token,id)=>{
    const requestHeader = setHeaderAuthorization(token);
    fetch(CONSTANTS.BASE_URL_USERS+CONSTANTS.AROUND_POST_URL+"/"+id,{
        method:"DELETE",
        headers:requestHeader,

    })
    .then(result=>result.text())
    .then(data=>{
        console.log("data received:",data);
        //set({company:null})
    })
}