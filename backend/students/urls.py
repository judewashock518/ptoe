from django.urls import path
from students import views


urlpatterns = [
    path('detail/', views.student_detail),
    path('', views.student_list)
]