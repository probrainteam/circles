import React from "react";
import styled from "@emotion/styled";

import {
  DataGrid,
  GridColDef,
  GridInputSelectionModel,
} from "@mui/x-data-grid";
import { css } from "@emotion/react";
interface DataTableProps {
  selectionModel: GridInputSelectionModel;
  setSelectionModel: Function;
  rows: Array<Object>;
  columns: GridColDef[];
  pageSize: number;
  rowsPerPageOptions: Array<number>;
  className?: string;
}
function DataTable({
  rows,
  columns,
  pageSize,
  rowsPerPageOptions,
  selectionModel,
  setSelectionModel,
  className,
}: DataTableProps) {
  return (
    <TableContainer pageSize={pageSize} className={className}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />
    </TableContainer>
  );
}

export default DataTable;
interface TableContainerProps {
  pageSize: number;
  children: any;
}
const TableContainer = styled.div<TableContainerProps>`
  height: ${({ pageSize }) => pageSize * 75}px;
  & > .MuiDataGrid-root {
    font-size: 14px;
    text-align: center;
    border: none;
  }
  .MuiDataGrid-cell,
  .MuiDataGrid-columnHeaders {
    border-bottom: none !important;
  }
`;
