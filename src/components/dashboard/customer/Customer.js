
import { Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";
import useLoginStore from "../../../store/mystore";
import AlertBlog from "../../forms/AlertBlog";
import Form from "../../forms/Form";
import customerFormType from "./customerFormType";
import CONSTANTS from "../../constants/constants";
import DataGridDerivated from "../../forms/DataGridDerivated";
import AroundFormType from "../../formType/AroundFormType";

const Customer = () => {
    const customers = useLoginStore(state => state.customers);
    //const company = useLoginStore(state => state.company);
    const findArounds = useLoginStore(state=>state.findArounds);
    const saveAround = useLoginStore(state=>state.saveAround);
    const removeAround= useLoginStore(state=>state.removeAround);
    const removeCustomer= useLoginStore(state=>state.removeCustomer);
    const updateCustomer = useLoginStore(state=>state.updateCustomer);
    const arounds = useLoginStore(state=>state.arounds);
    const token = useLoginStore(state => state.token);
    const findCustomers = useLoginStore(state => state.findCustomers);
    const [client, setClient] = useState([]);
    const [openDialog,setOpenDialog]= useState(false);
    const [openDialogTwo,setOpenDialogTwo]= useState(false);
    const [customer,setCustomer]=useState({});
    const [around, setAround]= useState({label:"",address:""});
    const [selectedArounds, setSelectedArounds]= useState([]);
    //const [selectedCustomers, setSelectedCustomers]= useState([]);
    //current selected customer!
    const [currentId,setCurrentId]=useState();
    const buttons=[{
        title:"Ajouter une Ronde",
        callBack:()=>{
            closeOpenHandler2();
        }
    },
    {
        title:"supprimer client",
        callBack:()=>{
            removeCustomer(token,currentId);
            setOpenDialog(false);
        }
    }
]
const buttons1=[{
    title:"-",
    callBack:()=>{
    }
},
{
    title:"supprimer Ronde",
    callBack:()=>{
        selectedArounds.map(id=>{
            removeAround(token,id);
        })
        setSelectedArounds([]);
    }
}
]
    
    useEffect(() => {
        findCustomers(token);
        setClient(customers);
        
    }, []);
    const rowClickHandler=(event)=>{
        console.log("event====:",event);
        setCustomer(event.row);
        setCurrentId(event.id);
        setOpenDialog(true);
        findArounds(token,event.id)
        console.log("openDialog:===",openDialog," and check value of around:",arounds);
    }
    const closeOpenHandler2=()=>{
        setOpenDialogTwo(openDialogTwo?false:true);
        setSelectedArounds([]);
    }
    const closeOpenHandler=()=>{
        setOpenDialog(openDialog?false:true);
    }
    const onChangeHandler=(event)=>{
        const attribute= event.target.dataset.source;
        const value=event.target.value;
        setCustomer({
            ...customer,
            [`${attribute}`]:value
        })
    }
    const onChangeHandlerAround=(event)=>{
        const attribute= event.target.dataset.source;
        const value=event.target.value;
        setAround({
            ...around,
            [`${attribute}`]:value
        })
    }
    const addAround=()=>{
        const newAround={...around,customer:{id:currentId}};
        console.log("new aound:",newAround);
        saveAround(token,newAround);
        setAround({label:"",address:""});
    }
    const onSelection=(value)=>{
        console.log("row selected:",value);
        setSelectedArounds(value);
    }
    const onCustomerSelection=(value)=>{
        console.log("row selected:",value);
        //setSelectedCustomers(value);
    }
    const updateExistedCustomer=()=>{
        console.log("update...");
        updateCustomer(token,customer);
    }
    return (
        <div>
            
            <h3 className="display-3">Mes Clients</h3>
            <Tabs
                defaultActiveKey="Summarize"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Summarize" title="Summarize">
                    <DataGridDerivated dataRow={client} columns={CONSTANTS.CUSTOMER_COLUMNS}
                    onRowSelection={onCustomerSelection}
                    onRowDoubleClick={rowClickHandler}/>
                </Tab>
                <Tab eventKey="Modifier" title="Modifier" disabled>

                </Tab>
                <Tab eventKey="Clients" title="Ajouter un client" disabled>

                </Tab>
            </Tabs>
            {openDialog && <AlertBlog content={<Form subject={customer} 
             objectFormType={customerFormType} onChangeHandler={onChangeHandler}
             saveHandler={updateExistedCustomer}
             />} 
             buttons={buttons}
            title="Customer visualising" onClose={closeOpenHandler}/>}

            {openDialogTwo && <AlertBlog 
                    content={
                    <> 
                    <DataGridDerivated dataRow={arounds} columns={CONSTANTS.AROUND_COLUMNS}
                    onRowDoubleClick={rowClickHandler}
                    onRowSelection={onSelection}
                    />
                    <Form subject={around} 
                    title="Add new Around"
                    saveHandler={ addAround}
                    objectFormType={AroundFormType} onChangeHandler={onChangeHandlerAround}/>
                    </>
                } 
                    title={"Around visualisation"} 
                    buttons={buttons1} onClose={closeOpenHandler2}/>}

        </div>
    )
}
export default Customer;