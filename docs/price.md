---
theme: dashboard
toc: false
---

```js
import {plotPriceWindow, plotPriceBar} from "./components/plots.js";
import {convertDates} from "./components/helpers.js";
```

```js
const fiat_price = FileAttachment("./data/price.csv").csv({typed: true});
```

# Fiat price

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plotPriceWindow(convertDates(fiat_price), 10, {width}))} </div>
</div>

---

# Volume

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plotPriceBar(convertDates(fiat_price), {width}))} </div>
</div>