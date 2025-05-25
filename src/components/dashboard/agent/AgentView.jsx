import { StyleSheet, useCallback, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import useLoginStore from "../../../store/mystore";
import DataGridDerivated from "../../forms/DataGridDerivated";
import CONSTANTS from "../../constants/constants";
const AgentView = () => {
    const currentAgent = useLoginStore(state => state.currentAgent);
    const token = useLoginStore(state => state.token);
    const shifts = useLoginStore(state => state.shifts);
    const checkPoints = useLoginStore(state => state.checkPoints)
    const getAgentShifts = useLoginStore(state => state.getAgentShifts);
    const getAgentCheckPoints = useLoginStore(state => state.getAgentCheckPoints);
    const nav = useNavigate()
    
    useCallback(() => {
        getAgentCheckPoints(token, currentAgent.id);
        getAgentShifts(token, currentAgent.id);
        
    }, [currentAgent, token])
    return (
        <div>
            <div className='information text-start ps-2'>
                <h3 className='p-1'><button className='border-0 back' title='back to Agents' onClick={() => nav("/agent")}>&#8592;</button> Detail Agent </h3>
                <hr />
                <h6>Nom: {currentAgent.nom}</h6>
                <h6>Prenom: {currentAgent.prenom}</h6>
                <h6>Date de naissance: {currentAgent.birth}</h6>
                <h6>Numero de Telephone: {currentAgent.phoneNumber}</h6>
                <h6>Email: {currentAgent.email}</h6>
                <h6>Adresse: {currentAgent.address}</h6>
                <h6>Activé: {currentAgent.activated ? "Yes" : "No"}</h6>
            </div>
            <hr />
            <div className='ps-2'>
                <h3 className="text-start">SHIFTS</h3>
                <div>
                    <DataGridDerivated dataRow={shifts} columns={CONSTANTS.SHIFT_COLUMNS} />
                </div>
            </div>
            <div className="ps-2">
                <h3 className="text-start">CHECK-POINTS</h3>
                <div>
                    <DataGridDerivated dataRow={checkPoints} columns={CONSTANTS.CHECK_POINTS_COLUMNS} />
                </div>
            </div>
        </div>
    )
}
export default AgentView;