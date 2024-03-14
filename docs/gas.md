---
theme: dashboard
toc: false
---

# Track base fee per unit of gas

```js
import {plot_fee} from "./components/plots.js";
```

```js
const gas_fee = FileAttachment("./data/fee.json").json();
```

```js
// Convert String to Date object so that we make plots later
var gas_fee_dates
gas_fee_dates = gas_fee.map(({time, ...rest}) => {
  return {
    time: new Date(Date.UTC(
              parseInt(time.substr(0, 4)),   // Year
              parseInt(time.substr(5, 2)) - 1, // Month (zero-based)
              parseInt(time.substr(8, 2)),     // Day
              parseInt(time.substr(11, 2)),    // Hour
              parseInt(time.substr(14, 2)),    // Minute
              parseInt(time.substr(17, 2))     // Second
    )),
    ...rest
  };
})
```

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_fee(gas_fee_dates, {width}))} </div>
</div>