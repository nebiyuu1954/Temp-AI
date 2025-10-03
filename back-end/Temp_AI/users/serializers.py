from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from rest_framework import serializers
from .models import User, ApplicantProfile, EmployerProfile

class ApplicantProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicantProfile
        fields = '__all__'

class EmployerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployerProfile
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'email', 'role', 'profile']

    def get_profile(self, obj):
        if obj.role == User.Role.APPLICANT:
            profile = ApplicantProfile.objects.filter(user=obj).first()
            return ApplicantProfileSerializer(profile).data if profile else None
        elif obj.role == User.Role.EMPLOYER:
            profile = EmployerProfile.objects.filter(user=obj).first()
            return EmployerProfileSerializer(profile).data if profile else None
        return None

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'password', 're_password', 'role')
