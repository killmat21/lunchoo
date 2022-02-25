from django.shortcuts import render

from django.views import View
from django.http import JsonResponse
import json
from .models import Users, Lunch, LunchSubscribers
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict

@method_decorator(csrf_exempt, name='dispatch')
class User(View):

    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        email = data.get('email')
        if email.endswith('@partoo.fr') is False:
            return JsonResponse({ "message": "Email does not belong to Partoo" }, status=400)
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        password = data.get('password')
        team_role = data.get('team_role')
        photo = data.get('photo')

        user_data = {
            'email': email,
            'first_name': first_name,
            'last_name': last_name,
            'password': password,
            'team_role': team_role,
            'photo': photo,
        }

        user = Users.objects.create(**user_data)

        data = {
            "id": user.id
        }
        return JsonResponse(data, status=201)


@method_decorator(csrf_exempt, name='dispatch')
class Lunches(View):

    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        user_id = data.get('user_id')
        place = data.get('place')
        departure_date = data.get('departure_date')
        print(departure_date)
        number_places = data.get('number_places')

        lunch_data = {
            'place': place,
            'departure_date': departure_date,
            'number_places': int(number_places),
        }

        lunch = Lunch.objects.create(**lunch_data)
        user = Users.objects.get(id=user_id)
        LunchSubscribers.objects.create(lunch=lunch, user=user)
        data = {
            "id": lunch.id
        }
        return JsonResponse(data, status=201)

    def get(self, request):
        lunch_sub = LunchSubscribers.objects.all().values()
        all_lunch = list(Lunch.objects.all().values())
        res = {
            "lunches": []
        }
        for one_lunch in all_lunch:
            lunch = Lunch.objects.get(id=one_lunch["id"])
            user_pk_list = [x["user_id"] for x in list(lunch_sub) if x["lunch_id"] == one_lunch]
            users = list(Users.objects.filter(pk__in=user_pk_list))
            lunch = model_to_dict(lunch)
            lunch["users"] = users
            res["lunches"].append(lunch)
        return JsonResponse(res, status=200)


