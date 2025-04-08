import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";
const DataGridDerivated=({dataRow,columns,onRowDoubleClick,onRowSelection})=>{
    return(
        <div className="col-md-12 p-2">
        <Box sx={{ height: 350, width: '100%' }}>
            <DataGrid
                onRowSelectionModelChange={onRowSelection}
                rows={dataRow}
                columns={columns}
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
                onRowDoubleClick={onRowDoubleClick}
            />
        </Box>
    </div>

    )
}
export default DataGridDerivated;