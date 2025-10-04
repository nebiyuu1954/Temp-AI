import React, { useState, useContext, useEffect } from 'react';
import { Header } from '../../../components/header/Header';
import Sidebar from '../../../components/sidebar/Sidebar';
import { AuthContext } from '../../../context/AuthContext';
import { useSidebar } from '../../../context/SidebarContext';
import { useTranslation } from 'react-i18next';
import * as authApi from '../../../api/auth/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { t } = useTranslation();

  // Initialize form data - will be populated from API
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    date_of_birth: '',
    education_level: '',
    skills: '',
    certifications: '',
    achievements: '',
    professional_summary: ''
  });

  // Store initial form data to compare changes
  const [initialFormData, setInitialFormData] = useState({});

  // Visibility toggles for each section
  const [visibility, setVisibility] = useState({
    personal: true,
    education: true,
    skills: true,
    certifications: true,
    achievements: true,
    summary: true
  });

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await authApi.getMe();
        const userData = response.data;
        if (userData.profile) {
          const newFormData = {
            first_name: userData.profile.first_name || '',
            last_name: userData.profile.last_name || '',
            phone_number: userData.profile.phone_number || '',
            date_of_birth: userData.profile.date_of_birth || '',
            education_level: userData.profile.education_level || '',
            skills: userData.profile.skills || '',
            certifications: userData.profile.certifications || '',
            achievements: userData.profile.achievements || '',
            professional_summary: userData.profile.professional_summary || ''
          };
          setFormData(newFormData);
          setInitialFormData(newFormData); // Set initial data for comparison
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        toast.error(t('profile.serverError'));
      }
    };

    fetchProfileData();
  }, [t]);

  // Populate form data when user data becomes available from AuthContext
  useEffect(() => {
    if (user?.profile) {
      setFormData({
        first_name: user.profile.first_name || '',
        last_name: user.profile.last_name || '',
        phone_number: user.profile.phone_number || '',
        date_of_birth: user.profile.date_of_birth || '',
        education_level: user.profile.education_level || '',
        skills: user.profile.skills || '',
        certifications: user.profile.certifications || '',
        achievements: user.profile.achievements || '',
        professional_summary: user.profile.professional_summary || ''
      });
    }
  }, [user]);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle visibility toggle changes
  const handleVisibilityChange = (section, checked) => {
    setVisibility(prev => ({
      ...prev,
      [section]: checked
    }));
  };

  // Handle save button click
  const handleSave = async () => {
    try {
      // Determine what has changed
      const changedFields = {};
      Object.keys(formData).forEach(key => {
        if (formData[key] !== initialFormData[key]) {
          changedFields[key] = formData[key];
        }
      });

      if (Object.keys(changedFields).length === 0) {
        toast.info(t('profile.noChangesDetected'));
        return;
      }

      console.log('Changed fields:', changedFields);

      // Prepare the data to send - only changed profile fields
      const profileData = { profile: changedFields };
      console.log('Sending profile data to endpoint:', profileData);
      const response = await authApi.patchMe(profileData);
      console.log('Response from patchMe:', response);

      // Update initialFormData to reflect the new state
      setInitialFormData(formData);

      toast.success(t('profile.profileUpdatedSuccessfully'));
    } catch (error) {
      console.error('Error updating profile:', error);
      if (error.response && error.response.data && error.response.data.profile) {
        const errorMessages = Object.values(error.response.data.profile).flat();
        errorMessages.forEach(message => toast.error(message));
      } else {
        toast.error(t('profile.serverError'));
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Header />
      <ToastContainer />
      <div className="gap-1 px-6 flex flex-1 justify-center py-5 relative">
        <button onClick={toggleSidebar} className="absolute left-4 top-0 p-2 text-[#0c141d] hover:bg-gray-100 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isSidebarOpen && <Sidebar />}
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">
              {t('sidebar.profile')}
            </p>
          </div>

          <div className="flex gap-6">
            {/* Main Form */}
            <div className="flex-1 space-y-6">
              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0d121c]">{t('profile.personalInformation')}</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={visibility.personal}
                      onChange={(e) => handleVisibilityChange('personal', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[#4b679b]">{t('profile.visibleToEmployers')}</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.firstName')}</label>
                    <input
                      type="text"
                      value={formData.first_name}
                      onChange={(e) => handleInputChange('first_name', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.lastName')}</label>
                    <input
                      type="text"
                      value={formData.last_name}
                      onChange={(e) => handleInputChange('last_name', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.phoneNumber')}</label>
                    <input
                      type="tel"
                      value={formData.phone_number}
                      onChange={(e) => handleInputChange('phone_number', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.dateOfBirth')}</label>
                    <input
                      type="date"
                      value={formData.date_of_birth}
                      onChange={(e) => handleInputChange('date_of_birth', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                    />
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0d121c]">{t('profile.education')}</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={visibility.education}
                      onChange={(e) => handleVisibilityChange('education', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[#4b679b]">{t('profile.visibleToEmployers')}</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.educationLevel')}</label>
                  <input
                    type="text"
                    value={formData.education_level}
                    onChange={(e) => handleInputChange('education_level', e.target.value)}
                    className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                    placeholder="e.g., Bachelor's Degree in Computer Science"
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0d121c]">{t('profile.skills')}</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={visibility.skills}
                      onChange={(e) => handleVisibilityChange('skills', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[#4b679b]">{t('profile.visibleToEmployers')}</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.skills')}</label>
                  <textarea
                    value={formData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] h-24"
                    placeholder="List your skills separated by commas"
                  />
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0d121c]">{t('profile.certifications')}</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={visibility.certifications}
                      onChange={(e) => handleVisibilityChange('certifications', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[#4b679b]">{t('profile.visibleToEmployers')}</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.certifications')}</label>
                  <textarea
                    value={formData.certifications}
                    onChange={(e) => handleInputChange('certifications', e.target.value)}
                    className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] h-24"
                    placeholder="List your certifications"
                  />
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0d121c]">{t('profile.achievements')}</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={visibility.achievements}
                      onChange={(e) => handleVisibilityChange('achievements', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[#4b679b]">{t('profile.visibleToEmployers')}</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.achievements')}</label>
                  <textarea
                    value={formData.achievements}
                    onChange={(e) => handleInputChange('achievements', e.target.value)}
                    className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] h-24"
                    placeholder="Describe your achievements"
                  />
                </div>
              </div>

              {/* Professional Summary */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0d121c]">{t('profile.professionalSummary')}</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={visibility.summary}
                      onChange={(e) => handleVisibilityChange('summary', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[#4b679b]">{t('profile.visibleToEmployers')}</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.professionalSummary')}</label>
                  <textarea
                    value={formData.professional_summary}
                    onChange={(e) => handleInputChange('professional_summary', e.target.value)}
                    className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] h-32"
                    placeholder="Write a brief professional summary"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-[#007bff] text-white rounded-lg hover:bg-[#0056b3] transition-colors duration-200 font-medium"
                >
                  {t('profile.saveProfile')}
                </button>
              </div>
            </div>

            {/* Employer View Preview */}
            <div className="w-80 bg-white p-6 rounded-lg shadow-sm h-fit">
              <h3 className="text-lg font-semibold text-[#0d121c] mb-4">{t('profile.employerViewPreview')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#0d121c]">{t('profile.name')}</h4>
                  <p className="text-[#4b679b]">{formData.first_name} {formData.last_name}</p>
                </div>
                {visibility.personal && (
                  <div>
                    <h4 className="font-medium text-[#0d121c]">{t('profile.contact')}</h4>
                    <p className="text-[#4b679b]">{formData.phone_number}</p>
                  </div>
                )}
                {visibility.education && (
                  <div>
                    <h4 className="font-medium text-[#0d121c]">{t('profile.education')}</h4>
                    <p className="text-[#4b679b]">{formData.education_level}</p>
                  </div>
                )}
                {visibility.skills && (
                  <div>
                    <h4 className="font-medium text-[#0d121c]">{t('profile.skills')}</h4>
                    <p className="text-[#4b679b]">{formData.skills}</p>
                  </div>
                )}
                {visibility.certifications && formData.certifications && (
                  <div>
                    <h4 className="font-medium text-[#0d121c]">{t('profile.certifications')}</h4>
                    <p className="text-[#4b679b]">{formData.certifications}</p>
                  </div>
                )}
                {visibility.achievements && formData.achievements && (
                  <div>
                    <h4 className="font-medium text-[#0d121c]">{t('profile.achievements')}</h4>
                    <p className="text-[#4b679b]">{formData.achievements}</p>
                  </div>
                )}
                {visibility.summary && formData.professional_summary && (
                  <div>
                    <h4 className="font-medium text-[#0d121c]">{t('profile.professionalSummary')}</h4>
                    <p className="text-[#4b679b]">{formData.professional_summary}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
