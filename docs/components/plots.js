import * as Plot from "npm:@observablehq/plot";
//import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function plotFeeRaw(gas_fee_dates, {width} = {}) {

    return Plot.plot({
      width,
      title: "Data for last 100 blocks",
      x: {label: "UTC time", type: "utc"},
      y: {grid: true, label: "Fee [Gwei]"},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(gas_fee_dates, {
          x: "time",
          //interval: "second",
          y: "fee",
          stroke: "green",
          marker: true,
          })
      ]
    });
  
  }

export function plotFeeMovingAverage(gas_fee_dates, window, {width} = {}) {

    return Plot.plot({
        width,
        color: {scheme: "BuRd"},
        marks: [
          Plot.ruleY([0]),
          Plot.dot(gas_fee_dates, {x: "time", y: "fee", stroke: "fee"}),
          Plot.lineY(gas_fee_dates, Plot.windowY(window, {x: "time", y: "fee"}))
        ]
      })
}