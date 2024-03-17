---
theme: dashboard
toc: false
---

```js
import {plotFeeRaw, plotFeeMovingAverage} from "./components/plots.js";
import {convertDates} from "./components/helpers.js";
```

```js
const gas_fee = FileAttachment("./data/fee.json").json();
```

# Base fee per block

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plotFeeRaw(convertDates(gas_fee), {width}))} </div>
</div>

---

# Transaction fee per block

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plotFeeMovingAverage(convertDates(gas_fee), 50, {width}))} </div>
</div>

---

## Data source: [Infura API](https://docs.infura.io/api/networks/ethereum)