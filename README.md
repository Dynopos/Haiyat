# Haiyat Global Group: Laman Web Rasmi

Laman web statik (HTML, CSS, JS tanpa build) bertema **Cinematic Luxury**: navy, gold dan putih.
Fokus kepada dua servis utama:

1. **Bina & Jual Rumah**: 46 lot dalam perancangan (Padang Siam 6, Jelatok 15, Manal 1, Kubang Gali 12, Machang 12).
2. **Bina Rumah Atas Tanah Sendiri**: 3 pakej (Bronze, Silver, Gold).

## Struktur fail

```
index.html      Laman utama (SEO, Open Graph, data berstruktur JSON-LD)
404.html        Halaman ralat
css/style.css   Gaya & reka bentuk responsif (telefon ≤620px, tablet ≤960px, desktop)
js/main.js      WhatsApp CTA, menu mudah alih, animasi skrol, kiraan nombor, lightbox galeri
assets/         Semua 7 gambar asal (tidak diubah)
favicon.svg     Ikon laman
robots.txt      Benarkan enjin carian
netlify.toml    Tetapan Netlify (header keselamatan & cache)
.nojekyll       Untuk GitHub Pages
```

## Tukar nombor WhatsApp

Buka `js/main.js`, ubah baris:

```js
const WHATSAPP_NUMBER = '60132510181';
```

Format: `601XXXXXXXX` tanpa `+`, sengkang atau ruang. Nombor yang dipaparkan dalam teks
(`013-251 0181`) dan `telephone` dalam JSON-LD di `index.html` juga perlu dikemas kini jika nombor bertukar.

## Deploy ke Netlify

**Cara paling mudah (drag & drop):**
1. Log masuk ke https://app.netlify.com
2. *Add new site → Deploy manually*
3. Seret seluruh folder projek (yang mengandungi `index.html`) ke kotak upload.

**Melalui GitHub:**
1. *Add new site → Import an existing project → GitHub* dan pilih repo ini.
2. Build command: *(kosongkan)*. Publish directory: `.`
3. Klik *Deploy*. Tetapan diambil daripada `netlify.toml`.

## Deploy ke GitHub Pages

1. Repo → *Settings → Pages*.
2. *Source: Deploy from a branch*. Pilih branch (contoh `main`) dan folder `/ (root)`.
3. Simpan. Laman akan tersedia di `https://<username>.github.io/<nama-repo>/` dalam beberapa minit.

Semua laluan adalah relatif, jadi laman berfungsi sama ada di domain sendiri atau sub-folder GitHub Pages.

## Selepas domain disahkan (SEO)

Tambah dalam `<head>` `index.html` (ganti `https://domain-anda.com`):

```html
<link rel="canonical" href="https://domain-anda.com/">
<meta property="og:url" content="https://domain-anda.com/">
```

Tukar `og:image` kepada URL penuh: `https://domain-anda.com/assets/hero.jpg`.

Kemudian cipta `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://domain-anda.com/</loc></url>
</urlset>
```

Tambah baris `Sitemap: https://domain-anda.com/sitemap.xml` dalam `robots.txt`, dan hantar ke Google Search Console.

## Senarai semak sebelum go-live

- [ ] Kadar pakej (RM165 / RM175 / melebihi RM195 per kaki²) dan spesifikasi disahkan semula dengan dokumen Jun 2026.
- [ ] Alamat PT 4724, Bandar Baru, Taman Kota Harmoni, 17500 Tanah Merah disahkan.
- [ ] Bilangan lot setiap lokasi disahkan. Semua lot dilabel **perancangan**, bukan projek siap atau telah diluluskan.
- [ ] `completed.jpg` kekal dilabel sebagai **visual konsep / ilustrasi**, bukan foto rumah siap.
- [ ] Kebenaran penggunaan semua foto projek telah diperoleh.
- [ ] Pautan Facebook dan nombor WhatsApp diuji di telefon.

Tiada harga, spesifikasi, testimoni atau status kelulusan tambahan dicipta. Semua kandungan berdasarkan fail asal yang dibekalkan.
