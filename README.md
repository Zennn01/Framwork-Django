# 🚀 Framwork-Django - Comprehensive Django Projects Repository

**Repository:** https://github.com/Zennn01/Framwork-Django  
**Languages:** Python (Django), HTML, CSS, JavaScript  
**Bahasa Utama:** Indonesian

---

## 📋 Daftar Isi
1. [Overview](#overview)
2. [Prasyarat Sistem](#prasyarat-sistem)
3. [Clone Repository](#clone-repository)
4. [Panduan Per-Project](#panduan-per-project)
5. [Perintah Umum Django](#perintah-umum-django)
6. [Troubleshooting](#troubleshooting)

---

## Overview

Repository ini berisi **6 proyek Django** dengan berbagai tingkat kompleksitas:

| Project | Deskripsi | Status | Fitur Utama |
|---------|-----------|--------|------------|
| **project1** | Aplikasi Django dasar | ✅ Basic | Pages, Django Project Setup |
| **project2** | Contoh proyek kedua | ✅ Basic | Pages, Django Project Setup |
| **project4** | Aplikasi perusahaan | ✅ Enhanced | Templates, Static Files, Pages |
| **Project3** | Aplikasi personal | ✅ Basic | Pages, Personal Config |
| **Project5** | Aplikasi posting utama | ✨ Enhanced UI | Frontend, Posts Management, Templates, Admin Panel |
| **FinalProject** | Aplikasi produksi final | 🎯 Production | Complete CRUD, Static Files, Seed Scripts, API-Ready |

---

## Prasyarat Sistem

Sebelum memulai, pastikan Anda telah menginstal:

```bash
# Persyaratan wajib:
- Python 3.8+ (recommended 3.10 atau lebih baru)
- pip (Python package manager)
- git
- venv atau virtualenv
- SQLite3 (default untuk semua projects)

# Optional (jika menggunakan database lain):
- PostgreSQL + psycopg2-binary
- MySQL + mysqlclient
```

### Cek Versi Python
```bash
python --version
# atau
python3 --version
```

---

## Clone Repository

```bash
# Clone ke local
git clone https://github.com/Zennn01/Framwork-Django.git
cd Framwork-Django

# Lihat struktur
ls -la
```

**Output yang diharapkan:**
```
.gitignore
project1/
project2/
project4/
Project3/
Project5/
FinalProject/
README.md
```

---

## Panduan Per-Project

### ⚡ Quick Setup untuk Satu Project (Template)

Ganti `<project>` dengan nama folder proyek yang ingin dijalankan:

```bash
# 1. Buat virtual environment
python -m venv .venv

# 2. Aktifkan virtual environment
# Linux/macOS:
source .venv/bin/activate
# Windows (PowerShell):
.\.venv\Scripts\Activate.ps1
# Windows (CMD):
.venv\Scripts\activate.bat

# 3. Install dependencies
pip install django

# 4. Pindah ke folder proyek
cd <project>

# 5. Setup database
python manage.py makemigrations
python manage.py migrate

# 6. (Opsional) Buat superuser
python manage.py createsuperuser

# 7. Jalankan server
python manage.py runserver

# 8. Akses di browser
# http://127.0.0.1:8000/
# Admin: http://127.0.0.1:8000/admin/
```

---

### 📌 Project 1 - Django Dasar

**Lokasi:** `project1/`  
**Deskripsi:** Aplikasi Django pertama untuk pembelajaran dasar struktur Django.

**Struktur:**
```
project1/
├── manage.py              # Entry point
├── django_project/        # Konfigurasi project
└── pages/                 # Aplikasi pages
```

**Setup & Run:**
```bash
cd project1
python manage.py migrate
python manage.py runserver
# Akses: http://127.0.0.1:8000/
```

**Update Terbaru:** Struktur dasar Django, template pages.

---

### 📌 Project 2 - Django Kedua

**Lokasi:** `project2/`  
**Deskripsi:** Proyek Django kedua dengan setup serupa project1.

**Struktur:**
```
project2/
├── manage.py
├── django_project/
└── pages/
```

**Setup & Run:**
```bash
cd project2
python manage.py migrate
python manage.py runserver
```

**Update Terbaru:** Konfigurasi Django standard.

---

### 📌 Project 4 - Aplikasi Perusahaan

**Lokasi:** `project4/`  
**Deskripsi:** Aplikasi dengan fokus pada manajemen perusahaan dengan UI yang lebih baik.

**Struktur:**
```
project4/
├── manage.py
├── company/               # Aplikasi company
├── pages/
└── templates/             # Template HTML (✨ BARU)
    └── Base template & company pages
```

**Setup & Run:**
```bash
cd project4
python manage.py migrate
python manage.py runserver
# Dengan templates: http://127.0.0.1:8000/
```

**Update Terbaru:**
- ✨ Ditambahkan `templates/` folder untuk UI yang lebih baik
- ✅ HTML templates untuk pages
- ✅ Static files support

---

### 📌 Project 3 - Aplikasi Personal

**Lokasi:** `Project3/`  
**Deskripsi:** Aplikasi personal dengan konfigurasi khusus.

**Struktur:**
```
Project3/
├── manage.py
├── pages/
└── personal/              # Config personal
```

**Setup & Run:**
```bash
cd Project3
python manage.py migrate
python manage.py runserver
```

**Update Terbaru:** Setup personal Django dengan custom configuration.

---

### 📌 Project 5 - Aplikasi Posting (Enhanced)

**Lokasi:** `Project5/`  
**Deskripsi:** Aplikasi posting utama dengan UI enhancement dan frontend yang diperbaharui.

**Struktur:**
```
Project5/
├── manage.py
├── posts/                 # Aplikasi posts (CRUD)
├── project/               # Konfigurasi utama
├── templates/             # Templates (✨ FULLY UPDATED)
│   ├── base.html
│   ├── posts/
│   │   ├── post_list.html
│   │   ├── post_detail.html
│   │   ├── post_form.html
│   │   └── post_confirm_delete.html
│   └── ...
└── frontend/              # Frontend assets (✨ BARU)
    ├── css/
    ├── js/
    └── assets/
```

**Update Terbaru (Semua di Update):**
- 🎨 **UI Baru:** Template frontend yang lebih modern
- ✨ **Frontend Assets:** CSS dan JavaScript files
- 📱 **Responsive Design:** Mobile-friendly templates
- 🔐 **Admin Panel:** Django admin interface
- 📝 **CRUD Operations:** Create, Read, Update, Delete posts
- 🎯 **Form Validation:** Input validation dan error handling

**Setup & Run:**
```bash
cd Project5

# 1. Create virtual environment
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# atau
.\.venv\Scripts\activate.bat  # Windows

# 2. Install dependencies
pip install django

# 3. Setup database
python manage.py makemigrations
python manage.py migrate

# 4. Create superuser (untuk admin)
python manage.py createsuperuser
# Username: admin
# Password: (pilih password)

# 5. Run server
python manage.py runserver

# 6. Akses aplikasi
# Main app:  http://127.0.0.1:8000/
# Admin:     http://127.0.0.1:8000/admin/
# Posts:     http://127.0.0.1:8000/posts/
```

**Testing CRUD:**
```bash
# Buat post baru via admin
# http://127.0.0.1:8000/admin/posts/post/add/

# Atau via form (jika tersedia)
# http://127.0.0.1:8000/posts/create/

# Lihat semua posts
# http://127.0.0.1:8000/posts/

# Edit/Hapus post
# http://127.0.0.1:8000/posts/<id>/edit/
# http://127.0.0.1:8000/posts/<id>/delete/
```

---

### 📌 FinalProject - Aplikasi Production Ready

**Lokasi:** `FinalProject/`  
**Deskripsi:** Proyek final dengan fitur lengkap, seed data, dan struktur production-ready.

**Struktur:**
```
FinalProject/
├── manage.py
├── posts/                 # Aplikasi posts (CRUD lengkap)
├── project/               # Konfigurasi project
├── templates/             # Templates lengkap
│   ├── base.html
│   ├── posts/
│   │   ├── post_list.html
│   │   ├── post_detail.html
│   │   ├── post_form.html
│   │   └── post_confirm_delete.html
│   └── ...
├── static/                # Static files
│   ├── css/
│   ├── js/
│   └── images/
├── AGENTS.md              # Documentation guidelines
├── seed.py                # ✨ Seed script untuk posts
└── seed_travel.py         # ✨ Seed script untuk travel data
```

**Update Terbaru (Semua Fitur):**
- 🎯 **Production Ready:** Fully configured settings
- 📊 **Complete CRUD:** Full Create, Read, Update, Delete functionality
- 🗄️ **Database:** SQLite with migrations
- 🎨 **UI/UX:** Professional templates dan static files
- 🌱 **Seed Scripts:** Automatic data population
- 📖 **Documentation:** AGENTS.md with guidelines
- 🔐 **Admin Interface:** Django admin fully configured
- 📱 **Responsive:** Mobile-friendly design

**Setup & Run:**
```bash
cd FinalProject

# 1. Create virtual environment
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# atau
.\.venv\Scripts\activate.bat  # Windows

# 2. Install dependencies
pip install django

# 3. Setup database
python manage.py makemigrations
python manage.py migrate

# 4. (Opsional) Seed data
python seed.py        # Seed posts
python seed_travel.py # Seed travel data

# 5. Create superuser
python manage.py createsuperuser

# 6. Run server
python manage.py runserver

# 7. Akses aplikasi
# Main app:  http://127.0.0.1:8000/
# Admin:     http://127.0.0.1:8000/admin/
# Posts:     http://127.0.0.1:8000/posts/
```

**Fitur CRUD Lengkap:**
```bash
# Lihat semua posts
GET /posts/

# Lihat detail post
GET /posts/<id>/

# Buat post baru
POST /posts/create/

# Edit post
PUT /posts/<id>/edit/

# Hapus post
DELETE /posts/<id>/delete/
```

---

## Perintah Umum Django

Setelah masuk ke folder project dan virtual environment diaktifkan:

```bash
# ==================== Setup ====================
# Buat migrations setelah mengubah models
python manage.py makemigrations

# Apply migrations ke database
python manage.py migrate

# Buat superuser untuk admin
python manage.py createsuperuser

# ==================== Development ====================
# Jalankan development server
python manage.py runserver

# Jalankan di port khusus
python manage.py runserver 0.0.0.0:8001

# ==================== Testing ====================
# Jalankan tests
python manage.py test

# Jalankan tests untuk aplikasi spesifik
python manage.py test posts

# ==================== Database ====================
# Lihat SQL dari migration
python manage.py sqlmigrate posts 0001

# Reset database (DELETE ALL DATA!)
python manage.py flush

# ==================== Static Files ====================
# Collect static files (untuk production)
python manage.py collectstatic

# ==================== Shell ====================
# Akses Django shell untuk testing
python manage.py shell

# Contoh di shell:
# >>> from posts.models import Post
# >>> Post.objects.all()
# >>> post = Post.objects.create(title="Test", content="Test content")
# >>> post.save()
```

---

## Troubleshooting

### ❌ Error: `No module named 'django'`
**Solusi:**
```bash
pip install django
# atau jika menggunakan requirements.txt
pip install -r requirements.txt
```

### ❌ Error: `manage.py not found`
**Solusi:**
```bash
# Pastikan Anda di folder yang tepat
cd <project>
ls manage.py  # Harus ada
```

### ❌ Error: `Port 8000 already in use`
**Solusi:**
```bash
# Gunakan port lain
python manage.py runserver 0.0.0.0:8001
# atau ganti 8001 dengan port lain yang tersedia
```

### ❌ Error: `ModuleNotFoundError` atau import error
**Solusi:**
```bash
# Pastikan virtual environment sudah diaktifkan
source .venv/bin/activate  # Linux/macOS
.\.venv\Scripts\activate.bat  # Windows

# Install ulang dependencies
pip install -r requirements.txt
# atau
pip install django
```

### ❌ Error: `No such table: posts_post`
**Solusi:**
```bash
# Database belum ter-migrate
python manage.py migrate

# Jika masih error, reset dan buat ulang
python manage.py flush  # HATI-HATI: Hapus semua data!
python manage.py migrate
python manage.py createsuperuser
```

### ❌ Error: Database locked atau permission denied
**Solusi:**
```bash
# Hapus file database dan buat ulang
rm db.sqlite3  # Linux/macOS
del db.sqlite3  # Windows

# Buat database baru
python manage.py migrate
python manage.py createsuperuser
```

### ❌ Static files tidak muncul di development
**Solusi:**
```bash
# Pastikan STATIC_URL dan STATIC_ROOT configured di settings.py
# Development biasanya auto-serve, jika tidak:
python manage.py collectstatic --noinput
```

---

## 🔍 Verifikasi Instalasi

Setelah clone dan setup pertama kali:

```bash
# 1. Cek Python
python --version

# 2. Cek pip
pip --version

# 3. Cek Django
pip show django
# atau
django-admin --version

# 4. Test simple project
cd project1
python manage.py runserver
# Jika sukses, akan muncul:
# Starting development server at http://127.0.0.1:8000/
# Quit the server with CONTROL-C.
```

---

## 📚 Resources & Dokumentasi

- **Django Official Docs:** https://docs.djangoproject.com/
- **Django Models:** https://docs.djangoproject.com/en/stable/topics/db/models/
- **Django Views:** https://docs.djangoproject.com/en/stable/topics/http/views/
- **Django Templates:** https://docs.djangoproject.com/en/stable/topics/templates/
- **Django ORM:** https://docs.djangoproject.com/en/stable/topics/db/queries/

---

## 🤝 Kontribusi

Jika ingin menambah fitur atau memperbaiki bug:

```bash
# 1. Buat branch baru
git checkout -b feature/nama-fitur

# 2. Buat perubahan
# Edit files sesuai kebutuhan

# 3. Test perubahan
python manage.py test

# 4. Commit dan push
git add .
git commit -m "Add: deskripsi fitur"
git push origin feature/nama-fitur

# 5. Buat Pull Request di GitHub
```

---

## 📄 Lisensi

Repository ini saat ini tidak memiliki lisensi formal. Hubungi pemilik repo untuk informasi lebih lanjut.

---

## 👤 Pemilik Repository

- **Pemilik:** Zennn01
- **GitHub:** https://github.com/Zennn01
- **Repository:** https://github.com/Zennn01/Framwork-Django

---

## 📝 Catatan Penting

1. **Virtual Environment:** Selalu gunakan virtual environment untuk menghindari konflikt dependencies
2. **Database:** Default menggunakan SQLite3 (cocok untuk development)
3. **Secret Key:** Jangan commit SECRET_KEY di settings.py ke Git, gunakan environment variables
4. **DEBUG Mode:** `DEBUG=True` hanya untuk development, set `DEBUG=False` untuk production
5. **Git Ignore:** File `.gitignore` sudah configured untuk mengabaikan `__pycache__`, `.env`, `db.sqlite3`, dsb.

---

## ✨ Update Summary (Terbaru)

### Project5 - Latest Updates
- ✅ Enhanced UI dengan modern templates
- ✅ Frontend folder dengan assets
- ✅ Full CRUD operations untuk posts
- ✅ Admin panel fully functional
- ✅ Responsive design untuk mobile

### FinalProject - Latest Updates
- ✅ Production-ready configuration
- ✅ Complete CRUD dengan error handling
- ✅ Static files dan media management
- ✅ Seed scripts untuk development data
- ✅ Dokumentasi lengkap (AGENTS.md)
- ✅ Professional templates dan styling

---

**Last Updated:** 2025-07-07  
**Status:** ✅ Fully Documented & Ready to Use

Selamat menggunakan! 🚀
