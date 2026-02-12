    
      const MENU = [
        {
          id: 1,
          name: "C001 ស៊ុបប្រហិតត្រីឆ្លាតសុទ្ធ",
          price: 35000,
          image: "images/photo_1_2026-02-12_09-27-45.jpg",
        },
        {
          id: 2,
          name: "C002 ស៊ុបប្រហិតត្រីឆ្លាតរួម",
          price: 35000,
          image: "images/photo_2_2026-02-12_09-27-45.jpg",
        },
        {
          id: 3,
          name: "C003 ស៊ុបក្បាលត្រីសាលម៉ុន",
          price: 45000,
          image: "images/photo_3_2026-02-12_09-27-45.jpg",
        },
        {
          id: 4,
          name: "C004  ស៊ុបត្រីក្រហម",
          price: 42000,
          image: "images/photo_4_2026-02-12_09-27-45.jpg",
        },
        {
          id: 5,
          name: "C005 ស៊ុបត្រីឆ្ពុង",
          price: 54000,
          image: "images/photo_5_2026-02-12_09-27-45.jpg",
        },
        {
          id: 6,
          name: "C006 ស៊ុបគីស៊ុប ",
          price: 35000,
          image: "images/photo_6_2026-02-12_09-27-45.jpg",
        },
        {
          id: 7,
          name: "C007 ស៊ុបសាច់គោ ",
          price: 35000,
          image: "images/photo_7_2026-02-12_09-27-45.jpg",
        },
        {
          id: 8,
          name: "C008 សាច់អាំងគីមឈី ",
          price: 54000,
          image: "images/photo_8_2026-02-12_09-27-45.jpg",
        },
        {
          id: 9,
          name: "C009 គោឡើងភ្នំ ឈុតរួម  ",
          price: 42000,
          image: "images/photo_9_2026-02-12_09-27-45.jpg",
        },
        {
          id: 10,
          name: "C010 គោឡើងភ្នំ សាច់ជ្រូកបីជាន់+សាច់គោ",
          price: 39000,
          image: "images/photo_10_2026-02-12_09-27-45.jpg",
        },
        {
          id: 11,
          name: "C011 គោគិច សាច់ជ្រូកបីជាន់+សាច់គោ ",
          price: 42000,
          image: "images/photo_11_2026-02-12_09-27-45.jpg",
        },
        {
          id: 12,
          name: "C012  គោគិច សាច់គោ (ធំ) ",
          price: 39000,
          image: "images/photo_12_2026-02-12_09-27-45.jpg",
        },
        {
          id: 13,
          name: "C013 គោត្រកួន ",
          price: 30000,
          image: "images/photo_13_2026-02-12_09-27-45.jpg",
        },
        {
          id: 14,
          name: "C014 គោត្រកួន (សាច់ជ្រូកបីជាន់ )",
          price: 30000,
          image: "images/photo_14_2026-02-12_09-27-45.jpg",
        },
        {
          id: 15,
          name: "C015 គោគិច (តូច)",
          price: 25000,
          image: "images/photo_15_2026-02-12_09-27-45.jpg",
        },
        {
          id: 16,
          name: "C016 គោឡើងភ្នំ -សាច់ជ្រូកបីជាន់ (តូច)",
          price: 17000,
          image: "images/photo_16_2026-02-12_09-27-45.jpg",
        },
        {
          id: 17,
          name: "C016 គោឡើងភ្នំ -សាច់ជ្រូកបីជាន់ (តូច)",
          price: 17000,
          image: "images/photo_17_2026-02-12_09-27-45.jpg",
        },
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
    
