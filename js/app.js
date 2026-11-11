
const RAW_MENU = [
  { id: 1,  name: "កង្កែបឆាគ្រឿង", price: 0, image: "កង្កែបឆាគ្រឿង.jpg" },
  { id: 2,  name: "កង្កែបបំពងរ៉តឌី", price: 0, image: "កង្កែបបំពងរ៉តឌី.jpg" },
  { id: 3,  name: "កង្កែបលីងអំបិលម្ទេស", price: 0, image: "កង្កែបលីងអំបិលម្ទេស.jpg" },
  { id: 4,  name: "កន្ធាយអាំងអំបិលម្ទេស", price: 0, image: "កន្ធាយអាំងអំបិលម្ទេស.jpg" },
  { id: 5,  name: "កន្ធាយចំហុយថ្នាំចិនសែ", price: 0, image: "កន្ធាយចំហុយថ្នាំចិនសែ.jpg" },
  { id: 6,  name: "កន្សោមអាំង", price: 0, image: "កន្សោមអាំង.jpg" },
  { id: 7,  name: "ក្រលៀន", price: 0, image: "ក្រលៀន.jpg" },
  { id: 8,  name: "ខួរគោចំហុយម្រេច", price: 0, image: "ខួរគោចំហុយម្រេច.jpg" },
  { id: 9,  name: "ខួរចំហុយម្រិច", price: 0, image: "ខួរចំហុយម្រិច.jpg" },
  { id: 10, name: "ងាវឆាអំពិលទុំ", price: 0, image: "ងាវឆាអំពិលទុំ.jpg" },
  { id: 11, name: "ងាវស្រុះ", price: 0, image: "ងាវស្រុះ.jpg" },
  { id: 12, name: "ងាវអាំងអំបិលម្រិច", price: 0, image: "ងាវអាំងអំបិលម្រិច.jpg" },
  { id: 13, name: "ចង្រឹតដូងបំពង", price: 0, image: "ចង្រឹតដូងបំពង.jpg" },
  { id: 14, name: "ឆាក្តៅកង្កែប", price: 0, image: "ឆាក្តៅកង្កែប.jpg" },
  { id: 15, name: "ឆាក្តៅទា", price: 0, image: "ឆាក្តៅទា.jpg" },
  { id: 16, name: "ឆាផ្សិតភ្លៅមាន់", price: 0, image: "ឆាផ្សិតភ្លៅមាន់.jpg" },
  { id: 17, name: "ឆាមឹកម្រិចខ្ចី", price: 0, image: "ឆាមឹកម្រិចខ្ចី.jpg" },
  { id: 18, name: "ឆាឡុកឡាក់សាច់គោ", price: 0, image: "ឆាឡុកឡាក់សាច់គោ.jpg" },
  { id: 19, name: "ឆាអង្ក្រងអណ្តាតគោ", price: 0, image: "ឆាអង្ក្រងអណ្តាតគោ.jpg" },
  { id: 20, name: "ឆ្អឹងជំនីជ្រូកឆាជូរអែម", price: 0, image: "ឆ្អឹងជំនីជ្រូកឆាជូរអែម.jpg" },
  { id: 21, name: "ឆ្អឹងជំនីជ្រូកបំពង", price: 0, image: "ឆ្អឹងជំនីជ្រូកបំពង.jpg" },
  { id: 22, name: "ជំពុះទា", price: 0, image: "ជំពុះទា.jpg" },
  { id: 23, name: "ញាំត្រយ៉ូងចេកពោះគោ", price: 0, image: "ញាំត្រយ៉ូងចេកពោះគោ.jpg" },
  { id: 24, name: "ញាំត្រយ៉ូងចេកសាច់មាន់", price: 0, image: "ញាំត្រយ៉ូងចេកសាច់មាន់.jpg" },
  { id: 25, name: "ញាំមី", price: 0, image: "ញាំមី.jpg" },
  { id: 26, name: "ញាំមីសួរ", price: 0, image: "ញាំមីសួរ.jpg" },
  { id: 27, name: "ញាំសាច់គោអាំង", price: 0, image: "ញាំសាច់គោអាំង.jpg" },
  { id: 28, name: "ញាំស្វាយត្រីឆ្អើ", price: 0, image: "ញាំស្វាយត្រីឆ្អើ.jpg" },
  { id: 29, name: "ត្រីក្រហមក្រូចឆ្មា", price: 0, image: "ត្រីក្រហមក្រូចឆ្មា.jpg" },
  { id: 30, name: "ត្រីឆ្ពុងចំហុយក្រូចឆ្មារ", price: 0, image: "ត្រីឆ្ពុងចំហុយក្រូចឆ្មារ.jpg" },
  { id: 31, name: "ត្រីឆ្ពុងចំហុយទឹកស៊ីអ៊ីវ", price: 0, image: "ត្រីឆ្ពុងចំហុយទឹកស៊ីអ៊ីវ.jpg" },
  { id: 32, name: "ត្រីសាម៉ុន", price: 0, image: "ត្រីសាម៉ុន.jpg" },
  { id: 33, name: "ថ្លើម", price: 0, image: "ថ្លើម.jpg" },
  { id: 34, name: "ទាកំប៉ាឆាង៉ាំង៉ុវ", price: 0, image: "ទាកំប៉ាឆាង៉ាំង៉ុវ.jpg" },
  { id: 35, name: "បង្គារឆាផ្កាខាត់ណា", price: 0, image: "បង្គារឆាផ្កាខាត់ណា.jpg" },
  { id: 36, name: "បង្គារទឹកត្រៅកោះកុង", price: 0, image: "បង្គារទឹកត្រៅកោះកុង.jpg" },
  { id: 37, name: "បង្គារបំពងខ្ទឹមស", price: 0, image: "បង្គារបំពងខ្ទឹមស.jpg" },
  { id: 38, name: "បង្គារបំពង់ម្រៅ", price: 0, image: "បង្គារបំពង់ម្រៅ.jpg" },
  { id: 39, name: "បង្គារស្រុះ", price: 0, image: "បង្គារស្រុះ.jpg" },
  { id: 40, name: "បង្គារអប់មីសួ", price: 0, image: "បង្គារអប់មីសួ.jpg" },
  { id: 41, name: "បង្គារអាំង", price: 0, image: "បង្គារអាំង.jpg" },
  { id: 42, name: "បាយឆាគ្រឿងសមុទ្រ", price: 0, image: "បាយឆាគ្រឿងសមុទ្រ.jpg" },
  { id: 43, name: "បាយឆាបង្គារចានតូច", price: 0, image: "បាយឆាបង្គារចានតូច.jpg" },
  { id: 44, name: "បាយឆាបង្គារចានធំ", price: 0, image: "បាយឆាបង្គារចានធំ.jpg" },
  { id: 45, name: "បុកកំពឹសម្អម", price: 0, image: "បុកកំពឹសម្អម.jpg" },
  { id: 46, name: "បុកកំពឹសសណ្តែកគួរ", price: 0, image: "បុកកំពឹសសណ្តែកគួរ.jpg" },
  { id: 47, name: "បុកកំពឹសអំពិលខ្ចី", price: 0, image: "បុកកំពឹសអំពិលខ្ចី.jpg" },
  { id: 48, name: "បុកងាវ", price: 0, image: "បុកងាវ.jpg" },
  { id: 49, name: "បុកចំម្រុះ", price: 0, image: "បុកចំម្រុះ.jpg" },
  { id: 50, name: "បុកល្ហុង", price: 0, image: "បុកល្ហុង.jpg" },
  { id: 51, name: "បុកសណ្តែកគួរសាច់គោ", price: 0, image: "បុកសណ្តែកគួរសាច់គោ.jpg" },
  { id: 52, name: "បុកស្វាយត្រីឆ្អើ", price: 0, image: "បុកស្វាយត្រីឆ្អើ.jpg" },
  { id: 53, name: "ប្រហិតត្រីចៀន", price: 0, image: "ប្រហិតត្រីចៀន.jpg" },
  { id: 54, name: "ពោះគោ", price: 0, image: "ពោះគោ.jpg" },
  { id: 55, name: "ពោះគោ១០០ស្រទាប់", price: 0, image: "ពោះគោ១០០ស្រទាប់.jpg" },
  { id: 56, name: "ភ្លាកំពឹស", price: 0, image: "ភ្លាកំពឹស.jpg" },
  { id: 57, name: "ភ្លាក្តាមសេះ", price: 0, image: "ភ្លាក្តាមសេះ.jpg" },
  { id: 58, name: "ភ្លាបង្គា", price: 0, image: "ភ្លាបង្គា.jpg" },
  { id: 59, name: "ភ្លាសាច់គោ", price: 0, image: "ភ្លាសាច់គោ.jpg" },
  { id: 60, name: "ភ្លាសាម៉ុន", price: 0, image: "ភ្លាសាម៉ុន.jpg" },
  { id: 61, name: "មាន់ឆាក្តៅ", price: 0, image: "មាន់ឆាក្តៅ.jpg" },
  { id: 63, name: "មាន់លិងចេកខ្ចី", price: 0, image: "មាន់លិងចេកខ្ចី.jpg" },
  { id: 63, name: "មឹកអាំង", price: 0, image: "មឹកអាំង.jpg" },
  { id: 64, name: "យុាំមីសួរគ្រឿងសមុទ្រ", price: 0, image: "យុាំមីសួរគ្រឿងសមុទ្រ.jpg" },
  { id: 65, name: "លឹង្គចំហុយ", price: 0, image: "លឹង្គចំហុយ.jpg" },
  { id: 66, name: "លឹង្គឆាអង្ក្រងសាំងទាប", price: 0, image: "លឹង្គឆាអង្ក្រងសាំងទាប.jpg" },
  { id: 67, name: "លំពេង", price: 0, image: "លំពេង.jpg" },
  { id: 68, name: "សណ្តែកស្ងោរ", price: 0, image: "សណ្តែកស្ងោរ.jpg" },
  { id: 69, name: "សរសៃកែងមាន់បំពង", price: 0, image: "សរសៃកែងមាន់បំពង.jpg" },
  { id: 70, name: "សាច់គោខាត់ណាទឹកភ្នែក", price: 0, image: "សាច់គោខាត់ណាទឹកភ្នែក.jpg" },
  { id: 71, name: "សាច់គោបុកម្អម", price: 0, image: "សាច់គោបុកម្អម.jpg" },
  { id: 72, name: "សាច់គោបំពង", price: 0, image: "សាច់គោបំពង.jpg" },
  { id: 73, name: "សាច់គោអាំង", price: 0, image: "សាច់គោអាំង.jpg" },
  { id: 74, name: "សាច់ងៀតគោ", price: 0, image: "សាច់ងៀតគោ.jpg" },
  { id: 75, name: "សាច់ដុំ", price: 0, image: "សាច់ដុំ.jpg" },
  { id: 76, name: "សាច់អាំង", price: 0, image: "សាច់អាំង.jpg" },
  { id: 77, name: "ស្តែក", price: 0, image: "ស្តែក.jpg" },
  { id: 78, name: "ហៃប៊ីក្រូចឆ្មា", price: 0, image: "ហៃប៊ីក្រូចឆ្មា.jpg" },
  { id: 79, name: "ហ៊ុអាំង", price: 0, image: "ហ៊ុអាំង.jpg" },
  { id: 80, name: "ឡាបឈាម", price: 0, image: "ឡាបឈាម.jpg" },
  { id: 81, name: "ឡាបសាច់គោ", price: 0, image: "ឡាបសាច់គោ.jpg" },
  { id: 82, name: "ឡាបហ៊ុនជ្រូក", price: 0, image: "ឡាបហ៊ុនជ្រូក.jpg" },
  { id: 83, name: "ឡុកឡាក់សាច់គោ", price: 0, image: "ឡុកឡាក់សាច់គោ.jpg" },
  { id: 84, name: "អង្ទង់ឆាក្រវ៉ាញ", price: 0, image: "អង្ទង់ឆាក្រវ៉ាញ.jpg" },
  { id: 85, name: "អន្ទង់ឆាក្តៅ", price: 0, image: "អន្ទង់ឆាក្តៅ.jpg" },
  { id: 86, name: "អន្ទង់ទឹកកក", price: 0, image: "អន្ទង់ទឹកកក.jpg" },
  { id: 87, name: "អន្ទង់អប់ត្រយ៉ូងចេក", price: 0, image: "អន្ទង់អប់ត្រយ៉ូងចេក.jpg" },
  { id: 88, name: "អន្ទង់អាំងទឹកត្រីអំពិលទុំ", price: 0, image: "អន្ទង់អាំងទឹកត្រីអំពិលទុំ.jpg" },
  { id: 89, name: "អន្ទង់អាំងម្រិច", price: 0, image: "អន្ទង់អាំងម្រិច.jpg" },
];

const MENU = RAW_MENU.map(item => ({
  ...item,
  name: item.name.trim(),
  image: `images/${encodeURIComponent(item.image)}`,
}));

const cart = [];
const menuDiv = document.getElementById("menu");
const cartDiv = document.getElementById("cart");
const totalDiv = document.getElementById("total");
const searchInput = document.getElementById("searchInput");
const searchWrap = document.querySelector(".search-wrap");
const searchToggle = document.getElementById("searchToggle");
const searchCollapseThreshold = searchWrap ? searchWrap.offsetTop : 0;

function normalizeQuery(value) {
  return value.toLowerCase().trim();
}

function getFilteredMenu() {
  const query = normalizeQuery(searchInput ? searchInput.value : "");
  return query
    ? MENU.filter((item) => item.name.toLowerCase().includes(query))
    : MENU;
}

function updateSearchState() {
  const isScrolled = window.scrollY > searchCollapseThreshold;
  searchWrap.classList.toggle("is-scrolled", isScrolled);

  if (!isScrolled) {
    searchWrap.classList.remove("is-expanded");
  }

  const isExpanded = !isScrolled || searchWrap.classList.contains("is-expanded");
  searchToggle.setAttribute("aria-expanded", String(isExpanded));
  searchToggle.setAttribute(
    "aria-label",
    isExpanded ? "Search menu items" : "Open search",
  );
}

function renderMenu() {
  const filteredMenu = getFilteredMenu();

  menuDiv.innerHTML = "";

  if (filteredMenu.length === 0) {
    menuDiv.innerHTML = "<p>No menu items found.</p>";
    return;
  }

  filteredMenu.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.menuImage = item.image;

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

if (searchInput) {
  searchInput.addEventListener("input", renderMenu);
}

if (searchWrap && searchToggle && searchInput) {
  window.addEventListener("scroll", updateSearchState, { passive: true });

  searchToggle.addEventListener("click", () => {
    if (searchWrap.classList.contains("is-scrolled")) {
      searchWrap.classList.toggle("is-expanded");
      updateSearchState();

      if (!searchWrap.classList.contains("is-expanded")) {
        searchToggle.focus();
        return;
      }
    }

    searchInput.focus();
  });

  document.addEventListener("click", (event) => {
    if (
      !searchWrap.classList.contains("is-expanded") ||
      searchWrap.contains(event.target)
    ) {
      return;
    }

    searchWrap.classList.remove("is-expanded");
    updateSearchState();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && searchWrap.classList.contains("is-expanded")) {
      searchWrap.classList.remove("is-expanded");
      updateSearchState();
      searchToggle.focus();
    }
  });

  updateSearchState();
}

function showImage(src) {
  const modal = document.getElementById("imageModal");
  slideshowItems = getFilteredMenu();
  slideshowIndex = slideshowItems.findIndex((item) => item.image === src);
  if (slideshowIndex === -1) return;

  updateSlideshowImage();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

let slideshowIndex = 0;
let slideshowItems = MENU;
const imageModal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const slideshowFrame = document.querySelector(".slideshow-frame");
let controlsHideTimer;
let zoomScale = 1;
let zoomOffsetX = 0;
let zoomOffsetY = 0;
let activePointers = new Map();
let gestureStart = null;
let pinchStartDistance = 0;
let pinchStartScale = 1;
let pinchOccurred = false;

function updateSlideshowImage() {
  fullImage.src = slideshowItems[slideshowIndex].image;
  document.getElementById("previousSlide").disabled = slideshowIndex === 0;
  document.getElementById("nextSlide").disabled = slideshowIndex === slideshowItems.length - 1;
  setZoom(1);
  scrollMenuToCurrentItem();
}

function setZoom(scale) {
  zoomScale = Math.min(3, Math.max(1, scale));
  if (zoomScale === 1) {
    zoomOffsetX = 0;
    zoomOffsetY = 0;
  }
  const maxX = (slideshowFrame.clientWidth * (zoomScale - 1)) / 2;
  const maxY = (slideshowFrame.clientHeight * (zoomScale - 1)) / 2;
  zoomOffsetX = Math.min(maxX, Math.max(-maxX, zoomOffsetX));
  zoomOffsetY = Math.min(maxY, Math.max(-maxY, zoomOffsetY));
  fullImage.style.transform = `translate(${zoomOffsetX}px, ${zoomOffsetY}px) scale(${zoomScale})`;
  document.getElementById("zoomOut").disabled = zoomScale === 1;
  document.getElementById("zoomIn").disabled = zoomScale === 3;
}

function scrollMenuToCurrentItem() {
  const image = slideshowItems[slideshowIndex].image;
  const card = [...menuDiv.querySelectorAll(".card")]
    .find((menuCard) => menuCard.dataset.menuImage === image);
  card?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showNextSlide() {
  if (slideshowIndex >= slideshowItems.length - 1) return;
  slideshowIndex++;
  updateSlideshowImage();
}

function showPreviousSlide() {
  if (slideshowIndex <= 0) return;
  slideshowIndex--;
  updateSlideshowImage();
}

function closeSlideshow() {
  clearTimeout(controlsHideTimer);
  slideshowFrame.classList.remove("controls-visible");
  setZoom(1);
  imageModal.classList.remove("is-open");
  imageModal.setAttribute("aria-hidden", "true");
}

slideshowFrame.addEventListener("pointerdown", (event) => {
  if (event.pointerType !== "touch" || event.target.closest("button")) return;
  slideshowFrame.setPointerCapture(event.pointerId);
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (activePointers.size === 1) {
    gestureStart = { x: event.clientX, y: event.clientY, offsetX: zoomOffsetX, offsetY: zoomOffsetY };
    pinchOccurred = false;
  } else if (activePointers.size === 2) {
    const [first, second] = [...activePointers.values()];
    pinchStartDistance = Math.hypot(second.x - first.x, second.y - first.y);
    pinchStartScale = zoomScale;
    pinchOccurred = true;
  }
});

slideshowFrame.addEventListener("pointermove", (event) => {
  if (!activePointers.has(event.pointerId)) return;
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (activePointers.size >= 2) {
    const [first, second] = [...activePointers.values()];
    const distance = Math.hypot(second.x - first.x, second.y - first.y);
    if (pinchStartDistance > 0) {
      setZoom(pinchStartScale * (distance / pinchStartDistance));
    }
    return;
  }

  if (zoomScale > 1 && gestureStart) {
    zoomOffsetX = gestureStart.offsetX + event.clientX - gestureStart.x;
    zoomOffsetY = gestureStart.offsetY + event.clientY - gestureStart.y;
    setZoom(zoomScale);
  }
});

function finishPointerGesture(event) {
  if (!activePointers.has(event.pointerId)) return;
  const start = gestureStart;
  activePointers.delete(event.pointerId);
  if (activePointers.size === 0) {
    if (start && !pinchOccurred && zoomScale === 1) {
      const deltaX = event.clientX - start.x;
      const deltaY = event.clientY - start.y;
      if (Math.abs(deltaX) >= 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) showNextSlide();
        else showPreviousSlide();
      }
    }
    gestureStart = null;
    pinchStartDistance = 0;
    pinchOccurred = false;
  }
}

slideshowFrame.addEventListener("pointerup", finishPointerGesture);
slideshowFrame.addEventListener("pointercancel", (event) => {
  activePointers.delete(event.pointerId);
  if (activePointers.size === 0) {
    gestureStart = null;
    pinchStartDistance = 0;
    pinchOccurred = false;
  }
});

slideshowFrame.addEventListener("pointerdown", (event) => {
  if (event.pointerType !== "touch") return;
  clearTimeout(controlsHideTimer);
  slideshowFrame.classList.add("controls-visible");
  imageModal.classList.add("controls-visible");
  controlsHideTimer = setTimeout(() => {
    slideshowFrame.classList.remove("controls-visible");
    imageModal.classList.remove("controls-visible");
  }, 1800);
});

document.getElementById("zoomOut").addEventListener("click", () => setZoom(zoomScale - 0.25));
document.getElementById("zoomIn").addEventListener("click", () => {
  setZoom(zoomScale + 0.25);
});
document.getElementById("nextSlide").addEventListener("click", showNextSlide);
document.getElementById("previousSlide").addEventListener("click", showPreviousSlide);
document.getElementById("closeSlideshow").addEventListener("click", closeSlideshow);
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) closeSlideshow();
});
document.addEventListener("keydown", (event) => {
  const zoomKeys = ["+", "=", "-", "_", "0"];
  const isZoomShortcut = zoomKeys.includes(event.key)
    || event.code === "NumpadAdd"
    || event.code === "NumpadSubtract";
  if ((event.ctrlKey || event.metaKey) && isZoomShortcut) {
    event.preventDefault();
  }
});
document.addEventListener("wheel", (event) => {
  if (event.ctrlKey || event.metaKey) event.preventDefault();
}, { passive: false });
document.addEventListener("touchmove", (event) => {
  if (event.touches.length > 1) event.preventDefault();
}, { passive: false });
["gesturestart", "gesturechange", "gestureend"].forEach((gestureEvent) => {
  document.addEventListener(gestureEvent, (event) => event.preventDefault(), { passive: false });
});
document.addEventListener("keydown", (event) => {
  if (!imageModal.classList.contains("is-open")) return;
  if (event.key === "Escape") closeSlideshow();
  if (event.key === "ArrowRight") showNextSlide();
  if (event.key === "ArrowLeft") showPreviousSlide();
});
