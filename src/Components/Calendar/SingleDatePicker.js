import React from 'react'
import { Calendar } from 'react-date-range';


//style
import "./SingleDatePicker.scss"
const SingleDatePicker = ({ date, setDate }) => {
    return (
        <Calendar className='calendar' date={date} onChange={(value) => setDate(value)} />
    )
}

export default SingleDatePicker