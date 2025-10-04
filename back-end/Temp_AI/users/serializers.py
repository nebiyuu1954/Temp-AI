from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from rest_framework import serializers
from .models import User, ApplicantProfile, EmployerProfile

class ApplicantProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicantProfile
        fields = ['first_name', 'last_name', 'phone_number', 'date_of_birth', 'education_level', 'skills', 'certifications', 'achievements', 'professional_summary']
        read_only_fields = ['user']

class EmployerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployerProfile
        fields = '__all__'
        read_only_fields = ['user']

class UserSerializer(serializers.ModelSerializer):
    profile = serializers.DictField(write_only=True, required=False)

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

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['profile'] = self.get_profile(instance)
        return data

    def update(self, instance, validated_data):
        # Handle profile updates
        profile_data = validated_data.pop('profile', {})
        if profile_data and instance.role == User.Role.APPLICANT:
            profile = ApplicantProfile.objects.filter(user=instance).first()
            if profile:
                profile_serializer = ApplicantProfileSerializer(profile, data=profile_data, partial=True)
                profile_serializer.is_valid(raise_exception=True)
                profile_serializer.save()
        elif profile_data and instance.role == User.Role.EMPLOYER:
            profile = EmployerProfile.objects.filter(user=instance).first()
            if profile:
                profile_serializer = EmployerProfileSerializer(profile, data=profile_data, partial=True)
                profile_serializer.is_valid(raise_exception=True)
                profile_serializer.save()

        # Update user fields if any
        return super().update(instance, validated_data)

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'password', 're_password', 'role')
