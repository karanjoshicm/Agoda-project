import React from 'react'

//styles
import "./ShadowContainer.scss"
const ShadowContainer = ({ children ,transparentBg=false}) => {
    return (
        <div className={`shadowContainer ${transparentBg && "transparent"}`}>{children}</div>
    )
}

export default ShadowContainer