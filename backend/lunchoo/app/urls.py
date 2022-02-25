from django.urls import path
from .views import User, Lunches, LunchSubscriber

urlpatterns = [
    path('user/', User.as_view()),
    path('lunch/', Lunches.as_view()),
    path('lunch_subscribe/', LunchSubscriber.as_view()),
]