import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
django.setup()

from posts.models import Hotel, Villa, Camping

hotels_data = [
    {
        "model": Hotel,
        "name": "Hotel Indonesia Kempinski Jakarta",
        "location": "Thamrin, Jakarta Pusat",
        "rating_score": 4.8,
        "rating_text": "Excellent",
        "review_count": 1200,
        "old_price": 3500000,
        "new_price": 2100000,
        "badge": "-40%"
    },
    {
        "model": Hotel,
        "name": "Ayana Resort and Spa, Bali",
        "location": "Jimbaran, Bali",
        "rating_score": 4.9,
        "rating_text": "Superb",
        "review_count": 3400,
        "old_price": 4000000,
        "new_price": 3000000,
        "badge": "-25%"
    },
    {
        "model": Hotel,
        "name": "Padma Hotel Bandung",
        "location": "Ciumbuleuit, Bandung",
        "rating_score": 4.7,
        "rating_text": "Excellent",
        "review_count": 850,
        "old_price": None,
        "new_price": 1850000,
        "badge": ""
    },
    {
        "model": Hotel,
        "name": "Tentrem Hotel Yogyakarta",
        "location": "Jetis, Yogyakarta",
        "rating_score": 4.8,
        "rating_text": "Excellent",
        "review_count": 2100,
        "old_price": 2200000,
        "new_price": 1500000,
        "badge": "Promo"
    },
    {
        "model": Hotel,
        "name": "JW Marriott Hotel Surabaya",
        "location": "Tegalsari, Surabaya",
        "rating_score": 4.6,
        "rating_text": "Very Good",
        "review_count": 920,
        "old_price": None,
        "new_price": 1450000,
        "badge": ""
    },
    {
        "model": Hotel,
        "name": "Katamaran Hotel & Resort",
        "location": "Senggigi, Lombok",
        "rating_score": 4.7,
        "rating_text": "Excellent",
        "review_count": 540,
        "old_price": 1600000,
        "new_price": 1100000,
        "badge": "Best Deal"
    },
    {
        "model": Villa,
        "name": "The Kayon Jungle Resort",
        "location": "Ubud, Bali",
        "rating_score": 4.9,
        "rating_text": "Superb",
        "review_count": 1200,
        "old_price": 5000000,
        "new_price": 3500000,
        "badge": "Top Villa"
    },
    {
        "model": Villa,
        "name": "Villa Puncak by Plataran",
        "location": "Puncak, Bogor",
        "rating_score": 4.6,
        "rating_text": "Very Good",
        "review_count": 300,
        "old_price": None,
        "new_price": 2500000,
        "badge": ""
    },
    {
        "model": Camping,
        "name": "Glamping Lakeside Rancabali",
        "location": "Ciwidey, Bandung",
        "rating_score": 4.5,
        "rating_text": "Good",
        "review_count": 450,
        "old_price": 1200000,
        "new_price": 800000,
        "badge": "Camping"
    },
    {
        "model": Camping,
        "name": "Ranca Upas Smart Camp",
        "location": "Ciwidey, Bandung",
        "rating_score": 4.7,
        "rating_text": "Excellent",
        "review_count": 800,
        "old_price": None,
        "new_price": 400000,
        "badge": "Nature"
    }
]

Hotel.objects.all().delete()
Villa.objects.all().delete()
Camping.objects.all().delete()

for data in hotels_data:
    model_class = data.pop("model")
    model_class.objects.create(
        **data,
        image=""
    )

print("Berhasil menambahkan data hotel, villa, dan camping ke tabel masing-masing!")
