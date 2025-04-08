import { useCallback, useEffect, useState } from "react";
import useLoginStore from "../../../store/mystore";
import { Tab, Table, Tabs } from "react-bootstrap";
import Form from "../../forms/Form";
import companyFormType from "./companyFormType";
import customerFormType from "../customer/customerFormType";
//import { Badge } from "@/components/ui/badge";

const Company = () => {
    const findMyCompany = useLoginStore(state => state.findMyCompany);
    const user = useLoginStore(state=>state.user);
    const token = useLoginStore(state => state.token);
    const company = useLoginStore(state => state.company);
    const updateMyCompany= useLoginStore(state=>state.updateMyCompany);
    const saveNewCustomer = useLoginStore(state=>state.saveNewCustomer);
    const [client,setClient]= useState({name:"",address:"",referenceNumber:"",siret:"",phone:"",email:""});
    const customerInitialValues={id:"",name:"",address:"",
        referenceNumber:"",siret:"",phone:"",email:"", company:{id:company.id} };

    useEffect(() => {
        findMyCompany(token,user.id);
    }, []);
    const clickHandler = useCallback((e) => {
        const attribute= e.target.dataset.source;
        company[attribute]=e.target.value;
        useLoginStore.setState((state)=>({company:{
            ...state.company,
            [`${attribute}`]:company[attribute]
        }}));
        //e.target.focused()

    },[]);
    const addCustomer=(event)=>{
        const attribute= event.target.dataset.source;
        const value=event.target.value;
        setClient({
            ...client,
            [`${attribute}`]:value
        })
    }
    const save=()=>{
        updateMyCompany(token,company);
    }
    const saveClient=()=>{
        saveNewCustomer(token,{...client,company:{id:company.id}});
        console.log("client:",{...client,company:{id:company.id}});
        setClient(customerInitialValues);
    }


    return (
        <div>
            <h1>{company?.name}</h1>
            <Tabs
                defaultActiveKey="Summarize"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Summarize" title="Summarize">
                    <div className="col-md-12 p-2">
                        <table className="table table-bordered text-start table-striped h-100 table-tunaweza">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NOM</td>
                                    <td>{company.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{company.email}</td>
                                </tr>
                                <tr>
                                    <td>Garant</td>
                                    <td>{company.username}</td>
                                </tr>
                                <tr>
                                    <td>Siret</td>
                                    <td>{company.siret}</td>
                                </tr>
                                <tr>
                                    <td>Numero de Téléphone</td>
                                    <td>{company.phone}</td>
                                </tr>
                                <tr>
                                    <td>Adresse</td>
                                    <td>{company.address}</td>
                                </tr>
                                <tr>
                                    <td>NUmero de reference</td>
                                    <td>{company.referenceNumber}</td>
                                </tr>
                                <tr>
                                    <td>Nombre d'Agents</td>
                                    <td>{company.agents?.length}</td>
                                </tr>
                                <tr>
                                    <td>Nombre de Clients</td>
                                    <td>{company.customers?.length}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </Tab>
                <Tab eventKey="Modifier" title="Modifier">
                    <Form subject={company} onChangeHandler={clickHandler} 
                    objectFormType={companyFormType}
                    saveHandler={save}
                    />
                </Tab>
                <Tab eventKey="Clients" title="Clients">
                <Form subject={client} onChangeHandler={addCustomer}
                    objectFormType={customerFormType}
                    saveHandler={saveClient}
                    title="Add a new customer"
                />
                </Tab>
            </Tabs>

        </div>
    )
}
const style = {
    bold: {
        fontSize: "15px",
        fontWeight: "bold"
    }
}
export default Company