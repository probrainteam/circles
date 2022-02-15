import styled from "@emotion/styled";
import SelectBox from "components/atoms/SelectBox";
import Input from "components/atoms/Input";
import React, { useState } from "react";

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
  const [selectTarget, setSelectTarget] = useState("");

  return (
    <MemberManageSearchContainer>
      <SelectBox
        items={tempSelectItemList}
        target={selectTarget}
        setTarget={setSelectTarget}
      />
      <Input value={undefined} className={"member-manage-input normal-input"} />
    </MemberManageSearchContainer>
  );
}
const MemberManageSearchContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;
export default MemberManageSearch;
