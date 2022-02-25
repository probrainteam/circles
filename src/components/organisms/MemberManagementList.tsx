import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import MemberManageSearch from "components/molecules/MemberManageSearch";
import Button from "components/atoms/Button";
import { CopyIcon } from "components/atoms/Icons";
import IconButton from "components/atoms/IconButton";
import DataTable from "components/atoms/DataTable";
import axios from "axios";
import { memberFuncProps } from "types/memberType";

interface MemberManagementListProps {
  children: string;
}

function MemberManagementList({ memberList, setMemberList }: memberFuncProps) {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [memberListData, setMemberListData] = useState(memberList);
  useEffect(() => {
    const MemberDataList = memberList.filter((item) => item.approval);
    setMemberListData(MemberDataList);
    return () => {};
  }, [memberList]);
  return (
    <div>
      <MemberManageSearch />
      <DataTable
        rows={memberListData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        selectionModel={selectionModel}
        setSelectionModel={setSelectionModel}
      />
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
export default MemberManagementList;
const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "이름" },
  { field: "studentId", headerName: "학번" },
  { field: "phone", headerName: "전화번호" },
  { field: "grade", headerName: "학년" },
  { field: "isDues", headerName: "회비 여부" },
  { field: "state", headerName: "휴학 상태" },
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
  {
    id: 8,
    name: "최현석",
    studentId: "2022000000",
    phone: "01066667777",
    grade: "3",
    isDues: false,
    state: "휴학",
  },

  {
    id: 9,
    name: "최현석",
    studentId: "2022000000",
    phone: "01066667777",
    grade: "3",
    isDues: false,
    state: "휴학",
  },
  {
    id: 10,
    name: "최현석",
    studentId: "2022000000",
    phone: "01066667777",
    grade: "3",
    isDues: false,
    state: "휴학",
  },
  {
    id: 11,
    name: "최현석",
    studentId: "2022000000",
    phone: "01066667777",
    grade: "3",
    isDues: false,
    state: "휴학",
  },
  {
    id: 12,
    name: "최현석",
    studentId: "2022000000",
    phone: "01066667777",
    grade: "3",
    isDues: false,
    state: "휴학",
  },
  {
    id: 13,
    name: "최현석",
    studentId: "2022000000",
    phone: "01066667777",
    grade: "3",
    isDues: false,
    state: "휴학",
  },
];
