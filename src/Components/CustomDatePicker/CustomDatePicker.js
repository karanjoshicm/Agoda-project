import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import "./CustomDatePicker.scss"
import useOutsideClick from '../../helpers/useOutsideClick';
const CustomDatePicker = ({ setShowOverLay }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [showDatePicker, setShowDatePicker] = useState(false)
    const ref = useOutsideClick(() => setShowDatePicker(false));


    return (
        <div ref={ref} onClick={() => {
            setShowOverLay(true)
            setShowDatePicker(true)
        }}>
            <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={true}
                months={2}
                ranges={state}
                direction="horizontal"
                className={`${showDatePicker && "active"} datePicker`}
                dateDisplayFormat="dd MMM yyyy"
            />
            {/* <Calendar/> */}
        </div>
    )
}

export default CustomDatePicker