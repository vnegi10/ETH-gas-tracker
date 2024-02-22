---
theme: dashboard
toc: false
---

# Track base fee per unit of gas

```js
const gas_fee = FileAttachment("./data/fee.json").json();
```

```js
display(gas_fee)
```