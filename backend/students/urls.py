from django.urls import path
from students import views


urlpatterns = [
    path('', views.student_list)
]