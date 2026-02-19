# 📁 Public Assets — Panduan

Folder ini adalah tempat file statis yang bisa diakses langsung dari URL.

---

## 📄 CV / Resume

Taruh file CV kamu di sini dengan nama:

```
public/cv-bintang-satrio.pdf
```

Tombol **"Download CV"** di sidebar dan hero section sudah terhubung ke file ini.

> **Tips:** Gunakan nama file yang sama persis. Jika ingin ganti nama, update juga  
> `data/index.ts` → `personal.cvUrl`

---

## 🖼️ Foto Profil

Taruh foto profil kamu di sini:

```
public/images/photo.jpg    ← disarankan
public/images/photo.png
public/images/photo.webp   ← paling optimal (ukuran kecil)
```

Lalu update `data/index.ts`:

```ts
photoUrl: '/images/photo.jpg',   // sesuaikan dengan nama file kamu
```

**Rekomendasi ukuran foto:**
- Minimal **200×200px**, idealnya **400×400px** atau lebih
- Rasio **1:1** (persegi) untuk hasil terbaik
- Format `.webp` untuk performa web optimal

---

## 📸 Screenshot Project

Lihat panduan lengkap di: `public/images/projects/README.md`
