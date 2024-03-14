import * as Plot from "npm:@observablehq/plot";
//import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function plot_fee(gas_fee_dates, {width} = {}) {

    return Plot.plot({
      width,
      title: "Data for last 100 blocks",
      x: {label: "UTC time", type: "utc"},
      y: {grid: true, label: "Fee [Gwei]"},
      marks: [
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