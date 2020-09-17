import React from "react";
import { EchartTimeseriesProps } from "./types";
import Echart from "../components/Echart";

export default function MultipleYAxis({
  height,
  width,
  echartOptions,
}: EchartTimeseriesProps) {
  return <Echart height={height} width={width} echartOptions={echartOptions} />;
}
