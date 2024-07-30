import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import GeneralInformation from './Component/GeneralInfo'
import EducationInfo from './Component/Education'
import PracticalInfo from './Component/Practical'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInformation/>
    <EducationInfo/>
    <PracticalInfo/>
  </React.StrictMode>,
)
