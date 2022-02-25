from django.shortcuts import render

from django.views import View
from django.http import JsonResponse
import json
from .models import Users
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


# class LunchesViewSet(
#     GenericViewSet,  # generic view functionality
#     CreateModelMixin,  # handles POSTs
#     RetrieveModelMixin,  # handles GETs for 1 Company
#     UpdateModelMixin,  # handles PUTs and PATCHes
#     ListModelMixin,  # handles GETs for many Companies
#
# ):
#     serializer_class = LunchesSerializer
#     queryset = Lunches.objects.all()
#
#
# class LunchSubcribersViewSet(
#     GenericViewSet,  # generic view functionality
#     CreateModelMixin,  # handles POSTs
#     RetrieveModelMixin,  # handles GETs for 1 Company
#     UpdateModelMixin,  # handles PUTs and PATCHes
#     ListModelMixin,  # handles GETs for many Companies
# ):
#     serializer_class = LunchSubcribersSerializer
#     queryset = LunchSubcribers.objects.all()
#
#
# class RestaurantsViewSet(
#     GenericViewSet,  # generic view functionality
#     CreateModelMixin,  # handles POSTs
#     RetrieveModelMixin,  # handles GETs for 1 Company
#     UpdateModelMixin,  # handles PUTs and PATCHes
#     ListModelMixin,  # handles GETs for many Companies
# ):
#     serializer_class = RestaurantsSerializer
#     queryset = Restaurants.objects.all()

@method_decorator(csrf_exempt, name='dispatch')
class User(View):

    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        email = data.get('email')
        if email.endswith('@partoo.fr') is False:
            raise ValueError("Email does not belong to Partoo")
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        password = data.get('password')
        photo = data.get('photo')

        user_data = {
            'email': email,
            'first_name': first_name,
            'last_name': last_name,
            'password': password,
            'photo': photo,
        }

        user = Users.objects.create(**user_data)

        data = {
            "message": f"New user created id: {user.id}"
        }
        return JsonResponse(data, status=201)
