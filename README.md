# ASCII Cipher Converter (Modulo 256)

Aplikasi web untuk melakukan **enkripsi dan dekripsi karakter ASCII 8-bit menggunakan operasi modulo 256**. Program ini juga menghasilkan tabel analisis karakter per karakter sehingga dapat digunakan sebagai media pembelajaran kriptografi dan penyusunan laporan akademik.

## Fitur

* Enkripsi menggunakan rumus:

```
C = (P + K) mod 256
```

* Dekripsi menggunakan rumus:

```
P = (C - K + 256) mod 256
```

* Mendukung seluruh karakter ASCII 0–255.
* Visualisasi nilai byte dalam bentuk Hexadecimal.
* Tabel analisis per karakter secara otomatis.
* Salin hasil ke clipboard.
* Salin tabel dalam format Markdown.
* Salin tabel dalam format Plaintext.
* Contoh laporan otomatis (K = 21).

## Teknologi yang Digunakan

* HTML5
* CSS3
* JavaScript
* Tailwind CSS
* Font Awesome

## Struktur Proyek

```
Chiper-Plain/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Cara Menjalankan

1. Clone repository:

```bash
git clone https://github.com/marchellmanurung-ctrl/Chiper-Plain.git
```

2. Masuk ke folder proyek:

```bash
cd Chiper-Plain
```

3. Buka file:

```
index.html
```

atau jalankan melalui GitHub Pages:

```
https://marchellmanurung-ctrl.github.io/Chiper-Plain/
```

## Tampilan Aplikasi

Aplikasi menyediakan:

* Mode Enkripsi
* Mode Dekripsi
* Pengaturan kunci (0–255)
* Visualisasi byte (Hex)
* Tabel analisis cipher
* Ekspor tabel ke Markdown dan Plaintext

## Penulis

Marchell Gabriel Manurung

Program Studi Pendidikan Teknologi Informasi dan Komputer (PTIK)

Universitas Negeri Medan
