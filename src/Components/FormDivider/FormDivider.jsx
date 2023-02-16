import React from 'react'


//styles
import "./FormDivider.scss"
const FormDivider = ({ children }) => {
    return (
        <div className='formDivider'>
            <div className="formDivider-line"></div>
            <span className='formDivider-text'>{children}</span>
            <div className="formDivider-line"></div>
        </div>
    )
}

export default FormDivider