import { cE, qS, createProduct, createProductModal, qSA } from "./utils/fn.js";

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".searchInput");
const filterButtonsContainer = cE("div"); 
let productListData = [];

productList.className = "productList";
rootEl.append(productListTitle, filterButtonsContainer, productList); 
// ASYNC
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) =>
      productList.append(createProduct(product))
    );
    createFilterButtons(); 
  })
  .then(() => {
    const productCardEls = qSA(".productCard");

    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(createProductModal(data, rootEl)))
      )
    );
  });

// EVENTS
searchProductEl.addEventListener("input", (evt) => {
  productList.textContent = "";

  productListData
    .filter((product) =>
      product.description.toLowerCase().includes(evt.target.value.toLowerCase())
    )
    .forEach((obj) => productList.append(createProduct(obj)));
});

// pulsanti categorie
function createFilterButtons() {
  const categories = ["All", "smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"]; // Aggiungiamo il pulsante "All"

  categories.forEach((category) => {
    const categoryButton = cE("button");
    categoryButton.textContent = category;
    categoryButton.classList.add(category.class);
    categoryButton.className = "categoryButton"
    categoryButton.addEventListener("click", () => {
      filterProducts(category);
    });
    filterButtonsContainer.appendChild(categoryButton);
  });
}
function filterProducts(category) {
  productList.textContent = "";

  if (category === "All") { 
    productListData.forEach((obj) => productList.append(createProduct(obj)));
  } else {
    productListData
      .filter((product) => product.category === category)
      .forEach((obj) => productList.append(createProduct(obj)));
  }
}

 