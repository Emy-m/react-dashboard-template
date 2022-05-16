import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "code", headerName: "Code", width: 130 },
  { field: "name", headerName: "Name", width: 300 },
  { field: "createdate", headerName: "Create Date", width: 160 },
  { field: "updatedate", headerName: "Update Date", width: 160 },
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

export default class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost/codeigniter4_jwt/public/products")
      .then((response) => response.json())
      .then((data) => this.setState({ productos: data.productos }));
  }

  render() {
    const { productos } = this.state;
    return (
      <div>
        <h3>Productos</h3>
        <DataTable rows={productos} />
      </div>
    );
  }
}
