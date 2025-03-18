import { Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";
import useLoginStore from "../../../store/mystore";

import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";

const Customer = () => {
    const customers = useLoginStore(state => state.customers);
    const token = useLoginStore(state => state.token);
    const findCustomers = useLoginStore(state => state.findCustomers);
    const [client, setClient] = useState([]);
    const coldefs = [
        { field: "name", headerName: "NOM", width:120},
        { field: "email", headerName: "EMAIL",width:120 },
        { field: "phone", headerName: "TELEPHONE", width: 120 },
        { field: "referenceNumber", headerName: "REFERENCE", width: 120 },
        { field: "siret", headerName: "SIRET",width:120 },
        { field: "address", headerName: "ADDRESS",width:120 }
    ];

    useEffect(() => {
        findCustomers(token);
        setClient(customers);
    }, []);
    return (
        <div>
            <h3 className="display-3">Mes Clients</h3>
            <Tabs
                defaultActiveKey="Summarize"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Summarize" title="Summarize">
                    <div className="col-md-12 p-2">
                        {/** <DataGrid rows={customers}  columns={coldefs}/>*/}
                        {/*<DataGrid heading={coldefs} dataRows={client}/>**/}
                        <Box sx={{ height: 350, width: '100%' }}>
                            <DataGrid
                                rows={client}
                                columns={coldefs}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                        </Box>
                    </div>

                </Tab>
                <Tab eventKey="Modifier" title="Modifier" disabled>

                </Tab>
                <Tab eventKey="Clients" title="Ajouter un client" disabled>

                </Tab>
            </Tabs>
        </div>
    )
}
export default Customer;