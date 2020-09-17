import { DataRecordValue } from "@superset-ui/core";
import { EchartsProps } from "../types";

export type EchartsBaseTimeseriesSeries = {
  name: string;
  data: [Date, DataRecordValue][];
};

export type EchartsTimeseriesSeries = EchartsBaseTimeseriesSeries & {
  color: string;
  stack?: string;
  type: "bar" | "line";
  smooth: boolean;
};

export type EchartTimeseriesProps = EchartsProps & {
  contributionMode?: string;
  logAxis: boolean;
  stack: boolean;
  minorSplitLine: boolean;
};
