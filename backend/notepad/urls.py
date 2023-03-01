from django.urls import path
from notepad import views


urlpatterns = [
    path('notes/', views.note_detail),
    path('', views.note_list),
    path("<int:pk>/",views.update_detail)
]