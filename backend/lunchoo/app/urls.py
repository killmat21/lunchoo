from django.urls import path
from .views import User

urlpatterns = [
    path('user/', User.as_view()),
    # path('lunch/', Lunch.as_view()),
]