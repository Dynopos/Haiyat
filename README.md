# Haiyat Global Group: Laman Web Rasmi (Cinematic Edition)

Laman web statik (HTML, CSS, JS tanpa build) bertema **Cinematic Luxury**: navy, gold dan putih,
tipografi editorial (Playfair Display) dan penceritaan secara babak (01–06) semasa skrol.

| Babak | Kandungan |
|---|---|
| 01 Visi | Hero skrin penuh: logo GHG, foto rumah sebenar, overlay navy, voice note lagu |
| 02 Kisah | Mengenai Haiyat, 46 lot / 5 lokasi / 3 pakej |
| 03 Lokasi | Bina & Jual Rumah: Padang Siam 6, Jelatok 15, Manal 1, Kubang Gali 12, Machang 12 (46 lot dalam perancangan) |
| 04 Pakej | Bina atas tanah sendiri: Bronze RM165/kaki², Silver RM175/kaki², Gold melebihi RM195/kaki² |
| 05 Pembinaan | Slider sinematik mendatar (leret / seret / butang / anak panah papan kekunci) + proses kerja |
| 06 Hubungi | WhatsApp 013-251 0181, emel, Facebook, TikTok, alamat |

## Struktur fail

```
index.html               Laman utama (SEO, Open Graph, JSON-LD)
404.html                 Halaman ralat
css/style.css            Gaya mobile-first (asas telefon, ≥700px tablet, ≥1024px desktop)
js/main.js               WhatsApp, menu, penunjuk babak, animasi skrol, slider, voice note
assets/*.jpg             7 foto projek asal (tidak diubah)
assets/logo-ghg.webp     Logo GHG untuk hero (PNG sebagai sandaran: logo-ghg.png)
assets/logo-ghg-128.png  Logo kecil untuk navigasi / footer
assets/audio/            Lagu voice note: .ogg (Opus) + .m4a (AAC untuk iPhone/Safari lama)
favicon.png, apple-touch-icon.png, icon-192.png
robots.txt, netlify.toml, .nojekyll
```

## Tetapan penting

- **Nombor WhatsApp:** `js/main.js` → `const WHATSAPP_NUMBER = '60132510181';`
  (Nombor dalam teks `013-251 0181` dan `telephone` dalam JSON-LD di `index.html` juga perlu dikemas kini jika bertukar.)
- **Lagu:** Pelayar tidak membenarkan audio bermain tanpa interaksi pengguna, jadi lagu bermula
  pada **sentuhan / klik pertama di mana-mana** pada halaman dan dimainkan **sekali sahaja** (tidak berulang). Pengunjung boleh
  jeda melalui pemain voice note dalam hero atau butang "Lagu Haiyat" di penjuru kiri bawah.
  Untuk tukar lagu, ganti kedua-dua fail dalam `assets/audio/` (nama sama) dan kemas kini
  `FALLBACK_DURATION` dalam `js/main.js` serta `0:50` / `max="50"` dalam `index.html`.
  Lagu semasa dipotong kepada 50 saat (fade-out 3 saat di hujung).
  Untuk matikan auto-main, buang blok `armAutoStart()` dalam `js/main.js`, Untuk jadikan lagu berulang,
  tambah atribut `loop` pada `<audio id="vn-audio">`.

## Deploy ke Netlify

**Drag & drop:** https://app.netlify.com → *Add new site → Deploy manually* → seret seluruh folder projek.

**Melalui GitHub:** *Add new site → Import an existing project → GitHub* → pilih repo.
Build command: *(kosong)*. Publish directory: `.`

## Deploy ke GitHub Pages

Repo → *Settings → Pages* → *Deploy from a branch* → pilih branch (contoh `main`) dan folder `/ (root)`.
Semua laluan adalah relatif, jadi laman berfungsi di domain sendiri atau sub-folder GitHub Pages.

## Selepas domain disahkan (SEO)

Tambah dalam `<head>` `index.html` (ganti `https://domain-anda.com`):

```html
<link rel="canonical" href="https://domain-anda.com/">
<meta property="og:url" content="https://domain-anda.com/">
```

Tukar `og:image` dan `logo` (JSON-LD) kepada URL penuh, cipta `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://domain-anda.com/</loc></url>
</urlset>
```

Tambah `Sitemap: https://domain-anda.com/sitemap.xml` dalam `robots.txt`, dan hantar ke Google Search Console.

## Senarai semak sebelum go-live

- [ ] **Emel:** laman guna `haiyatgroup8@gmail.com` (diberi terus oleh pemilik). Fail V2 menyebut
      `haiyatglobalgroup8@gmail.com`. Sahkan yang mana betul.
- [ ] Kadar pakej (RM165 / RM175 / melebihi RM195 per kaki²) dan spesifikasi disahkan dengan dokumen Jun 2026.
- [ ] Alamat Tanah Merah, alamat pejabat berdaftar KL dan No. syarikat (1414816-W) disahkan.
- [ ] Bilangan lot setiap lokasi disahkan. Semua lot dilabel **perancangan**, bukan projek siap atau telah diluluskan.
- [ ] `completed.jpg` kekal dilabel **visual konsep / ilustrasi**.
- [ ] Kebenaran penggunaan foto projek, logo dan lagu telah diperoleh.
- [ ] Pautan Facebook, TikTok (@haiyatgroup), emel dan WhatsApp diuji di telefon.

Tiada harga, spesifikasi, testimoni atau status kelulusan tambahan dicipta. Semua kandungan berdasarkan fail yang dibekalkan.
