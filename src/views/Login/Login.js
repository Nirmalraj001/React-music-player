import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router';

const Login = (props) => {

    const navigate = useNavigate();

    const path = window.location.pathname?.split('/')


    const selectArtist = (e) => {
        props.setRouting("2")
    }

    const routePage = (e) => {
        e.preventDefault()
        console.log("object")
        if (path.length && path[3] === 'preview') {
            navigate('/register')
        } else {
            props.setRouting("1")
        }
    }

    const forgotRoute = (e) => {
        if (path.length && path[3] === 'preview') {
            navigate('/forgotpassword')
        } else {
            props.setRouting("2")
        }
    }

    // const routePage1 = (e) => {
    //     navigate('/language')
    // }

    const [formData, setFormData] = useState({
        loginemail: "",
        loginpassword: "",
        loading: false,
        errors: {},
        user_token: localStorage.getItem("usertoken")
    });

    const {
        errors,
        loginemail,
        loginpassword,
    } = formData;

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onChange = (e) => {
        if (!!errors[e.target.name]) {
            delete errors[e.target.name];
            setFormData({ ...formData, [e.target.name]: e.target.value, errors });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const loginValid = () => {
        let errors = {};
        var mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!loginemail) {
            errors.loginemail = "Email address is required";
        } else if (!loginemail.match(mailformat)) {
            errors.loginemail = "Invalid Eamil";
        }


        if (Object.keys(errors).length != 0) {
            setFormData({ ...formData, errors });
            return false;
        } else {
            return true;
        }
    };

    const onSubmitlogin = async (e) => {
        e.preventDefault();

        const isValid = loginValid();
        if (isValid) {
            const insert_data = JSON.stringify({
                email_address: loginemail,
                password: loginpassword
            });

        }
        return false;

    };


    return (
        <Fragment>
            <div className="cnt-load-div">
                <div className="new-mob">
                    <div id="note8" className="silver">
                        <div className="marvel-device note8">
                            <div className="inner"></div>
                            <div className="overflow">
                                <div className="shadow"></div>
                            </div>
                            <div className="speaker"></div>
                            <div className="sensors"></div>
                            <div className="more-sensors"></div>
                            <div className="sleep"></div>
                            <div className="volume"></div>
                            <div className="camera"></div>
                            <div className="screen home">
                                <div className="full-new-mob home-screen">
                                    <div className="heading text-center pad-5">
                                        <h3 >Login</h3>
                                        <h5>Welcome Back!</h5>
                                    </div>
                                    <form className="pwb-form pt-4" onSubmit={onSubmitlogin}>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" >Email</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="Enter your email" name="loginemail" onChange={(e) => onChange(e)} value={formData.email_address} />
                                        </div>
                                        <span style={{ color: "red" }}>
                                            {formData.errors.loginemail}
                                        </span>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" >Password</label>
                                            <input type="Password" className="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="Password" value={formData.password}
                                                name="loginpassword"
                                                autocomplete="false"
                                                onChange={(e) => onChange(e)} />
                                            <span style={{ color: "red" }}>
                                                {formData.errors.loginpassword}
                                            </span>
                                            <a onClick={forgotRoute}>
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <button type="submit" className="btn primary-btn2 w-100">
                                            Login
                                        </button>
                                    </form>
                                    <div>
                                        <button className="face-book w-100 mt-3">
                                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0.25 5.5V8.5H2.5V13.75H5.5V8.5H7.75L8.5 5.5H5.5V4C5.5 3.80109 5.57902 3.61032 5.71967 3.46967C5.86032 3.32902 6.05109 3.25 6.25 3.25H8.5V0.25H6.25C5.25544 0.25 4.30161 0.645088 3.59835 1.34835C2.89509 2.05161 2.5 3.00544 2.5 4V5.5H0.25Z"
                                                    fill="#558FFF" />
                                            </svg>
                                            Facebook
                                        </button>
                                        <button className="face-book gmail w-100 mt-3">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V12.75C2.25 13.5784 2.92157 14.25 3.75 14.25H14.25C15.0784 14.25 15.75 13.5784 15.75 12.75V5.25C15.75 4.42157 15.0784 3.75 14.25 3.75Z"
                                                    fill="#FF5555" stroke="#FF5555" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M2.25 5.25L9 9.75L15.75 5.25" stroke="#252634" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Gmail
                                        </button>
                                        <div className="register">
                                            Don’t have an account? <a onClick={routePage}>Register</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default Login;