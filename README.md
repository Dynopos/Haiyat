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

- **Cache pelayar:** pautan CSS/JS dalam `index.html` ada nombor versi (`style.css?v=20261106-1`).
  Setiap kali `css/style.css` atau `js/main.js` diubah, naikkan nombor itu (contoh `20261107-1`)
  supaya telefon pengunjung terus memuat turun fail baharu dan tidak guna salinan lama.

## Deploy ke Netlify

**Drag & drop:** https://app.netlify.com → *Add new site → Deploy manually* → seret seluruh folder projek.

**Melalui GitHub:** *Add new site → Import an existing project → GitHub* → pilih repo.
Build command: *(kosong)*. Publish directory: `.`

## Deploy ke GitHub Pages

Repo → *Settings → Pages* → *Deploy from a branch* → pilih branch (contoh `main`) dan folder `/ (root)`.
Semua laluan adalah relatif, jadi laman berfungsi di domain sendiri atau sub-folder GitHub Pages.

### Jika deploy GitHub Pages gagal / tersangkut

Semak di https://github.com/Dynopos/Haiyat/actions (run "pages build and deployment").
Ralat "due to in progress deployment" bermakna deploy lama masih berjalan: tunggu ia selesai,
atau buka run itu → **Cancel workflow**, kemudian buka run terbaru yang gagal → **Re-run jobs → Re-run failed jobs**
(butang di penjuru kanan atas, hanya muncul selepas run selesai). Push baharu ke `main` juga akan memulakan deploy baharu.

## SEO & GEO (sudah dipasang)

**Dalam laman:**
- Tajuk & meta description berkata kunci ("Bina Rumah Atas Tanah Sendiri Kelantan"), `canonical`, `lang="ms-MY"`,
  meta geo (MY-03 Kelantan / Tanah Merah), Open Graph & Twitter Card dengan URL penuh (pratonton cantik di FB/WhatsApp).
- Data berstruktur JSON-LD (`@graph`): Organization, HomeAndConstructionBusiness/GeneralContractor (alamat, peta,
  telefon, Facebook, TikTok), dua Service, tiga Offer pakej dengan harga per kaki persegi (MYR), WebSite, WebPage, FAQPage.
- Seksyen **Soalan Lazim** (7 soalan) yang kelihatan pada laman, sepadan dengan FAQPage. Format soal-jawab inilah
  yang paling mudah dipetik oleh Google AI Overviews, ChatGPT, Perplexity dan Gemini.
- `sitemap.xml` (dengan imej), `robots.txt` (membenarkan Googlebot dan bot AI: GPTBot, OAI-SearchBot, ClaudeBot,
  PerplexityBot, Google-Extended, Applebot-Extended), dan `llms.txt` (ringkasan fakta dwibahasa khas untuk AI).
- Tarikh "Maklumat dikemas kini" di footer + `dateModified`. Kemas kini tarikh ini setiap kali kandungan berubah.

**Perlu dibuat oleh pemilik (di luar laman, paling besar kesannya):**
1. **Google Search Console:** https://search.google.com/search-console → *Add property → URL prefix* →
   `https://dynopos.github.io/Haiyat/` → pilih *HTML tag* → hantar tag itu kepada developer untuk dimasukkan.
   Selepas disahkan: *Sitemaps* → hantar `sitemap.xml`, dan *URL Inspection* → *Request indexing*.
2. **Google Business Profile** (faktor No.1 SEO tempatan / Google Maps): https://business.google.com.
   Guna nama, alamat dan telefon yang **sama tepat** seperti di laman (NAP), kategori "Kontraktor pembinaan" /
   "Pembina rumah", pautkan laman web, muat naik foto projek sebenar.
3. **Bing Webmaster Tools** (ChatGPT search menggunakan indeks Bing): https://www.bing.com/webmasters →
   import dari Google Search Console → hantar sitemap.
4. Letak pautan laman web pada bio Facebook dan TikTok (@haiyatgroup), dan di Google Business Profile.
5. Minta ulasan Google **sebenar** daripada pelanggan. Jangan cipta ulasan palsu.

**Nota GitHub Pages:** untuk laman projek (`/Haiyat/`), enjin carian membaca `robots.txt` di akar domain
(`dynopos.github.io/robots.txt`), bukan dalam folder ini; jadi sitemap mesti dihantar melalui Search Console.
Jika domain sendiri dipasang kelak, tukar semua `https://dynopos.github.io/Haiyat/` dalam `index.html`,
`sitemap.xml`, `robots.txt`, `llms.txt` dan laluan `/Haiyat/` dalam `404.html`.

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
