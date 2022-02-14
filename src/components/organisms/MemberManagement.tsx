import styled from "@emotion/styled";
import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ContentContainer from "components/atoms/ContentContainer";
import MemberManagementList from "./MemberManagementList";
import Charts from "components/molecules/Charts";
const radialBarOption = {
  series: [70],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Cricket"],
  },
  type: "radialBar",
};
const DonutOption1 = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
  type: "donut",
};
function MemberManagement() {
  return (
    <ManagementContainer>
      <SectionTitle
        mainTitle={"회원관리"}
        subTitle={"회원 관리를 위한 강력한 기능들을 제공합니다. 🔥"}
      />
      <Charts
        options={radialBarOption.options}
        series={radialBarOption.series}
        type="radialBar"
      />
      <Charts
        options={DonutOption1.options}
        series={DonutOption1.series}
        type="donut"
      />
      <ContentContainer title="회원관리">
        <MemberManagementList></MemberManagementList>
      </ContentContainer>
    </ManagementContainer>
  );
}
const ManagementContainer = styled.div`
  margin-top: 50px;
`;
export default MemberManagement;
