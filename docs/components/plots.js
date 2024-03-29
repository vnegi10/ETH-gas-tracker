import * as Plot from "npm:@observablehq/plot";
//import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function plotFeeRaw(gas_fee_times, {width} = {}) {

    return Plot.plot({
      width,
      title: "Data for last 1500 blocks (5 hours)",
      x: {label: "UTC time", type: "utc"},
      y: {grid: true, label: "Fee [Gwei] / gas"},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(gas_fee_times, {
          x: "time",
          //interval: "second",
          y: "fee",
          stroke: "green",
          tip: true
          //marker: true,
          })
      ]
    });
  
  }

export function plotFeeMovingAverage(gas_fee_times, window, {width} = {}) {

    return Plot.plot({
        width,
        title: "Moving average window size = 50 blocks (10 minutes)",
        x: {label: "UTC time", type: "utc"},
        y: {grid: true, label: "Estimated fee [euros]"},
        color: {scheme: "BuRd"},
        marks: [
          Plot.ruleY([0]),
          Plot.dot(gas_fee_times, {x: "time",
                                   y: "fee_eur",
                                   stroke: "fee_eur",
                                   tip: true}),
          Plot.lineY(gas_fee_times, Plot.windowY(window, 
                                                 {x: "time", 
                                                  y: "fee_eur"}))
        ]
      })
}

export function plotPriceWindow(price, window, {width} = {}) {

    return Plot.plot({
        width,
        title: "Window size = 10 minutes, max: red, min: blue, mean: green (last 5 hours)",
        x: {label: "UTC time", type: "utc"},
        y: { grid: true, label: "Price [euros]"},
        //color: {legend: true},
        marks: [
          //Plot.legend({color: {type: "linear"}}),
          Plot.lineY(price, {x: "time",
                             y: "close",
                             stroke: "grey",
                             strokeOpacity: 0.5,
                             marker: "circle-stroke"}),
          Plot.lineY(price, Plot.windowY({k: window,
                                          reduce: "min"}, {x: "time",
                                                           y: "close",
                                                           stroke: "blue",
                                                           tip: true})),
          Plot.lineY(price, Plot.windowY({k: window,
                                          reduce: "max"}, {x: "time",
                                                           y: "close",
                                                           stroke: "red",
                                                           tip: true})),
          Plot.lineY(price, Plot.windowY({k: window,
                                          reduce: "mean"}, {x: "time",
                                                            y: "close",
                                                            stroke: "green",
                                                            tip: true}))
        ]
      })
}

export function plotPriceBar(price, {width} = {}) {

    return Plot.plot({
        width,
        title: "Trade volume (last 5 hours)",
        x: {label: "UTC time", type: "utc"},
        y: {grid: true, label: "Number of coins [ETH]"},
        marks: [
          Plot.ruleY([0]),
          Plot.rectY(price, {
            x: "time",
            interval: "minute",
            y: "volume",
            fill: "magenta",
            tip: true
            })
        ]
      });

}