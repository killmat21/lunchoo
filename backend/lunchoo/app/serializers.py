from rest_framework.serializers import ModelSerializer
from .models import Users, Lunches, LunchSubcribers, Restaurants


class UserSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = (
            'id', 'first_name', 'last_name', 'email', 'password', 'photo',
        )


class LunchesSerializer(ModelSerializer):
    class Meta:
        model = Lunches
        fields = (
            'id', 'departure_date', 'book_limit_date', 'restaurant', 'type', 'photo',
        )


class LunchSubcribersSerializer(ModelSerializer):
    class Meta:
        model = LunchSubcribers
        fields = (
            'lunch_id', 'user_id',
        )


class RestaurantsSerializer(ModelSerializer):
    class Meta:
        model = Restaurants
        fields = (
            'id', 'name', 'address', 'restaurant', 'type', 'photo',
        ) 
