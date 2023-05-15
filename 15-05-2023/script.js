const filterToggle = document.getElementById("filter-toggle");

filterToggle.addEventListener("click", () => {
  filterToggle.classList.toggle("active");
});
const checkboxes = document.querySelectorAll("input[name='category']");

function filterProducts() {
  const products = document.querySelectorAll(".product");
  const selectedCategories = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCategories.push(checkbox.value);
    }
  });
  products.forEach((product) => {
    const category = product.dataset.category;
    if (selectedCategories.includes(category)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterProducts);
});

// product

import { cE, qS, createProduct } from "./utils/fn.js";

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");

productList.className = "productList";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) =>
      productList.append(createProduct(product))
    )
  );

rootEl.append(productListTitle, productList);
