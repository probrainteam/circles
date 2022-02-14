import React, { Component } from "react";
import Chart from "react-apexcharts";

interface ChartsProps {
  options: any;
  series: Array<any>;
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
}
function Charts({ options, series, type }: ChartsProps) {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type={type} height={350} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
