from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.translation import gettext_lazy as _

from django.conf import settings


class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        # Create profile based on role
        if user.role == User.Role.APPLICANT:
            ApplicantProfile.objects.create(user=user)
        elif user.role == User.Role.EMPLOYER:
            EmployerProfile.objects.create(user=user)

        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', User.Role.ADMIN)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = 'ADMIN', 'Admin'
        APPLICANT = 'APPLICANT', 'Applicant'
        EMPLOYER = 'EMPLOYER', 'Employer'

    username = None
    email = models.EmailField(_('email address'), unique=True)
    role = models.CharField(max_length=50, choices=Role.choices)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['role'] 

    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def profile(self):
        """Get the appropriate profile based on role"""
        if hasattr(self, 'applicantprofile'):
            return self.applicantprofile
        elif hasattr(self, 'employerprofile'):
            return self.employerprofile
        return None


class ApplicantProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE, 
        related_name='applicantprofile',
        limit_choices_to={'role': User.Role.APPLICANT}
    )
    first_name = models.CharField(max_length=105)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    date_of_birth = models.DateField(null=True, blank=True)
    education_level = models.CharField(max_length=100, blank=True)
    skills = models.TextField(blank=True)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    certifications = models.TextField(blank=True)
    achievements = models.TextField(blank=True)
    professional_summary = models.TextField(blank=True)


    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class EmployerProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE, 
        related_name='employerprofile',
        limit_choices_to={'role': User.Role.EMPLOYER}
    )
    company_name = models.CharField(max_length=255)
    company_description = models.TextField(blank=True)
    company_website = models.URLField(blank=True)
    company_size = models.CharField(max_length=100, blank=True)
    industry = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=15)
    address = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.company_name