import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
interface DataTableProps {
  columns: GridColDef[];
  rows: Array<any>; //뭐로 해야할까여?
}

export default function DataTable({ columns, rows }: DataTableProps) {
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
