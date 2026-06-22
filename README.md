# Framwork-Django

Satu README tunggal yang mencakup semua sub-proyek Django di repository ini.

Repository: https://github.com/Zennn01/Framwork-Django
Bahasa utama: Python (Django), beberapa file HTML.

Struktur umum repository
- project1/
- project2/
- project4/
- Project3/
- Project5/
- .gitignore

Catatan: Beberapa folder menggunakan huruf besar pada nama (`Project3`, `Project5`). Perhatikan kapitalisasi pada sistem file case-sensitive.

Tujuan
- Menyediakan panduan tunggal untuk menjalankan dan memahami semua proyek Django yang ada di repository ini.
- Memberi petunjuk umum untuk setup, debugging, dan kontribusi.

Ringkasan singkat tiap proyek
> Keterangan di bawah ini bersifat umum karena sebagian folder belum memiliki dokumentasi internal. Jika Anda menginginkan README per‑proyek yang lebih rinci, saya dapat memeriksa isi folder dan menambahkannya.

- project1/
  - Status: Proyek Django dasar. Cari `manage.py` di dalam folder untuk menjalankan.
  - Kegunaan: Contoh struktur aplikasi Django / latihan.

- project2/
  - Status: Proyek Django lain untuk latihan atau demo. Periksa file `requirements.txt` jika ada.

- project4/
  - Status: Proyek tambahan; tujuan belum terdokumentasi.

- Project3/
  - Status: Proyek Django; folder diawali huruf besar. Struktur & tujuan belum terdokumentasi.

- Project5/
  - Status: Proyek Django; folder diawali huruf besar. Struktur & tujuan belum terdokumentasi.

Prasyarat
- Python 3.8+ (disarankan 3.10+)
- pip
- Virtual environment tool (venv/virtualenv)
- Jika proyek menggunakan database lain: PostgreSQL / MySQL + driver (mis. psycopg2-binary)

Panduan setup umum (satu proyek)
Ganti <proyek> dengan nama folder (mis. `project1`).

1. Clone repository

   git clone https://github.com/Zennn01/Framwork-Django.git
   cd Framwork-Django

2. Buat dan aktifkan virtual environment

   - Linux/macOS
     python -m venv .venv
     source .venv/bin/activate

   - Windows (PowerShell)
     python -m venv .venv
     .\.venv\Scripts\Activate.ps1

3. Install dependensi

   - Jika ada file `<proyek>/requirements.txt`, jalankan:
     pip install -r <proyek>/requirements.txt

   - Jika tidak ada, minimal install Django:
     pip install django

4. Temukan `manage.py`

   - Pastikan file `manage.py` ada di dalam folder proyek (`<proyek>/manage.py`).
   - Jika tidak ada, telusuri subfolder untuk menemukan `manage.py`, misal `ls -R <proyek> | grep manage.py` atau gunakan pencarian di editor.

5. Migrate database

   python <proyek>/manage.py makemigrations
   python <proyek>/manage.py migrate

6. (Opsional) Buat superuser admin

   python <proyek>/manage.py createsuperuser

7. Jalankan server

   python <proyek>/manage.py runserver

   Akses: http://127.0.0.1:8000/

Contoh (project1):

   python project1/manage.py migrate
   python project1/manage.py runserver

Menjalankan jika ada setting environment
- Beberapa proyek mungkin menggunakan environment variables (SECRET_KEY, DATABASE_URL, dsb.). Periksa `settings.py` di tiap proyek.
- Gunakan file `.env` dan paket seperti `python-dotenv` atau `django-environ` jika projek mengharuskan.

Database non-SQLite
- Jika settings menggunakan PostgreSQL/MySQL, pasang driver:
  - PostgreSQL: pip install psycopg2-binary
  - MySQL: pip install mysqlclient
- Set environment variables sesuai konfigurasi DATABASES di `settings.py`.

Static files
- Untuk development, Django biasanya melayani static secara otomatis.
- Untuk deployment, jalankan `collectstatic` dan atur web server (nginx, dsb.).

Debugging umum
- ModuleNotFoundError: jalankan `pip install -r requirements.txt` atau pasang modul yang hilang.
- Error migrasi: jalankan `makemigrations` lalu `migrate`, baca traceback untuk menemukan masalah.
- Jika `manage.py` tidak ada: cari folder yang mengandung `manage.py` dan jalankan perintah dari folder tersebut.
- Jika port sudah dipakai: `python manage.py runserver 0.0.0.0:8001` atau ganti port lain.

Cara menambahkan dokumentasi per-proyek (opsional)
Jika Anda ingin README lebih rinci untuk tiap proyek, saya akan:
1. Membuka folder proyek (project1, project2, project4, Project3, Project5).
2. Membaca file utama: `manage.py`, `<proyek>/settings.py`, `requirements.txt`, `urls.py`.
3. Mengumpulkan informasi: versi Django, daftar INSTALLED_APPS, dependensi, env vars, endpoint penting.
4. Menambahkan bagian di README utama atau membuat file README di masing‑masing folder.

Silakan pilih salah satu opsi:
- Periksa semua folder dan tambahkan dokumentasi mendetail untuk tiap proyek.
- Periksa dan dokumentasikan hanya proyek tertentu (sebutkan nama proyek).
- Biarkan README ini sebagai panduan umum.

Panduan kontribusi singkat
- Fork repo / buat branch fitur
- Tambah kode & tests
- Buka Pull Request dengan deskripsi perubahan dan langkah pengujian

Lisensi
- Saat ini belum ada file LICENSE. Jika Anda memilih lisensi (mis. MIT), sebutkan dan saya akan menambahkannya.

Kontak
- Pemilik repo: Zennn01 (https://github.com/Zennn01)

Terima kasih
- README ini dibuat untuk memudahkan penggunaan dan pengembangan proyek-proyek Django di repository. Jika Anda ingin saya perinci per-proyek, beri izin dan saya akan mulai memeriksa folder satu-per-satu.
