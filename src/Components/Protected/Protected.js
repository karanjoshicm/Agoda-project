import React from 'react'
import { Navigate } from 'react-router-dom'
import checkUser from '../../helpers/checkUser'

const Protected = ({ children }) => {
    if (checkUser()) {
        return children
    }
    else
        return (
            <Navigate to={"/login"} />
        )
}

export default Protected