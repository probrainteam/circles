import styled from "@emotion/styled";
import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ContentContainer from "components/atoms/ContentContainer";
import MemberManagementList from "./MemberManagementList";
import Charts from "components/molecules/Charts";
import RatioChart from "components/molecules/RatioChart";
const radialBarOption = {
  series: [70],
  options: {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["undefined"],
    title: {
      text: "undefined",
      align: "center",
    },
  },
  type: "radialBar",
};
const DonutOption1 = {
  series: [10, 8, 5, 14],
  options: {
    labels: ["1학년", "2학년", "3학년", "4학년"],
    chart: {
      type: "donut",
    },
    legend: {
      show: false,
    },
    title: {
      text: "undefined",
      align: "center",
    },
    // dataLabels: {
    //   enabled: true,
    //   enabledOnSeries: undefined,
    //   formatter: function (val: any, opts: any) {
    //     return val;
    //   },
    // },

    // responsive: [
    //   {
    //     breakpoint: 480,
    //     options: {
    //       chart: {
    //         width: 200,
    //       },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
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
      <ChartContainer>
        <RatioChart thisNumber={40} totalNumber={50}></RatioChart>
        <Charts
          option={radialBarOption}
          type="radialBar"
          className="manage-chart"
        />
        <Charts
          option={DonutOption1}
          type="donut"
          className="manage-chart"
          height={190}
        />
        <Charts
          option={DonutOption1}
          type="donut"
          className="manage-chart"
          height={190}
        />
      </ChartContainer>
      <ContentContainer title="회원관리">
        <MemberManagementList></MemberManagementList>
      </ContentContainer>
    </ManagementContainer>
  );
}
const ManagementContainer = styled.div`
  margin-top: 50px;
`;
const ChartContainer = styled.div`
  margin: 25px 0;display: flex;
}
`;
export default MemberManagement;
