from rest_framework.serializers import ModelSerializer
from .models import User, Lunches, LunchesSuscribers, Restaurant


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'first_name', 'last_name', 'email', 'hashed_password', 'photo',
        )


class LunchesSerializer(ModelSerializer):
    class Meta:
        model = Lunches
        fields = (
            'id', 'departure_date', 'book_limit_date', 'restaurant', 'type', 'photo',
        )


class LunchesSuscribersSerializer(ModelSerializer):
    class Meta:
        model = LunchesSuscribers
        fields = (
            'lunch_id', 'user_id',
        )


class RestaurantSerializer(ModelSerializer):
    class Meta:
        model = LunchesSuscribers
        fields = (
            'id', 'name', 'address', 'restaurant', 'type', 'photo',
        )
