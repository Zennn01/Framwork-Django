from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="home"),
    path("hotels/", views.hotels_view, name="hotels"),
    path("travel/", views.travel_view, name="travel"),
    path("detail/<str:category>/<int:id>/", views.detail_view, name="detail"),
    path("login/", views.login_view, name="login"),
    path("register/", views.register_view, name="register"),
    path("logout/", views.logout_view, name="logout"),
]
