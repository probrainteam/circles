import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DataTable from "components/molecules/DataTable";
import styled from "@emotion/styled";

interface NewRecruitProps {
  children: string;
}

function NewRecruit() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "이름", width: 150 },
    { field: "studentId", headerName: "학번", width: 150 },
    { field: "phone", headerName: "전화번호", width: 150 },
    { field: "grade", headerName: "학년", width: 70 },
    { field: "isDues", headerName: "회비 여부", width: 150 },
    { field: "state", headerName: "상태", width: 130 },
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
      <DataTable columns={columns} rows={rows}></DataTable>
    </NewRecruitContainer>
  );
}
const NewRecruitContainer = styled.div``;
export default NewRecruit;
