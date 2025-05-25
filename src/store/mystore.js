import { create } from "zustand";
import CONSTANTS from "../components/constants/constants";
import { persist } from "zustand/middleware";
import { getCompany, putCompany } from "../services/companyService";
import { deleteCustomer, getCustomer, postCustomer, putCustomer } from "../services/customerService";
import { deleteAround, getMyArounds, postAround } from "../services/aroundService";
import { deleteControlPoint, getControlPoints, postControlPoint } from "../services/controlPointService";
import { postAgent } from "../services/agentService";
import { getShifts } from "../services/shiftsService";
import { getCheckPoints } from "../services/checkPointService";
//import { combine } from "zustand/middleware";



const useLoginStore = create(persist((set) => ({
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    company: {},
    customers: [],
    arounds: [],
    agents: [],
    controlPoints: [],
    shifts: [],
    checkPoints: [],
    currentAgent: null,
    login(username, password) {
        let requestHeader = new Headers();
        requestHeader.set("Content-Type", "application/json");
        fetch(CONSTANTS.AUTH_LOGIN, {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: requestHeader
        })
            .then(result => result.json())
            .then(data => {
                set({
                    user: data.user, isAuthenticated: true, loading: false,
                    token: data.access_token, refreshToken: data.refresh_token
                }
                )
                    ;
                //console.log("la data:",data," state:",data.user,"====",data.access_token);
            })
            .catch(error => {
                set({
                    loading: false
                })
            });
    },
    logout() {
        localStorage.removeItem(CONSTANTS.STORE_NAME);
        set({
            user: null,
            token: null,
            refreshToken: null,
            isAuthenticated: false,
            loading: false,
        })
    },
    changeLoading() {
        set(state => ({
            loading: !state.loading
        }))
    },
    findMyCompany(token, userId) {
        getCompany(token, userId, set);
    },
    updateMyCompany(token, company) {
        try {
            set({ loading: true });
            putCompany(token, set, company, company.id);
            set({ loading: false });
        }
        catch (error) {
            set({ loading: false });
        }

    },
    saveNewCustomer(token, customer) {
        try {
            set({ loading: true });
            //console.log("operation is starting...:",customer);
            postCustomer(token, customer, refreshCustomers);
            set({ loading: false });
        }
        catch (error) {
            set({ loading: false });
        }
    },
    updateCustomer(token, customer) {
        putCustomer(token, customer, customer.id, updated)
    },
    findCustomers(token) {
        getCustomer(token, set);
    },
    removeCustomer(token, customerId) {
        deleteCustomer(token, customerId);
        updateCustomers(customerId);
    },
    findArounds(token, customerId) {
        getMyArounds(token, set, customerId);
    },
    saveAround(token, around) {
        postAround(token, around, updateArounds);
    },
    removeAround(token, aroundId) {
        deleteAround(token, aroundId);
        deleteElementInArounds(aroundId);
    },
    addInSetArounds(arounds, around) {
        const value = arounds.find(item => item.label === around.label);
        if (value === undefined)
            set({ arounds: [...arounds, around] })
    },
    findControlPoints(token, aroundId) {
        getControlPoints(token, set, aroundId);
    },
    saveControlPoint(token, controlPoint) {
        postControlPoint(token, controlPoint, refreshControlPoints);
    },
    deleteControlPointFrom(token, controlPointId) {
        deleteControlPoint(token, controlPointId);
        updateControlPoints(controlPointId);
    },
    saveAgent(token, agent) {
        postAgent(token, agent, refreshAgents);
    },
    updateCurrentAgent(value) {
        set({ currentAgent: value });
    },
    getAgentShifts(token, agentId) {
        getShifts(token, agentId, updateShifts)
    },
    getAgentCheckPoints(token, agentId) {
        getCheckPoints(token, agentId, updateCheckPoints)
    }
}), { name: CONSTANTS.STORE_NAME }));

const updateArounds = (value) => {
    useLoginStore.setState((state) => ({
        ...state,
        arounds: [...state.arounds, value]
    }))
}
const updateControlPoints = (id) => {
    useLoginStore.setState((state) => ({
        ...state,
        controlPoints: [...state.controlPoints].filter(item => item.id !== id)
    }))
}

const refreshControlPoints = (value) => {
    useLoginStore.setState((state) => ({
        ...state,
        controlPoints: [...state.controlPoints, value]
    }))
}

const refreshAgents = (value) => {
    useLoginStore.setState((state) => ({
        ...state,
        agents: [...state.agents, value]
    }))
}
const updateCustomers = (customerId) => {
    useLoginStore.setState((state) => ({
        ...state,
        customers: [...state.customers].filter(item => item.id !== customerId)
    }))
}
const refreshCustomers = (customers) => {
    useLoginStore.setState((state) => ({
        ...state,
        customers: customers
    }))
}
const deleteElementInArounds = (id) => {
    useLoginStore.setState((state) => ({
        ...state,
        arounds: [...state.arounds.filter(item => item.id !== id)]
    }))
}
const updated = (data) => {
    console.log("voici la donée:", data);
    updateCustomers(data.id)
    useLoginStore.setState((state) => ({
        ...state,
        customers: [...state.customers, data]
    }))
    //console.log("customers:===:",useLoginStore.getState().customers);
}
const updateShifts = (data) => {
    if (data[0]?.id)
        useLoginStore.setState(state => ({
            ...state, shifts: data
        }))
}

const updateCheckPoints = (data) => {
        useLoginStore.setState(state => ({
            ...state, checkPoints: data
        }))
}
export default useLoginStore;