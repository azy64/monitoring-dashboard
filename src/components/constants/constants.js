const CONSTANTS={
    BASE_URL:"http://localhost:8000/",
    BASE_URL_USERS:"http://localhost:8000/users/",
    AUTH_LOGIN:"http://localhost:8000/auth/login",
    AUTH_REGISTER: "http://localhost:8000/auth/register",
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
    ]
}

export default CONSTANTS;