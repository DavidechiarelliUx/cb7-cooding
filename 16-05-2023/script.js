// product

import { cE, qS, createProduct } from "./utils/fn.js";
import products from "./product.js";

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");

productList.className = "productList";

products.forEach((product) => {
const productEl = createProduct(product);
productList.appendChild(productEl);
});

rootEl.append(productListTitle, productList);

// sezione della pagina del prodotto
