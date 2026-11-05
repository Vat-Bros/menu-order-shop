// ===== Splash screen: shows only photo_0.jpg until everything is loaded =====
const splash = document.createElement("div");
splash.id = "splash";
splash.style.cssText = `
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #000 url('images/photo_0.jpg') center / contain no-repeat;
  transition: opacity 0.6s ease;
`;
document.body.appendChild(splash);

const splashStart = Date.now();
const MIN_SPLASH_MS = 1500; // minimum time to show the splash

window.addEventListener("load", () => {
  const wait = Math.max(0, MIN_SPLASH_MS - (Date.now() - splashStart));
  setTimeout(() => {
    splash.style.opacity = "0";
    setTimeout(() => splash.remove(), 600);
  }, wait);
});

const ITEMS = [
  ["បុកសណ្តែកគួរសាច់គោ", 25000],
  ["ភា្លសាច់គោ", 25000],
  ["steaks", 40000],
  ["ត្រីក្រហម", 00000],
  ["អន្ទង់ទឹកកក", 25000],
  ["ត្រីឆ្ពុងចំហុយក្រូចឆ្នា", 45000],
  ["បុកកំពឹសសណ្តែកគួរ"],
  ["កង្កែបលីងអំបិលម្ទេស", 25000],
  ["បង្គារបំពងខ្ទឹមសរ", 25000],
  ["បាយឆាបង្គារចានធំ", 20000],
  ["កង្កែបឆាគ្រឿង", 25000],
  ["បុកស្វាយត្រីឆ្អើ", 25000],
  ["សាច់គោខាតណាទឹកភ្នែក", 25000],
  ["បុកកំពឹសម្អម៉", 25000],
  ["ឡាបឈាម", 25000],
  ["បុកកំពឹសអំពិលខ្ចី", 25000],
  ["ប្រហិតត្រីចៀន", 25000],
  ["ចង្រិតដូងបំពង", 25000],
  ["អន្ទងឆាក្រវ៉ាញ", 25000],
  ["ខួរចំហុយ", 15000],
  ["ត្រីសាម៉ុង", 30000],
  ["កន្សោមអាំង", 11000],
  ["អន្ទង់ទឹកកក", 25000],
  ["សរសៃកែងបំពង", 25000],
  ["សាច់អាំង", 11000],
  ["សាច់ដំុងអាំង", 40000],
  ["សណ្តែកស្ងោរ", 12000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["មាន់លីងចេកខ្ចី", 00000],
  ["បង្គារខ្ចឹមជ្រក់", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
    ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000],
  ["អត់ដឹង", 00000]
  // ... 85 lines total
];

const NEW_MENU = ITEMS.map(([name, price], i) => ({
  id: 1 + i,
  name: `C${String(1 + i).padStart(3, "0")} ${name}`,
  price,
  image: `images/photo_${i + 1}.jpg`,
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
