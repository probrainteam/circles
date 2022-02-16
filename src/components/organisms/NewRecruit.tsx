import React, { useState } from "react";

import styled from "@emotion/styled";
import { GridColDef, GridInputSelectionModel } from "@mui/x-data-grid";

interface NewRecruitProps {
  selectionModel: GridInputSelectionModel;
  setSelectionModel: Function;
}

function NewRecruit({ selectionModel, setSelectionModel }: NewRecruitProps) {
  return <NewRecruitContainer></NewRecruitContainer>;
}
const NewRecruitContainer = styled.div`
  width: "100%";
  height: 400px;
  & > .MuiDataGrid-root {
    font-size: 14px;
    text-align: center;
    border: none;
  }
  & > .MuiDataGrid-root .MuiDataGrid-cell,
  .MuiDataGrid-columnHeaders {
    border-bottom: none !important;
  }
`;
export default NewRecruit;
