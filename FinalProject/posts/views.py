from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib import messages
from .models import Post, Hotel, Villa, Camping, Travel, SewaMobil

def get_all_accommodations():
    hotels = list(Hotel.objects.all())
    for h in hotels: h.category = 'hotel'
    villas = list(Villa.objects.all())
    for v in villas: v.category = 'villa'
    campings = list(Camping.objects.all())
    for c in campings: c.category = 'camping'
    return hotels + villas + campings

def get_all_transportations():
    travels = list(Travel.objects.all())
    for t in travels: t.category = 'travel'
    sewas = list(SewaMobil.objects.all())
    for s in sewas: s.category = 'mobil'
    return travels + sewas

def index(request):
    all_accommodations = get_all_accommodations()
    all_transportations = get_all_transportations()
    return render(request, "index.html", {
        "hotels": all_accommodations,
        "travels": all_transportations
    })

def hotels_view(request):
    all_accommodations = get_all_accommodations()
    return render(request, "hotels.html", {
        "hotels": all_accommodations
    })

def travel_view(request):
    all_transportations = get_all_transportations()
    return render(request, "travel.html", {
        "travels": all_transportations
    })

def detail_view(request, category, id):
    obj = None
    if category == 'hotel':
        obj = Hotel.objects.get(id=id)
    elif category == 'villa':
        obj = Villa.objects.get(id=id)
    elif category == 'camping':
        obj = Camping.objects.get(id=id)
    elif category == 'travel':
        obj = Travel.objects.get(id=id)
    elif category == 'mobil' or category == 'sewa':
        obj = SewaMobil.objects.get(id=id)
    
    # Attach category so detail can use it properly for JS rendering
    if obj:
        obj.category = category
        
    return render(request, "detail.html", {"hotel": obj, "category": category})

def login_view(request):
    if request.user.is_authenticated:
        return redirect("home")
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect("home")
    else:
        form = AuthenticationForm()
    return render(request, "login.html", {"form": form})

def register_view(request):
    if request.user.is_authenticated:
        return redirect("home")
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, f"Selamat datang, {user.username}! Akun kamu berhasil dibuat.")
            return redirect("home")
    else:
        form = UserCreationForm()
    return render(request, "register.html", {"form": form})

def logout_view(request):
    logout(request)
    return redirect("home")
