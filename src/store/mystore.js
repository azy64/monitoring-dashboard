import { create } from "zustand";
import CONSTANTS from "../components/constants/constants";
import { persist } from "zustand/middleware";
import { getCompany, putCompany } from "../services/companyService";
import { getCustomer, postCustomer } from "../services/customerService";
//import { combine } from "zustand/middleware";


const useLoginStore = create(persist((set)=>({
    user:null,
    token:null,
    refreshToken:null,
    isAuthenticated:false,
    loading:false,
    company:{},
    customers:[],
    login(username,password){
        let requestHeader = new Headers();
        requestHeader.set("Content-Type","application/json");
        fetch(CONSTANTS.AUTH_LOGIN,{
            method: "POST",
            body: JSON.stringify({username,password}),
            headers:requestHeader
        })
        .then(result=>result.json())
        .then(data=>{
            set({
                user:data.user,isAuthenticated:true,loading:false,
                token:data.access_token,refreshToken:data.refresh_token
            }
            )
            ;
            //console.log("la data:",data," state:",data.user,"====",data.access_token);
        })
        . catch(error=>{
            set({
                loading:false
            })
        });
    },
    logout(){
        localStorage.removeItem(CONSTANTS.STORE_NAME);
        set({
            user:null,
            token:null,
            refreshToken:null,
            isAuthenticated:false,
            loading:false,
        })
    },
    changeLoading(){
        set(state=>({
            loading:!state.loading
        }))
    },
    findMyCompany(token,userId){
        getCompany(token,userId,set);
    },
    updateMyCompany(token,company){
        try{
            set({loading:true});
            putCompany(token,set,company,company.id);
            set({loading:false});
        }
        catch(error){
            set({loading:false});
        }
        
    },
    saveNewCustomer(token,customer){
        try{
            set({loading:true});
            //console.log("operation is starting...:",customer);
            postCustomer(token,set,customer);
            set({loading:false});
        }
        catch(error){
            set({loading:false});
        }
    },
    findCustomers(token){
        getCustomer(token,set);
    }
}),{name:CONSTANTS.STORE_NAME}));

export default useLoginStore;