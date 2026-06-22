# Framwork-Django

Kumpulan beberapa proyek Django sederhana oleh Zennn01.

Repository ini berisi beberapa sub-proyek Django yang disimpan di direktori berikut:

- project1/
- project2/
- project4/
- Project3/
- Project5/

Catatan: Beberapa nama folder menggunakan kombinasi huruf besar/kecil (mis. `Project3`, `Project5`). Perhatikan kapitalisasi saat menjalankan perintah di shell karena filesystem bisa case-sensitive.

## Ringkasan tiap proyek

Saya belum menemukan dokumentasi internal di masing-masing folder. README ini memberikan panduan umum untuk menjalankan proyek Django yang ada. Jika Anda ingin, saya bisa membuka setiap folder (`project1`, `project2`, `project4`, `Project3`, `Project5`) dan menambahkan dokumentasi terperinci (daftar app, dependensi, environment variables, dsb.).

- project1/
  - Deskripsi: Proyek Django dasar — kemungkinan berisi struktur aplikasi standar (manage.py, settings, apps).
  - Jalankan: lihat panduan "Menjalankan proyek" di bawah.

- project2/
  - Deskripsi: Proyek Django lain untuk latihan atau demo.
  - Jalankan: lihat panduan "Menjalankan proyek" di bawah.

- project4/
  - Deskripsi: Proyek tambahan; tujuan spesifik belum terdokumentasi.
  - Jalankan: lihat panduan "Menjalankan proyek" di bawah.

- Project3/
  - Deskripsi: Proyek Django (folder diawali huruf besar). Struktur & tujuan belum terdokumentasi.
  - Jalankan: lihat panduan "Menjalankan proyek" di bawah.

- Project5/
  - Deskripsi: Proyek Django (folder diawali huruf besar). Struktur & tujuan belum terdokumentasi.
  - Jalankan: lihat panduan "Menjalankan proyek" di bawah.

## Menjalankan proyek (panduan umum)

Langkah-langkah berikut bersifat generik untuk proyek Django. Ganti `<proyek>` dengan nama folder proyek (mis. `project1`).

1. Clone repository dan masuk ke folder:

   git clone https://github.com/Zennn01/Framwork-Django.git
   cd Framwork-Django

2. Buat virtual environment dan aktifkan:

   - Linux / macOS:
     python -m venv .venv
     source .venv/bin/activate

   - Windows (PowerShell):
     python -m venv .venv
     .\.venv\Scripts\Activate.ps1

3. Install dependensi:

   - Jika ada file `requirements.txt` di dalam folder proyek:
     pip install -r <proyek>/requirements.txt

   - Jika tidak ada, minimal pasang Django:
     pip install django

4. Cek bahwa ada file `manage.py` di dalam folder proyek. Jika tidak ada, cari folder yang berisi `manage.py` lalu jalankan perintah pada path tersebut.

5. Migrasi database:

   python <proyek>/manage.py migrate

6. (Opsional) Buat superuser admin:

   python <proyek>/manage.py createsuperuser

7. Jalankan development server:

   python <proyek>/manage.py runserver

Server akan tersedia di http://127.0.0.1:8000/ secara default.

Contoh menjalankan project1:

   python project1/manage.py migrate
   python project1/manage.py runserver

## Menangani database lain dan environment variables

- Jika proyek menggunakan PostgreSQL, MySQL, atau database lain, periksa `settings.py` untuk pengaturan DATABASES. Pastikan paket driver (mis. `psycopg2-binary`) terpasang dan variabel environment seperti DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT telah diset.
- Gunakan file `.env` atau sistem manajemen environment (mis. django-environ) jika proyek mengharuskan variabel rahasia.

## Debugging umum

- ImportError / ModuleNotFoundError: jalankan `pip install -r requirements.txt` pada folder proyek, atau pasang modul yang hilang.
- manage.py tidak ditemukan: cari folder yang berisi `manage.py` dan gunakan path itu ketika menjalankan perintah.
- Error migrasi: coba `python <proyek>/manage.py makemigrations` lalu `migrate`.

## Menambahkan dokumentasi per-proyek (opsional)

Saya dapat membuka tiap folder dan membaca file penting (`manage.py`, `<proyek>/settings.py`, `requirements.txt`, `urls.py`) lalu memperbarui README ini dengan informasi terperinci seperti:

- Versi Django dan dependensi lain
- Daftar aplikasi (INSTALLED_APPS)
- Variabel environment yang diperlukan
- Contoh data atau seed
- Rute (URLs) penting dan screenshot halaman (jika ada)

Jika Anda setuju, beri tahu apakah saya boleh memeriksa semua folder atau hanya proyek tertentu (sebutkan nama proyek). Saya akan memperbarui README dengan info yang lebih lengkap.

## Kontribusi

Silakan buka issue atau kirim pull request. Jika mengirim PR, sertakan deskripsi perubahan dan langkah untuk menguji fitur tersebut.

## Lisensi

Belum ada file LICENSE di repo. Jika ingin menambahkan lisensi (MIT, Apache-2.0, dsb.), beri tahu saya dan saya bisa menambahkan file LICENSE.

---

_Dibuat otomatis oleh asisten berdasarkan struktur repo. Untuk dokumentasi yang lebih rinci per-proyek, saya akan memeriksa setiap folder jika Anda beri izin._
