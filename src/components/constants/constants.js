const port="8000"
const server_host= `localhost:${port}`;
const CONSTANTS={
    BASE_URL:"http://localhost:8000/",
    BASE_URL_USERS:`http://${server_host}/users/`,
    AUTH_LOGIN:`http://${server_host}/auth/login`,
    AUTH_REGISTER: `http://${server_host}/auth/register`,
    STORE_NAME:"user-monitoring",
    COMPANY_URL:"company",
    CUSTOMER_URL:"customers",
    CUSTOMER_POST_URL:"customer",
    AGENT_URL:"agents",
    AGENT_POST_URL:"agent",
    AROUND_URL:"arounds",
    AROUND_POST_URL:"around",
    CONTROL_POINT_URL:"control-point",
    CHECK_POINT_URL:"check-point",
    SHIFT_URL:"shift",
    AROUND_COLUMNS:[
        { field: "label", headerName: "NOM",width:120 },
        { field: "createAt", headerName: "DATE DE CREATION", width: 120 },
        { field: "address", headerName: "ADDRESS",width:120 },
        { field: "controlPointNumber", headerName: "POINT-CONTROLS",width:120 }
    ],
    CUSTOMER_COLUMNS:[
        { field: "name", headerName: "NOM", width:120},
        { field: "email", headerName: "EMAIL",width:120 },
        { field: "phone", headerName: "TELEPHONE", width: 120 },
        { field: "referenceNumber", headerName: "REFERENCE", width: 120 },
        { field: "siret", headerName: "SIRET",width:120 },
        { field: "address", headerName: "ADDRESS",width:120 }
    ],
    AGENT_COLUMNS:[
        {field: "nom", headerName:"NOM", width:120},
        {field:"prenom", headerName:"PRENOM", width:120},
        {field:"email",headerName:"EMAIL",width:120},
        {field:"phoneNumber", headerName:"NUMERO DE TELEPHONE", width:120},
        {field:"birth", headerName:"DATE DE NAISSANCE", width:120},
        {field:"address",headerName:"ADRESSE POSTALE",width:120},
        {field:"pictureUser", headerName:"PHOTO AGENT",width:120}
    ],
    SHIFT_COLUMNS:[
        {field: "shiftStarTime", headerName:"Start", width:150,valueGetter: (value) => value && (new Date(value)).toLocaleTimeString()},
        {field:"shiftEndTime", headerName:"End", width:120,type:"Date",valueGetter: (value) => value && (new Date(value)).toLocaleTimeString()},
        {field:"shifDate",headerName:"Date",width:120,valueGetter: (value) => value && (new Date(value)).toDateString()},
        {field:"around.address", valueGetter:(value,row)=> row.around.address,headerName:"Address", width:150},
        {field:"customer.id",valueGetter:(value,row)=> row.around.customer.id, headerName:"Customer ID", width:120},
    ],
    CHECK_POINTS_COLUMNS:[
        {field: "checkedDate", headerName:"Day", width:150,valueGetter: (value) => value && (new Date(value)).toLocaleString()},
        {field:"checkedPresence", headerName:"Presence", width:120,valueGetter: (value) => value.checkedPresence==="1"?true:false},
        {field:"commentString",headerName:"Notice",width:160},
        {field:"controlPointId",headerName:"Control Point ID", width:190}
    ]
}

export default CONSTANTS;