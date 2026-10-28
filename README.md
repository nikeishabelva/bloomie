# Bloomie — Bouquet & Fresh Flower Shop

Website toko bouquet dengan warna dasar **putih, pink, dan butter yellow**, responsive dan siap di-upload ke GitHub Pages.

**Live:** https://nikeishabelva.github.io/bloomie/

---

## Fitur

- Bouquet & fresh flower collection
- Pilihan warna wrapping bouquet
- Keranjang belanja + Checkout WhatsApp
- Customer reviews
- **SEO lengkap** (meta, Open Graph, Twitter Card, JSON-LD, robots.txt, sitemap.xml, favicon)
- **3 Artikel SEO** siap ranking:
  1. 10 Jenis Bunga Terpopuler untuk Buket + Maknanya
  2. Ide Buket Bunga untuk Hadiah Wisuda
  3. Cara Merawat Bouquet agar Tahan Lama

## Struktur File

```
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── og-image.png
├── favicon.ico + favicon-*.png
├── apple-touch-icon.png
├── android-chrome-*.png
└── artikel/
    ├── jenis-bunga-buket.html
    ├── buket-wisuda.html
    └── cara-merawat-bouquet.html
```

## Cara Deploy

1. Upload **semua isi folder** ini ke repo `nikeishabelva/bloomie` (branch `main`).
2. Settings → Pages → Source: branch `main` / root.
3. Tunggu 1–2 menit → cek https://nikeishabelva.github.io/bloomie/

## Setelah Deploy (SEO)

1. Google Search Console sudah diverifikasi? Submit ulang sitemap: `sitemap.xml`
2. Cek artikel di Facebook Debugger / opengraph.xyz
3. Ganti nomor WhatsApp di `script.js` (fungsi `checkout()`)

## Artikel yang Ditambahkan

| Judul | URL | Fokus Keyword |
|-------|-----|---------------|
| 10 Jenis Bunga Terpopuler untuk Buket + Maknanya | /artikel/jenis-bunga-buket.html | jenis bunga buket, makna bunga |
| Ide Buket Bunga untuk Hadiah Wisuda | /artikel/buket-wisuda.html | buket wisuda, hadiah wisuda |
| Cara Merawat Bouquet agar Tahan Lama | /artikel/cara-merawat-bouquet.html | cara merawat bunga, agar bunga awet |

---

web bunga · dibuat dengan ♡
