import React from 'react'
import AppButton from '../../AppButton/AppButton'

//components
import CustomInput from "../CustomInput/CustomInput"

//styles
import "./Activities.scss"
const Activities = ({setShowOverlay=()=>{}}) => {
  return (
    <div>
      <CustomInput setShowOverlay={setShowOverlay} placeholder="Search by city" />
      <div className="heroSection-searchButton">
        <AppButton
          solid={true}
          style={{
            width: "450px",
            padding: "20px",
            fontSize: "18px",
            textTransform: "uppercase",
            fontWeight:"400"
          }}
        >
          Search
        </AppButton>
      </div>
    </div>
  )
}

export default Activities