import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "DNI", width: 130 },
  { field: "firstname", headerName: "First name", width: 130 },
  { field: "lastname", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    width: 160,
  },
  { field: "createdate", headerName: "Created date", width: 160 },
  { field: "lastlogin", headerName: "Last login", width: 160 },
];

function DataTable(props) {
  const { rows } = props;
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost/codeigniter4_jwt/public/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data.usuarios));
  }, []);

  return (
    <div>
      <h3>Usuarios</h3>
      <DataTable rows={usuarios} />
    </div>
  );
}
