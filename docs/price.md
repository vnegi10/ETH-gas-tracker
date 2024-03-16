---
theme: dashboard
toc: false
---

```js
import {plotPriceWindow} from "./components/plots.js";
import {convertDates} from "./components/helpers.js";
```

```js
const fiat_price = FileAttachment("./data/price.csv").csv({typed: true});
```

# Exchange fiat price

```js
display(convertDates(fiat_price))
```

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plotPriceWindow(convertDates(fiat_price), 10, {width}))} </div>
</div>