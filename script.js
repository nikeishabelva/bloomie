/* ========== DATA ========== */
const products = [
  {
    id: 1,
    name: "Blush Love",
    type: "Fresh Flower",
    price: 145000,
    desc: "Rangkaian soft pink dengan mawar dan baby’s breath. Cocok untuk anniversary & pernyataan cinta.",
    img: "images/blush-love.jpg"
  },
  {
    id: 2,
    name: "Butter Bloom",
    type: "Fresh Flower",
    price: 155000,
    desc: "Nuansa butter yellow yang hangat dan cerah. Perfect untuk ulang tahun atau cheer-up gift.",
    img: "images/butter-bloom.jpg"
  },
  {
    id: 3,
    name: "Sweet Pink",
    type: "Bouquet",
    price: 135000,
    desc: "Bouquet pastel pink yang manis dan elegan. Gift-ready dengan wrapping pilihanmu.",
    img: "images/sweet-pink.jpg"
  },
  {
    id: 4,
    name: "Garden Hug",
    type: "Fresh Flower",
    price: 175000,
    desc: "Komposisi garden-style yang natural dan full. Terasa seperti pelukan dari taman.",
    img: "images/garden-hug.jpg"
  },
  {
    id: 5,
    name: "Little Sunshine",
    type: "Bouquet",
    price: 125000,
    desc: "Bouquet kecil cerah dengan sentuhan kuning. Ideal untuk hadiah kecil yang bermakna.",
    img: "images/little-sunshine.jpg"
  },
  {
    id: 6,
    name: "Rosy Day",
    type: "Fresh Flower",
    price: 165000,
    desc: "Mawar merah muda klasik yang timeless. Untuk momen spesial yang ingin dikenang.",
    img: "images/rosy-day.jpg"
  },
  {
    id: 7,
    name: "Pretty Daisy",
    type: "Bouquet",
    price: 140000,
    desc: "Daisy dan filler soft yang ceria. Ringan, segar, dan mudah disukai siapa saja.",
    img: "images/pretty-daisy.jpg"
  },
  {
    id: 8,
    name: "Dreamy Pastel",
    type: "Fresh Flower",
    price: 185000,
    desc: "Rangkaian pastel dreamy premium. Komposisi full dan mewah untuk momen istimewa.",
    img: "images/dreamy-pastel.jpg"
  }
];

let cart = JSON.parse(localStorage.getItem("bloomie_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("bloomie_wish") || "[]");
let selectedColor = "Blush Pink";
let currentFilter = "all";

const money = n => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

/* ========== WELCOME ========== */
function closeWelcome() {
  const el = document.getElementById("welcome");
  el.classList.add("hide");
  localStorage.setItem("bloomie_visited", "1");
  setTimeout(() => el.style.display = "none", 600);
}

(function initWelcome() {
  if (localStorage.getItem("bloomie_visited")) {
    document.getElementById("welcome").style.display = "none";
  }
})();

/* ========== RENDER PRODUCTS ========== */
function renderProducts() {
  const list = currentFilter === "all"
    ? products
    : products.filter(p => p.type === currentFilter);

  document.getElementById("products").innerHTML = list.map(p => {
    const wished = wishlist.includes(p.id);
    return `
      <article class="product" data-id="${p.id}">
        <div class="product-img" onclick="openDetail(${p.id})">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='';this.style.background='#f8e1e7';this.style.display='flex';this.parentElement.style.background='#fff5f2'">
          <button class="wish-btn ${wished ? "active" : ""}" onclick="event.stopPropagation();toggleWish(${p.id})" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <div class="product-info">
          <span class="pill">${p.type}</span>
          <h3 onclick="openDetail(${p.id})">${p.name}</h3>
          <p class="desc">${p.desc.slice(0, 55)}…</p>
          <div class="price">${money(p.price)}</div>
          <button class="add" onclick="event.stopPropagation();add(${p.id})">Tambah ke bag ♡</button>
        </div>
      </article>`;
  }).join("");
}

/* ========== FILTER ========== */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderProducts();
  });
});

/* ========== COLOR ========== */
document.querySelectorAll(".color").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".color").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    selectedColor = btn.dataset.color;
    document.getElementById("selectedColor").textContent = selectedColor;
    document.getElementById("modalColor").textContent = selectedColor;
  });
});

/* ========== CART ========== */
function saveCart() {
  localStorage.setItem("bloomie_cart", JSON.stringify(cart));
  updateCounts();
}

function add(id) {
  const p = products.find(x => x.id === id);
  const item = cart.find(x => x.id === id);
  if (item) item.qty++;
  else cart.push({ ...p, qty: 1 });
  saveCart();
  showToast(`${p.name} ditambahkan ke bag ♡`);
}

function openCart() {
  document.getElementById("modalColor").textContent = selectedColor;
  const box = document.getElementById("items");
  if (!cart.length) {
    box.innerHTML = `<div class="empty-state"><span>🛍</span>Belum ada bouquet di bag-mu</div>`;
  } else {
    box.innerHTML = cart.map(x => `
      <div class="cart-row">
        <img src="${x.img}" alt="${x.name}">
        <div class="info">
          <strong>${x.name}</strong><br>
          <span style="color:#806d72;font-size:12px">${x.qty} × ${money(x.price)}</span>
        </div>
        <b>${money(x.price * x.qty)}</b>
      </div>`).join("");
  }
  document.getElementById("total").textContent = money(cart.reduce((a, x) => a + x.price * x.qty, 0));
  document.getElementById("modal").classList.add("open");
}

function closeCart() {
  document.getElementById("modal").classList.remove("open");
}

function checkout() {
  if (!cart.length) {
    showToast("Pilih bouquet dulu ya ♡");
    return;
  }
  const order = cart.map(x => `${x.name} x${x.qty}`).join(", ");
  const text = `Halo Bloomie! Aku mau order:\n${order}\n\nWarna wrapping: ${selectedColor}\nTotal: ${money(cart.reduce((a, x) => a + x.price * x.qty, 0))}\n\nTerima kasih ♡`;
  window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
}

/* ========== WISHLIST ========== */
function saveWish() {
  localStorage.setItem("bloomie_wish", JSON.stringify(wishlist));
  updateCounts();
  renderProducts();
}

function toggleWish(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("Dihapus dari wishlist");
  } else {
    wishlist.push(id);
    const p = products.find(x => x.id === id);
    showToast(`${p.name} disimpan ke wishlist ♡`);
  }
  saveWish();
}

function openWishlist() {
  const box = document.getElementById("wishItems");
  if (!wishlist.length) {
    box.innerHTML = `<div class="empty-state"><span>♡</span>Wishlist masih kosong.<br>Klik hati di produk untuk menyimpan.</div>`;
  } else {
    box.innerHTML = wishlist.map(id => {
      const p = products.find(x => x.id === id);
      if (!p) return "";
      return `
        <div class="wish-row">
          <img src="${p.img}" alt="${p.name}">
          <div class="info">
            <strong>${p.name}</strong><br>
            <span style="color:#806d72;font-size:12px">${money(p.price)}</span>
          </div>
          <button class="btn" style="padding:8px 14px;font-size:12px" onclick="add(${p.id});closeWishlist()">+ Bag</button>
        </div>`;
    }).join("");
  }
  document.getElementById("wishModal").classList.add("open");
}

function closeWishlist() {
  document.getElementById("wishModal").classList.remove("open");
}

/* ========== DETAIL ========== */
function openDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const wished = wishlist.includes(p.id);
  document.getElementById("detailContent").innerHTML = `
    <img class="detail-img" src="${p.img}" alt="${p.name}">
    <div class="detail-body">
      <span class="pill">${p.type}</span>
      <h2>${p.name}</h2>
      <p class="desc">${p.desc}</p>
      <div class="price" style="font-size:20px;margin-bottom:8px">${money(p.price)}</div>
      <p style="font-size:12px;color:#806d72">Wrapping saat ini: <strong>${selectedColor}</strong></p>
      <div class="detail-actions">
        <button class="btn" onclick="add(${p.id});closeDetail()">Tambah ke bag ♡</button>
        <button class="btn-outline" onclick="toggleWish(${p.id});openDetail(${p.id})">${wished ? "♥ Tersimpan" : "♡ Wishlist"}</button>
      </div>
    </div>`;
  document.getElementById("detailModal").classList.add("open");
}

function closeDetail() {
  document.getElementById("detailModal").classList.remove("open");
}

/* ========== TOAST & COUNTS ========== */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

function updateCounts() {
  const cartCount = cart.reduce((a, x) => a + x.qty, 0);
  document.getElementById("count").textContent = cartCount || "";
  document.getElementById("wishCount").textContent = wishlist.length || "";
}

/* ========== CLOSE MODALS ON OVERLAY ========== */
["modal", "wishModal", "detailModal"].forEach(id => {
  document.getElementById(id).addEventListener("click", e => {
    if (e.target.id === id) {
      e.target.classList.remove("open");
    }
  });
});

/* ========== INIT ========== */
renderProducts();
updateCounts();
