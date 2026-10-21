# Bloomie — Bouquet & Fresh Flower Shop

Website toko bouquet dengan warna dasar **putih, pink, dan butter yellow**, responsive dan siap di-upload ke GitHub Pages.

## Fitur
- Bouquet & fresh flower collection
- Pilihan warna wrapping bouquet
- Keranjang belanja
- Customer reviews
- Deskripsi kualitas dan fresh flower
- Checkout WhatsApp
- Responsive untuk desktop dan mobile
- **Open Graph (og:image)** — thumbnail otomatis muncul saat link di-share ke WhatsApp, Instagram, Facebook, Twitter, dll.

## File
- `index.html` — sudah dilengkapi meta Open Graph & Twitter Card
- `style.css`
- `script.js`
- `og-image.png` — gambar thumbnail untuk preview saat share (1200×630)

## GitHub Pages
1. Upload **semua file** (termasuk `og-image.png`) ke repository GitHub.
2. Buka **Settings → Pages** dan pilih branch utama sebagai source.
3. Setelah live, link `https://nikeishabelva.github.io/bloomie/` akan menampilkan thumbnail otomatis saat di-share.

## Cara cek thumbnail
- WhatsApp: kirim link ke chat diri sendiri / teman
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Atau gunakan https://www.opengraph.xyz/

> **Catatan:** Cache sosial media bisa butuh waktu beberapa menit–jam untuk update. Gunakan debugger di atas lalu klik "Scrape Again" / "Fetch new information".

## WhatsApp
Link checkout masih menggunakan `wa.me` umum. Ganti URL pada fungsi `checkout()` di `script.js` dengan nomor WhatsApp toko agar pesanan langsung masuk ke nomor toko.
