const ITEMS = [
  ["ស៊ុបត្រីឆ្លាត", 35000],
  ["គោឡើងភ្នំ", 42000],
  // ... 55 lines total
];

const NEW_MENU = ITEMS.map(([name, price], i) => ({
  id: 18 + i,
  name: `C${String(18 + i).padStart(3, "0")} ${name}`,
  price,
  image: `images/photo_${i + 1}_2026-11-02_23-00-18.jpg`,
}));

const MENU = [
  // ... your existing items 1 to 17 ...
  ...NEW_MENU,
];


const cart = [];
const menuDiv = document.getElementById("menu");
const cartDiv = document.getElementById("cart");
const totalDiv = document.getElementById("total");

function renderMenu() {
  MENU.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
          <img src="${item.image}" onclick="showImage('${item.image}')">
        <div class="content">
          <b>${item.name}</b><br>
          <b>${item.price}៛</b>
          <br><br>
          <button>Add to Cart</button>
        </div>
      `;

    card.querySelector("button").onclick = () => addToCart(item);
    menuDiv.appendChild(card);
  });
}

function addToCart(item) {
  const exist = cart.find((i) => i.id === item.id);
  if (exist) {
    exist.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  renderCart();
}

function removeFromCart(id) {
  const index = cart.findIndex((i) => i.id === id);
  if (index !== -1) cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  cartDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>No items</p>";
  }

  cart.forEach((item) => {
    total += item.price * item.qty;

    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
        <span>${item.name} × ${item.qty}</span>
        <span>
          ${(item.price * item.qty).toFixed(2)}
          <span class="remove">✕</span>
        </span>
      `;

    row.querySelector(".remove").onclick = () => removeFromCart(item.id);
    cartDiv.appendChild(row);
  });

  totalDiv.innerText = "Total: " + total + "រៀល";
}

renderMenu();

function showImage(src) {
  const modal = document.getElementById("imageModal");
  const fullImage = document.getElementById("fullImage");

  fullImage.src = src;
  modal.style.display = "flex";
}
// close when click anywhere on modal
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("imageModal").onclick = function () {
    this.style.display = "none";
  };
});
