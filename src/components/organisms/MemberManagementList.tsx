import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import MemberManageSearch from "components/molecules/MemberManageSearch";
import Button from "components/atoms/Button";
import { CopyIcon } from "components/atoms/Icons";
import IconButton from "components/atoms/IconButton";

interface MemberManagementListProps {
  children: string;
}

function MemberManagementList() {
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
    {
      id: 4,
      name: "최현석",
      studentId: "2022000000",
      phone: "01066667777",
      grade: "3",
      isDues: false,
      state: "휴학",
    },
    {
      id: 5,
      name: "최현석",
      studentId: "2022000000",
      phone: "01066667777",
      grade: "3",
      isDues: false,
      state: "휴학",
    },
    {
      id: 6,
      name: "최현석",
      studentId: "2022000000",
      phone: "01066667777",
      grade: "3",
      isDues: false,
      state: "휴학",
    },
    {
      id: 7,
      name: "최현석",
      studentId: "2022000000",
      phone: "01066667777",
      grade: "3",
      isDues: false,
      state: "휴학",
    },
  ];
  return (
    <div>
      <MemberManageSearch />
      <MemberManagementListContainer>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </MemberManagementListContainer>
      <ButtonContainer>
        <IconButton
          Icon={<CopyIcon />}
          bgColor="#FBE44D"
          btnClassName="normal-btn "
          text="kakao"
        />
        <IconButton
          Icon={<CopyIcon />}
          bgColor="#e9e9e9"
          btnClassName="normal-btn "
          text="클립보드 복사"
        />

        <Button bgColor="#e9e9e9" className="normal-btn ">
          엑셀파일로 내보내기
        </Button>
        <Button bgColor="#e9e9e9" className="normal-btn ">
          회원추가
        </Button>
        <Button bgColor="#e9e9e9" className="normal-btn ">
          회원 삭제
        </Button>
      </ButtonContainer>
    </div>
  );
}
const MemberManagementListContainer = styled.div`
  height: 400px;
  padding: 0 20px;
  & > .MuiDataGrid-root {
    font-size: 14px;
    text-align: center;
    border: none;
  }
  & > .MuiDataGrid-cell {
    border-bottom: none;
  }
`;
const ButtonContainer = styled.div`
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  gap: 10px;
`;
export default MemberManagementList;
