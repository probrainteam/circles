import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "@emotion/styled";

interface NewRecruitProps {
  children: string;
}

function NewRecruit() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "이름", width: 150 },
    { field: "studentId", headerName: "학번", width: 160 },
    { field: "phone", headerName: "전화번호", width: 160 },
    { field: "grade", headerName: "학년", width: 100 },
    { field: "isDues", headerName: "회비 여부", width: 130 },
    { field: "state", headerName: "상태", width: 100 },
  ];

  const rows = [
    {
      id: 1,
      name: "변수미",
      studentId: "2022000000",
      phone: "01088884444",
      grade: "2",
      isDues: false,
      state: "재학",
    },
    {
      id: 2,
      name: "전병민",
      studentId: "2022000000",
      phone: "01022225555",
      grade: "4",
      isDues: false,
      state: "재학",
    },
    {
      id: 3,
      name: "최현석",
      studentId: "2022000000",
      phone: "01066667777",
      grade: "3",
      isDues: false,
      state: "휴학",
    },
  ];
  return (
    <NewRecruitContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </NewRecruitContainer>
  );
}
const NewRecruitContainer = styled.div`
  width: "100%";
  height: 400px;
  & > .MuiDataGrid-root {
    font-size: 14px;
    text-align: center;
  }
`;
export default NewRecruit;
