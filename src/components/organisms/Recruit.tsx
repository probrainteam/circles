import React, { useState } from "react";
import SectionTitle from "../atoms/SectionTitle";
import ApplicationFormCreate from "./ApplicationFormCreate";
import ContentContainer from "components/atoms/ContentContainer";
import NewRecruit from "./NewRecruit";
import Button from "components/atoms/Button";
import styled from "@emotion/styled";
import { GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import DataTable from "components/atoms/DataTable";

function Recruit() {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  // 승인 버튼 클릭
  const handleApproveBtnClick = () => {
    console.log("승인버튼 클릭", selectionModel);
    // setSelectionModel([]); //초기화
  };
  // 거절 버튼 클릭
  const handleRejectBtnClick = () => {
    console.log("거절버튼 클릭", selectionModel);
  };
  return (
    <div>
      <SectionTitle
        mainTitle={"회원 모집"}
        subTitle={"새로운 회원을 모집해보세요. 😆"}
      />
      <ApplicationFormCreate></ApplicationFormCreate>
      <ContentContainer title="새로 들어온 가입 신청">
        <DataTableContainer>
          <DataTable
            selectionModel={selectionModel}
            setSelectionModel={setSelectionModel}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          ></DataTable>
        </DataTableContainer>

        <ButtonContainer>
          <Button
            bgColor="#e9e9e9"
            className="normal-btn"
            onClick={handleApproveBtnClick}
          >
            승인
          </Button>
          <Button
            bgColor="#e9e9e9"
            className="normal-btn"
            onClick={handleRejectBtnClick}
          >
            거절
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </div>
  );
}

const DataTableContainer = styled.div`
  // margin: 32px 32px 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  // margin: 0 32px 32px;
  justify-content: flex-end;
`;

export default Recruit;
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
