from django.shortcuts import render

from .models import Users
from django.views import View
from django.http import JsonResponse
import json
from .models import Users
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

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
            "message": f"New user created id: {user.id}"
        }
        return JsonResponse(data, status=201)

