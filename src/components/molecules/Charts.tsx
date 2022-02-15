import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from "@emotion/styled";

interface ChartsProps {
  option: {
    options: Object;
    series: Array<any>;
    title?: Object;
  };
  type:
    | "donut"
    | "area"
    | "line"
    | "bar"
    | "histogram"
    | "pie"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | undefined;
  height?: string | number | undefined;
  className?: string;
}
function Charts({ option, type, className, height = 200 }: ChartsProps) {
  return (
    <ChartContainer className={className}>
      <Chart
        options={option.options}
        series={option.series}
        title={option.title}
        type={type}
        height={height}
      />
    </ChartContainer>
  );
}
const ChartContainer = styled.div`
  &.manage-chart {
    width: 24%;
    min-height: fit-content;
  }
`;
export default Charts;
