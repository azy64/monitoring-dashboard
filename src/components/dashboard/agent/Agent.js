import { useState } from "react";
import useLoginStore from "../../../store/mystore";
import AlertBlog from "../../forms/AlertBlog";
import Form from "../../forms/Form";
import AgentFormType from "../../formType/AgentFormType";
import DataGridDerivated from "../../forms/DataGridDerivated";
import CONSTANTS from "../../constants/constants";

const Agent = () => {
    const agents = useLoginStore(state => state.agents);
    const token = useLoginStore(state => state.token);
    const company = useLoginStore(state => state.company);
    const objectAgent ={
        prenom:"",nom:"",username:"",phoneNumber:"",
        pictureUser:"",password:"",address:"",birth:""
    };
    const [agent,setAgent]= useState(objectAgent);
    const [openDialog, setOpenDialog] = useState(false);
    console.log("company:::", company);
    const closeOpenHandler = () => {
        setOpenDialog(openDialog ? false : true);
    }
    const onChangeHandler = (event) => {
        const attribute = event.target.dataset.source;
        const value = event.target.value;
        setAgent({
            ...agent,
            [`${attribute}`]: value
        })
    }
    const createAgent = () => {
        
    }
    const buttons = [{
        title: "",
        callBack: () => {

        }
    },
    {
        title: "Close",
        callBack: () => {
            closeOpenHandler()
        }
    }
    ]
    return (
        <div>
            <h4 className="mt-3">
                My Agent
                <button className="btn btn-sm btn-success ms-1" title="Add agent" onClick={closeOpenHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                    </svg>
                </button>
            </h4>
            <hr />
            {company.name}

            {openDialog && <AlertBlog content={<Form subject={agent}
                objectFormType={AgentFormType} onChangeHandler={onChangeHandler}
                saveHandler={createAgent}
            />}
                buttons={buttons}
                title="create agent" onClose={closeOpenHandler} />}
            <div>
            <DataGridDerivated dataRow={agents} columns={CONSTANTS.AGENT_COLUMNS}/>
            </div>

        </div>
    )
}
export default Agent