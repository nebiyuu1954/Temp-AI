import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ApplicantProfile from '../Applicant/Profile/Profile';
import EmployerProfile from '../Employer/Profile/Profile';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();

  if (user?.role === 'APPLICANT') {
    return <ApplicantProfile />;
  } else if (user?.role === 'EMPLOYER') {
    return <EmployerProfile />;
  } else {
    return <div>{t('profile.unknownRole')}</div>;
  }
};

export default Profile;
