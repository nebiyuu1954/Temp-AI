import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import ApplicantLandingPage from '../Applicant/ApplicantLandingPage'
import EmployerLandingPage from '../Employer/EmployerLandingPage'

const Dashboard = () => {
  const { user } = useContext(AuthContext)

  if (user?.role === 'APPLICANT') {
    return <ApplicantLandingPage />
  } else if (user?.role === 'EMPLOYER') {
    return <EmployerLandingPage />
  } else {
    return <div>Unknown role</div>
  }
}

export default Dashboard
