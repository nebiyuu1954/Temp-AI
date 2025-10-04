import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ApplicantNotifications from '../Applicant/Notification/Notifications';
import EmployerNotifications from '../Employer/Notification/Notifications';

const Notifications = () => {
  const { user } = useContext(AuthContext);

  if (user?.role === 'APPLICANT') {
    return <ApplicantNotifications />;
  } else if (user?.role === 'EMPLOYER') {
    return <EmployerNotifications />;
  } else {
    return <div>Unknown role</div>;
  }
};

export default Notifications;
