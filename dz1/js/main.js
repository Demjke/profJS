const products = [
  { id: 1, title: "Notebook", price: 2000, img: "images/notebook.jpg" },
  { id: 2, title: "Mouse", price: 20, img: "images/mouse.jpg" },
  { id: 3, title: "Keyboard", price: 200, img: "images/keyboard.jpg" },
  { id: 4, title: "Gamepad", price: 50, img: "images/gamepad.jpg" },
];
const renderProduct = item => {
  return `
    <div class="product-item">
      <div class="product-item__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <h3 class="product-item__title">${item.title}</h3>
      <p class="product-item__price">${item.price} р</p>
      <button class="product-item__btn">Купить</button>
    </div>
  `;
};

const renderPage = list => {
  const productsList = list.map(item => renderProduct(item));
  document.querySelector(".products").innerHTML = productsList.join("");
};

renderPage(products);
