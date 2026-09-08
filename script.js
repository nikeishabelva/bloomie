const products=[
{id:1,name:"Blush Love",type:"Fresh Flower",price:145000,emoji:"💐"},
{id:2,name:"Butter Bloom",type:"Fresh Flower",price:155000,emoji:"🌼"},
{id:3,name:"Sweet Pink",type:"Bouquet",price:135000,emoji:"🌷"},
{id:4,name:"Garden Hug",type:"Fresh Flower",price:175000,emoji:"🌸"},
{id:5,name:"Little Sunshine",type:"Bouquet",price:125000,emoji:"🌻"},
{id:6,name:"Rosy Day",type:"Fresh Flower",price:165000,emoji:"🌹"},
{id:7,name:"Pretty Daisy",type:"Bouquet",price:140000,emoji:"🌼"},
{id:8,name:"Dreamy Pastel",type:"Fresh Flower",price:185000,emoji:"💐"}
];
let cart=[],selectedColor="Blush Pink";
const money=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
document.getElementById("products").innerHTML=products.map(p=>`
<article class="product"><div class="product-img"><div class="bouquet-icon">${p.emoji}</div></div>
<div class="product-info"><span class="pill">${p.type}</span><h3>${p.name}</h3><p>Handcrafted • pretty • gift ready</p><div class="price">${money(p.price)}</div><button class="add" onclick="add(${p.id})">Choose bouquet ♡</button></div></article>`).join("");
document.querySelectorAll(".color").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".color").forEach(x=>x.classList.remove("active"));btn.classList.add("active");selectedColor=btn.dataset.color;document.getElementById("selectedColor").textContent=selectedColor;document.getElementById("modalColor").textContent=selectedColor}));
function add(id){let p=products.find(x=>x.id===id),i=cart.find(x=>x.id===id);i?i.qty++:cart.push({...p,qty:1});document.getElementById("count").textContent=cart.reduce((a,x)=>a+x.qty,0);let t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1600)}
function openCart(){document.getElementById("modalColor").textContent=selectedColor;document.getElementById("items").innerHTML=cart.length?cart.map(x=>`<div class="cart-row"><span>${x.emoji} ${x.name} × ${x.qty}</span><b>${money(x.price*x.qty)}</b></div>`).join(""):"<p style='font-size:13px;color:#806d72'>Belum ada bouquet di bag ♡</p>";document.getElementById("total").textContent=money(cart.reduce((a,x)=>a+x.price*x.qty,0));document.getElementById("modal").classList.add("open")}
function closeCart(){document.getElementById("modal").classList.remove("open")}
function checkout(){if(!cart.length)return alert("Pilih bouquet dulu ya ♡");let order=cart.map(x=>`${x.name} x${x.qty}`).join(", ");window.open("https://wa.me/?text="+encodeURIComponent(`Halo Bloomie! Aku mau order: ${order}. Warna wrapping: ${selectedColor}.`),"_blank")}
