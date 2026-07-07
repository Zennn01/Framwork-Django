import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
django.setup()

from posts.models import Travel, SewaMobil

travel_data = [
    {
        "model": Travel,
        "name": "DayTrans Executive",
        "departure": "Jakarta (Sudirman)",
        "destination": "Bandung (Cihampelas)",
        "price": 135000,
        "badge": "Shuttle Hemat"
    },
    {
        "model": Travel,
        "name": "XTrans Premium",
        "departure": "Bandara Soekarno Hatta",
        "destination": "Bandung (Pasteur)",
        "price": 185000,
        "badge": ""
    },
    {
        "model": Travel,
        "name": "Baraya Travel",
        "departure": "Jakarta (Melawai)",
        "destination": "Bandung (Surapati)",
        "price": 95000,
        "badge": "Paling Laris"
    },
    {
        "model": Travel,
        "name": "Kencana Shuttle",
        "departure": "Semarang",
        "destination": "Yogyakarta",
        "price": 120000,
        "badge": "Eksekutif"
    },
    {
        "model": SewaMobil,
        "name": "Avanza atau Sejenisnya",
        "departure": "Dalam Kota Jakarta",
        "destination": "Lepas Kunci",
        "price": 350000,
        "badge": "Rental"
    },
    {
        "model": SewaMobil,
        "name": "Innova Reborn",
        "departure": "Luar Kota Jakarta",
        "destination": "Dengan Supir",
        "price": 750000,
        "badge": "Rental Premium"
    }
]

Travel.objects.all().delete()
SewaMobil.objects.all().delete()

for data in travel_data:
    model_class = data.pop("model")
    model_class.objects.create(
        **data,
        image=""
    )

print("Berhasil menambahkan data travel jemput dan sewa mobil ke dalam database!")
