import React from 'react'
import { toast } from "react-toastify"
const useToast = () => {

    const successToast = (message) => toast(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success"
    });

    const errorToast = (message) => toast(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error"
    });
    return { successToast, errorToast }

}

export default useToast