from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User, ApplicantProfile, EmployerProfile

# Define an inline admin descriptor for the ApplicantProfile model
class ApplicantProfileInline(admin.StackedInline):
    model = ApplicantProfile
    can_delete = False
    verbose_name_plural = 'Applicant Profile'

# Define an inline admin descriptor for the EmployerProfile model
class EmployerProfileInline(admin.StackedInline):
    model = EmployerProfile
    can_delete = False
    verbose_name_plural = 'Employer Profile'

# Define a new User admin that includes the inlines
class UserAdmin(BaseUserAdmin):
    # Set ordering to email since username is removed
    ordering = ('email',)
    # Add role to the list display and make it a filter
    list_display = ('email', 'role', 'is_staff')
    list_filter = BaseUserAdmin.list_filter + ('role',)
    
    # Override fieldsets to exclude username and use email
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
        ('Role', {'fields': ('role',)}),
    )
    # Override add_fieldsets to exclude username and use email
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'role'),
        }),
    )

    # Decide which inline to show based on the user's role
    def get_inlines(self, request, obj=None):
        if not obj:
            return []
        if obj.role == User.Role.APPLICANT:
            return (ApplicantProfileInline,)
        if obj.role == User.Role.EMPLOYER:
            return (EmployerProfileInline,)
        # For ADMIN or other roles, show no inlines
        return ()

# Register our custom User admin
admin.site.register(User, UserAdmin)

# Register Profile models to be manageable independently
@admin.register(ApplicantProfile)
class ApplicantProfileAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'user', 'education_level')
    search_fields = ('first_name', 'last_name', 'user__email')

@admin.register(EmployerProfile)
class EmployerProfileAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'user', 'industry')
    search_fields = ('company_name', 'user__email')