import styled from "@emotion/styled";
import SelectBox from "components/atoms/SelectBox";
import Input from "components/atoms/Input";
import React from "react";

const tempSelectItemList = [
  {
    lable: "이름",
    value: "name",
  },
  {
    lable: "학번",
    value: "studentId",
  },
];
function MemberManageSearch() {
  return (
    <MemberManageSearchContainer>
      <SelectBox items={tempSelectItemList} />
      <Input value={undefined} className={"member-manage-input normal-input"} />
    </MemberManageSearchContainer>
  );
}
const MemberManageSearchContainer = styled.div`
  display: flex;
  padding: 40px;
  gap: 20px;
`;
export default MemberManageSearch;
