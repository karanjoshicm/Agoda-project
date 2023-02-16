import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { emailVerify } from '../../api/signUp/emailVerify';
import ErrorMessageText from '../../Components/ErrorMessageText/ErrorMessageText';
import Loader from '../../Components/Loader/Loader';
import Modal from '../../Components/Modal/Modal';
import SuccessText from '../../Components/SuccessText/SuccessText';
import { reducerFunction } from '../../helpers/reducerFunction';

//styles
import "./EmailVerification.scss"
const EmailVerification = () => {
    const navigate = useNavigate();
    const [getToken] = useSearchParams();
    const token = getToken.get("token");
    const [apiResponse, setApiResponse] = useState({})
    const [showModal, setShowModal] = useState(false);
    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false,
    };
    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);

    const handleEmailVerification = async () => {
        dispatch({ type: "FETCH_START" });
        const data = await emailVerify(token);
        console.log("api response is ", data)
        setApiResponse(data)

        if (data.status) {
            dispatch({ type: "FETCH_SUCCESS", data });
            setTimeout(() => {
                navigate("/");
                setShowModal(false);
            }, 2000);
        } else {
            dispatch({ type: "FETCH_ERROR", data });
            setTimeout(() => {
                navigate("/");
                setShowModal(false);
            }, 2000);
        }
    };
    console.log("state data is ", state.data)

    useEffect(() => {
        if (!token) return;
        else {
            setShowModal(true);
            handleEmailVerification();
        }
    }, []);
    return (
        <div>
            {showModal && (
                <Modal
                    setShowModal={setShowModal}
                    showHeader={false}
                    title="This is modal header"
                >
                    <div className="emailVerification-modal-body">
                        {state?.loading &&
                            <div>
                                <div className="emailVerification-modal-text">
                                    Please wait while we are verifying the email
                                </div>
                                <Loader />
                            </div>
                        }
                        {
                            apiResponse?.data && <>
                                {
                                    !apiResponse.status ? <div
                                        style={{
                                            position: "absolute",
                                            top: "46%",
                                            left: "50%",
                                            transform: "translate(-50%)",
                                        }}
                                        className="emailVerification-modal-text"
                                    >
                                        <ErrorMessageText>{apiResponse?.msg}</ErrorMessageText>
                                        <span>Redirecting you to the home page.....</span>
                                    </div> : <div
                                        style={{
                                            position: "absolute",
                                            top: "46%",
                                            left: "50%",
                                            transform: "translate(-50%)",
                                        }}
                                        className="emailVerification-modal-text"
                                    >
                                        <SuccessText>{apiResponse?.msg}</SuccessText>
                                        <span>Redirecting you to the home page.....</span>
                                    </div>
                                }
                            </>
                        }

                    </div>
                </Modal>
            )}
        </div>
    )
}

export default EmailVerification