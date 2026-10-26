# Bloomie — Bouquet & Fresh Flower Shop

Website toko bouquet dengan warna dasar **putih, pink, dan butter yellow**, responsive dan siap di-upload ke GitHub Pages.

**Live:** https://nikeishabelva.github.io/bloomie/

---

## Fitur

- Bouquet & fresh flower collection
- Pilihan warna wrapping bouquet
- Keranjang belanja
- Customer reviews
- Deskripsi kualitas dan fresh flower
- Checkout WhatsApp
- Responsive untuk desktop dan mobile
- **SEO lengkap** (meta, Open Graph, Twitter Card, JSON-LD, robots.txt, sitemap.xml, favicon)
- **Open Graph (og:image)** — thumbnail otomatis muncul saat link di-share ke WhatsApp, Instagram, Facebook, Twitter, dll.

## File di repo ini

| File | Keterangan |
|------|------------|
| `index.html` | Halaman utama + meta SEO + JSON-LD structured data |
| `style.css` | Stylesheet |
| `script.js` | Logika keranjang & checkout |
| `og-image.png` | Thumbnail share (1200×630) |
| `robots.txt` | Instruksi untuk search engine crawler |
| `sitemap.xml` | Daftar URL untuk Google & Bing |
| `site.webmanifest` | PWA / Add to Home Screen |
| `favicon.ico` + `favicon-*.png` | Icon browser & tab |
| `apple-touch-icon.png` | Icon iOS |
| `android-chrome-*.png` | Icon Android |

---

## Cara Deploy ke GitHub Pages

1. Upload **semua file** di folder ini ke repository GitHub `nikeishabelva/bloomie` (branch `main`).
2. Buka **Settings → Pages**.
3. Source: Deploy from a branch → Branch `main` → folder `/ (root)` → Save.
4. Tunggu 1–2 menit, lalu buka: https://nikeishabelva.github.io/bloomie/

---

## WhatsApp Checkout

Link checkout masih menggunakan `wa.me` umum.  
Ganti URL pada fungsi `checkout()` di `script.js` dengan nomor WhatsApp toko, contoh:

```js
window.open("https://wa.me/6281234567890?text=" + encodeURIComponent(...), "_blank");
```

---

## Panduan SEO Lengkap (Step-by-Step)

Setelah deploy ulang, ikuti langkah-langkah di bawah ini.

### 1. Verifikasi Google Search Console

1. Buka: https://search.google.com/search-console
2. Klik **Add property** → pilih **URL prefix** → masukkan:
   ```
   https://nikeishabelva.github.io/bloomie/
   ```
3. Pilih metode verifikasi **HTML tag** (atau DNS jika punya domain custom).
4. Google akan memberikan meta tag seperti:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXX" />
   ```
5. Copy tag tersebut, tempel di dalam `<head>` di `index.html` (setelah meta description), commit & push ulang.
6. Kembali ke Search Console → klik **Verify**.

### 2. Submit Sitemap

1. Di Google Search Console → menu kiri **Sitemaps**.
2. Masukkan: `sitemap.xml`
3. Klik **Submit**.
4. Status akan berubah menjadi “Success” dalam beberapa jam/hari.

### 3. Bing Webmaster Tools (opsional tapi bagus)

1. Buka: https://www.bing.com/webmasters
2. Login dengan akun Microsoft.
3. Add site → masukkan URL yang sama.
4. Verifikasi (bisa pakai meta tag atau impor dari Google).
5. Submit sitemap: `https://nikeishabelva.github.io/bloomie/sitemap.xml`

### 4. Cek Open Graph / Thumbnail Share

Setelah deploy, cek preview di:

| Platform | Link Tool |
|----------|-----------|
| Facebook / WhatsApp / Instagram | https://developers.facebook.com/tools/debug/ |
| Twitter / X | https://cards-dev.twitter.com/validator |
| LinkedIn | https://www.linkedin.com/post-inspector/ |
| Umum (semua) | https://www.opengraph.xyz/ |
| Google Rich Results | https://search.google.com/test/rich-results |

**Cara pakai Facebook Debugger:**
1. Paste URL: `https://nikeishabelva.github.io/bloomie/`
2. Klik **Debug** / **Scrape Again**.
3. Pastikan gambar `og-image.png` muncul dengan benar.

> Catatan: Cache sosial media bisa butuh beberapa menit–jam. Selalu pakai “Scrape Again”.

### 5. Google Analytics / Search Console Insights (opsional)

- **Google Analytics 4**: https://analytics.google.com → buat property baru → ambil Measurement ID (`G-XXXXXXXX`) → pasang gtag di `index.html` jika mau tracking pengunjung.
- Nanti data pencarian akan muncul di Search Console setelah Google mulai meng-crawl (bisa 1–14 hari).

### 6. Tips SEO Lanjutan (opsional)

- **Domain custom** (misalnya bloomie.id): beli domain → Settings → Pages → Custom domain → ikuti instruksi DNS.
- Update `lastmod` di `sitemap.xml` setiap kali ada perubahan besar.
- Tambah nomor WhatsApp asli di `script.js`.
- Kalau nanti punya alamat fisik / kota, isi field `address` di JSON-LD di `index.html`.
- Buat konten blog / halaman produk terpisah jika ingin ranking lebih kuat untuk keyword spesifik.

---

## Checklist Setelah Deploy

- [ ] Semua file (termasuk robots.txt, sitemap.xml, favicon) sudah ter-upload
- [ ] Site live di https://nikeishabelva.github.io/bloomie/
- [ ] Favicon muncul di tab browser
- [ ] Google Search Console sudah diverifikasi
- [ ] Sitemap sudah di-submit
- [ ] Facebook Debugger menampilkan thumbnail dengan benar
- [ ] Nomor WhatsApp sudah diganti di `script.js`

---

## About

web bunga · dibuat dengan ♡
