from django.urls import path
from elements import views


urlpatterns = [
    path('', views.element_list)
]