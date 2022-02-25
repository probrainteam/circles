import styled from "@emotion/styled";

import {
  DataGrid,
  GridColDef,
  GridInputSelectionModel,
} from "@mui/x-data-grid";

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
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: ${({ pageSize }) => pageSize * 60 + 70}px;
  width: 100%;
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
