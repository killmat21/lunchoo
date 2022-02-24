from django.shortcuts import render
from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.viewsets import GenericViewSet

from .models import Users, Lunches, LunchSubcribers, Restaurants
from .serializers import UsersSerializer, LunchesSerializer, LunchSubcribersSerializer, RestaurantsSerializer


class UsersViewSet(
    GenericViewSet,  # generic view functionality
    CreateModelMixin,  # handles POSTs
    RetrieveModelMixin,  # handles GETs for 1 Company
    UpdateModelMixin,  # handles PUTs and PATCHes
    ListModelMixin,  # handles GETs for many Companies
):
      serializer_class = UsersSerializer
      queryset = Users.objects.all()


class LunchesViewSet(
    GenericViewSet,  # generic view functionality
    CreateModelMixin,  # handles POSTs
    RetrieveModelMixin,  # handles GETs for 1 Company
    UpdateModelMixin,  # handles PUTs and PATCHes
    ListModelMixin,  # handles GETs for many Companies

):
    serializer_class = LunchesSerializer
    queryset = Lunches.objects.all()


class LunchSubcribersViewSet(
    GenericViewSet,  # generic view functionality
    CreateModelMixin,  # handles POSTs
    RetrieveModelMixin,  # handles GETs for 1 Company
    UpdateModelMixin,  # handles PUTs and PATCHes
    ListModelMixin,  # handles GETs for many Companies
):
    serializer_class = LunchSubcribersSerializer
    queryset = LunchSubcribers.objects.all()


class RestaurantsViewSet(
    GenericViewSet,  # generic view functionality
    CreateModelMixin,  # handles POSTs
    RetrieveModelMixin,  # handles GETs for 1 Company
    UpdateModelMixin,  # handles PUTs and PATCHes
    ListModelMixin,  # handles GETs for many Companies
):
    serializer_class = RestaurantsSerializer
    queryset = Restaurants.objects.all()
