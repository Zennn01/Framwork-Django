# Tikety - Hotel & Travel Booking Prototype

Tikety adalah sebuah prototipe aplikasi web pemesanan penginapan dan transportasi yang dibangun menggunakan arsitektur web modern dengan balutan _backend_ Django. Proyek ini memisahkan entitas data secara rapi ke dalam tabel database independen untuk memastikan skema yang efisien saat manajemen data via Admin Panel.

## 🚀 Fitur yang Sudah Aktif (Implemented)

### 1. Arsitektur Multi-Model Dinamis (Backend)
- Pemisahan 5 tabel Database murni secara independen: **Hotel**, **Villa**, **Camping**, **Travel**, dan **Sewa Mobil**.
- Semua kategori mewarisi _Abstract Base Class_ (`Accommodation` & `Transportation`) agar atribut data terjaga konsistensinya.
- *Routing* (*URL Dispatcher*) pintar: 1 _views_ yang menyesuaikan konten berdasarkan kategori secara _on-the-fly_.
- Integrasi super rapi ke dalam **Django Admin Panel** (Setiap entitas bisa di-CRUD terpisah).

### 2. Frontend Modern & Interaktif
- Implementasi _slider interaktif_ pada Homepage.
- **Filter Tab Otomatis (Javascript):** Anda bisa menyaring slider "Hotel Populer" atau memisahkan "Travel vs Sewa Mobil" langsung dari beranda dan halaman katalog tanpa harus me-_reload_ website.
- **Kartu Gambar Fallback Pintar:** Jika Admin lupa mengunggah gambar saat menambahkan entri baru, kode siap memberikan _fallback image_ (gambar otomatis) sesuai kategorinya (Tenda untuk Camping, Rumah untuk Villa, dsb).

### 3. Otentikasi Pengguna Moduler
- Fitur Sign-Up (Daftar)
- Fitur Sign-In (Masuk)
- Fitur Logout (Keluar)
- Notifikasi _Flash Messages_ (Pesan Sesaat) ketika berhasil mendaftar.

### 4. Halaman Standalone
- **Beranda (Homepage):** Berisi Slider Hotel/Villa/Camping dan slider Travel/Mobil.
- **Halaman Katalog (`/hotels/` & `/travel/`):** Tampilan daftar penuh (_grid/list format_).
- **Halaman Detail Dinamis:** Menampilkan informasi fasilitas rinci, galeri, total harga, dsb menyesuaikan basis datanya.

---

## 🚧 Fitur yang Belum Aktif / Kosmetik Saja (To-Do / Future)

Di bawah ini adalah fitur yang tampilannya (_UI_) sudah ada, namun belum memiliki struktur logika Database maupun fungsionalitas di _Backend_:

1. **Sistem Pencarian (Search Engine):**
   - Kolom pencarian di _Hero Section_ Homepage (pilih lokasi, kapan menginap, jumlah tamu) saat ini belum melakukan _query filter_ ke dalam pangkalan data.

2. **Proses Pemesanan & Pembayaran (Checkout/Cart):**
   - Tombol "Pesan Sekarang" dan modul ringkasan pembayaran di sebelah kanan halaman `detail.html` masih prototipe statis. Belum ada model penghitungan pajak atau _Order Database_.

3. **Ulasan (Review System):**
   - Bagian komentar dan bintang dari pengguna di bawah properti (_detail page_) masih berupa teks HTML statik pendemonstrasi desain. Belum ada Model Tabel _Reviews_ riil.

4. **Profil & Dashboard Pengguna:**
   - Setelah pengguna masuk (Login), _website_ belum memiliki halaman modifikasi profil khusus atau pencatatan riwayat tiket pesanan/struk (_Dashboard_).
   
5. **Filter Harga Dinamis di Halaman List:**
   - Halaman seperti `/travel/` memiliki sidebar filter, namun belum terhubung ke sistem _query_ backend `views.py`.

## Menjalankan Proyek Lokal

```bash
# Nyalakan Virtual Environment 
source .venv/bin/activate

# Jalankan server
python manage.py runserver
```

1. **Website Halaman Tampilan**: `http://127.0.0.1:8000/`
2. **Halaman Admin Data**: `http://127.0.0.1:8000/admin/` (Username: `admin`, Password: `admin`)
