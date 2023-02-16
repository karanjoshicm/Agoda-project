import React from 'react'
import ReactStars from 'react-stars'


const CustomStar = ({ value = 0, color2 = "#ff567d", color1 = "white" }) => {
    return (
        <ReactStars
            count={5}
            size={20}
            color1={color1}
            color2={color2}
            half={true}
            value={value} 
            edit={false}
            />
    )
}

export default CustomStar