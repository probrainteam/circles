import { useEffect, useState } from "react";
import { memberFuncProps } from "types/memberType";
import styled from "@emotion/styled";
import { GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import ApplicationFormCreate from "components/organisms/ApplicationFormCreate";
import ContentContainer from "components/atoms/ContentContainer";
import Button from "components/atoms/Button";
import SectionTitle from "components/atoms/SectionTitle";
import DataTable from "components/atoms/DataTable";

function Recruit({ memberList, setMemberList }: memberFuncProps) {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [memberListData, setMemberListData] = useState(memberList);

  useEffect(() => {
    const newList = memberList.filter((item) => !item.approval);
    console.log("new", newList);
    setMemberListData(newList);
  }, [memberList]);

  // 승인 버튼 클릭
  const handleApproveBtnClick = () => {
    console.log("승인버튼 클릭", selectionModel);
    setSelectionModel([]); //초기화
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
      <ApplicationFormCreate />
      <ContentContainer title="새로 들어온 가입 신청">
        <DataTable
          selectionModel={selectionModel}
          setSelectionModel={setSelectionModel}
          rows={memberListData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

export default Recruit;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "이름" },
  { field: "studentId", headerName: "학번" },
  { field: "phone", headerName: "전화번호" },
  { field: "grade", headerName: "학년" },
  { field: "state", headerName: "상태" },
];
