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
    company_name: '',
    company_description: '',
    company_website: '',
    company_size: '',
    industry: '',
    phone_number: '',
    address: ''
  });

  // Store initial form data to compare changes
  const [initialFormData, setInitialFormData] = useState({});

  // Visibility toggles for each section
  const [visibility, setVisibility] = useState({
    company: true,
    contact: true,
    details: true
  });

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await authApi.getMe();
        const userData = response.data;
        if (userData.profile) {
          const newFormData = {
            company_name: userData.profile.company_name || '',
            company_description: userData.profile.company_description || '',
            company_website: userData.profile.company_website || '',
            company_size: userData.profile.company_size || '',
            industry: userData.profile.industry || '',
            phone_number: userData.profile.phone_number || '',
            address: userData.profile.address || ''
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
        company_name: user.profile.company_name || '',
        company_description: user.profile.company_description || '',
        company_website: user.profile.company_website || '',
        company_size: user.profile.company_size || '',
        industry: user.profile.industry || '',
        phone_number: user.profile.phone_number || '',
        address: user.profile.address || ''
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
              {/* Company Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0d121c]">{t('profile.companyInformation')}</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={visibility.company}
                      onChange={(e) => handleVisibilityChange('company', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[#4b679b]">{t('profile.visibleToApplicants')}</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.companyName')}</label>
                    <input
                      type="text"
                      value={formData.company_name}
                      onChange={(e) => handleInputChange('company_name', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.companyDescription')}</label>
                    <textarea
                      value={formData.company_description}
                      onChange={(e) => handleInputChange('company_description', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] h-24"
                      placeholder="Describe your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.companyWebsite')}</label>
                    <input
                      type="url"
                      value={formData.company_website}
                      onChange={(e) => handleInputChange('company_website', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.companySize')}</label>
                    <input
                      type="text"
                      value={formData.company_size}
                      onChange={(e) => handleInputChange('company_size', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                      placeholder="e.g., 50-100 employees"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.industry')}</label>
                    <input
                      type="text"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                      placeholder="e.g., Technology"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0d121c]">{t('profile.contactInformation')}</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={visibility.contact}
                      onChange={(e) => handleVisibilityChange('contact', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[#4b679b]">{t('profile.visibleToApplicants')}</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.phoneNumber')}</label>
                    <input
                      type="tel"
                      value={formData.phone_number}
                      onChange={(e) => handleInputChange('phone_number', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-[#0d121c] mb-1">{t('profile.address')}</label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-3 py-2 border border-[#cfd8e8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007bff] h-24"
                      placeholder="Company address"
                    />
                  </div>
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
              <h3 className="text-lg font-semibold text-[#0d121c] mb-4">{t('profile.applicantViewPreview')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#0d121c]">{t('profile.companyName')}</h4>
                  <p className="text-[#4b679b]">{formData.company_name}</p>
                </div>
                {visibility.company && (
                  <>
                    <div>
                      <h4 className="font-medium text-[#0d121c]">{t('profile.description')}</h4>
                      <p className="text-[#4b679b]">{formData.company_description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0d121c]">{t('profile.website')}</h4>
                      <p className="text-[#4b679b]">{formData.company_website}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0d121c]">{t('profile.size')}</h4>
                      <p className="text-[#4b679b]">{formData.company_size}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0d121c]">{t('profile.industry')}</h4>
                      <p className="text-[#4b679b]">{formData.industry}</p>
                    </div>
                  </>
                )}
                {visibility.contact && (
                  <>
                    <div>
                      <h4 className="font-medium text-[#0d121c]">{t('profile.contact')}</h4>
                      <p className="text-[#4b679b]">{formData.phone_number}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0d121c]">{t('profile.address')}</h4>
                      <p className="text-[#4b679b]">{formData.address}</p>
                    </div>
                  </>
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
