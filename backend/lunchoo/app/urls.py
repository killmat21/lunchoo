from django.urls import path
from .views import User, Lunches

urlpatterns = [
    path('user/', User.as_view()),
    path('lunch/', Lunches.as_view()),
]