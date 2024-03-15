---
theme: dashboard
toc: false
---

```js
//import {plotFeeRaw, plotFeeMovingAverage} from "./components/plots.js";
import {convertDates} from "./components/helpers.js";
```

```js
const fiat_price = FileAttachment("./data/price.csv").csv({typed: true});
```

# Exchange fiat price

```js
display(convertDates(fiat_price))
```