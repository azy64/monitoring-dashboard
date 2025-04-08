import { useCallback, useEffect, useState } from "react";
//import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
// print from 'print-js';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/Select";

import useLoginStore from "../../../store/mystore";
import AlertBlog from "../../forms/AlertBlog";
import Form from "../../forms/Form";
import ControlPointFormType from "../../formType/ControlPointFormType";
import printJS from "print-js";



const ControlPoint = () => {
    const token = useLoginStore(state => state.token);
    const arounds = useLoginStore(state => state.arounds);
    const findArounds = useLoginStore(state => state.findArounds);
    const findControlPoints = useLoginStore(state => state.findControlPoints);
    const controlPoints = useLoginStore(state => state.controlPoints);
    const saveControlPoint = useLoginStore(state => state.saveControlPoint);
    const deleteControlPointFrom = useLoginStore(state => state.deleteControlPointFrom);
    //const findMyCompany = useLoginStore(state => state.findMyCompany);
    const user = useLoginStore(state => state.user);
    const company = useLoginStore(state => state.company);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [currentAround, setCurrentAround] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [controlPoint, setControlPoint] = useState({ label: "", address: "", latitude: "", longitude: "" })
    //console.log("=======",company);
    const printQRCode = () => {
        if (controlPoints.length > 0)
            printJS({
                printable: controlPoints.map(item => item.qrCode),
                type: 'image',
                header: controlPoints[0].around.label,
                imageStyle: 'width:50%;margin-bottom:20px;'
            })
    }
    const changeHandler = (value) => {
        setCurrentCustomer(value);
        findArounds(token, value);
        console.log(value);
    }
    const eraseControlPoint = (event) => {
        const controlPointId = event.target.id;
        deleteControlPointFrom(token, controlPointId);
    }
    const selecteAroundHandler = (value) => {
        setCurrentAround(value);
        findControlPoints(token, value);
        const targetAround = arounds.filter(item => item.id === value)[0]
        setControlPoint({ ...controlPoint, address: targetAround.address })
        console.log("control-point::::", controlPoints)
    }
    const onChangeHandler = (event) => {
        const attribute = event.target.dataset.source;
        const value = event.target.value;
        setControlPoint({
            ...controlPoint,
            [`${attribute}`]: value
        })
    }
    const closeOpenHandler = () => {
        setOpenDialog(openDialog ? false : true);
    }
    const createControlPoint = () => {
        if (currentAround) {
            saveControlPoint(token, { ...controlPoint, around: { id: currentAround } })
            setControlPoint({ label: "", address: "", latitude: "", longitude: "" })
        }

        else alert("Please select the Around first!")
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
            <h4 className="pt-2">
                Points de control
             </h4>
            <hr />
            <div style={{ padding: "10px" }} className="col-md-11 col-sm-8">
                <Select onValueChange={changeHandler}>
                    <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select the Customer" />
                    </SelectTrigger>
                    <SelectContent className="w-[380px]">
                        {
                            company.customers.map(item => (
                                <SelectItem style={{ background: "white" }} value={item.id} key={item.id}>{item.name}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
                <span className="m-1"></span>
                <Select onValueChange={selecteAroundHandler}>
                    <SelectTrigger className="w-[380px]">
                        <SelectValue placeholder="Select the Around" />
                    </SelectTrigger>
                    <SelectContent className="w-[380px]" >
                        {
                            arounds.map(item => (
                                <SelectItem style={{ background: "white" }} value={item.id} key={item.id}>{item.label}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
                <button onClick={closeOpenHandler} className="btn btn-dark m-1 btn-sm" title="add new QRcode">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-qr-code" viewBox="0 0 16 16">
                        <path d="M2 2h2v2H2z" />
                        <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z" />
                        <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z" />
                        <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z" />
                        <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z" />
                    </svg>
                </button>
                <button onClick={printQRCode} className="btn btn-success btn-sm" title="print all QRcode">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                    </svg>
                </button>
            </div>

            <div>
                {
                    arounds.length > 0 && currentAround && controlPoints.map(item => (
                        <Figure key={item.id}>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt={item.label}
                                src={item.qrCode}
                            />
                            <Figure.Caption>
                                <div>{item.label.toUpperCase()}</div>
                                <div><button onClick={eraseControlPoint} id={item.id} className="btn btn-danger btn-sm">supprimer</button></div>
                            </Figure.Caption>
                        </Figure>
                    ))
                }
            </div>
            {openDialog && <AlertBlog content={<Form subject={controlPoint}
                objectFormType={ControlPointFormType} onChangeHandler={onChangeHandler}
                saveHandler={createControlPoint}
            />}
                buttons={buttons}
                title="Add control Point" onClose={closeOpenHandler} />}

        </div>
    )
}
export default ControlPoint;