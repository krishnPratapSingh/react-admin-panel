import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../dataTableSource"

const DataTable = () => {

    const actionColumn = [{field: "action", headerName: "Action", width: 150, renderCell: () => {
      return(
        <div className="cellWithAction">
          <div className="viewButton">
            View
          </div>
          <div className="editButton">
            Edit
          </div>
        </div>
      )
    }}]

    return(
        <div className="dataTable">
            <DataGrid
                getRowId={(row) => row._id}
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}

export default DataTable;