import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { useCustomizeContext } from "../../../../../../contexts/CustomizeContext";
import { AppInfo } from "../../../../../../redux/features/createapp";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { userRegister } from "../../../../../../redux/features/musicpreview";
import { passwordvalidation } from "../../../../../../Authorization/helper/common_helper";

const Register = (props) => {

    const dispatch = useDispatch();
    const path = window.location.pathname?.split('/')


    const { login } = useCustomizeContext()

    const app = { app_id: path[1], category: "login" };

    useEffect(() => {
        (async () => {
            const resp = await dispatch(AppInfo(app), (resp) => {
                console.log(resp, "resp12")
            });
            console.log(resp, 'responsee')

            let data = resp.app_details.App_Info.login

            console.log(data, "resp1")
            login.setBackgroundColor(data.backgroundColor)
            login.setHeadColor(data.headColor)
            login.setPrimaryColor(data.primaryColor)
            login.setSecondaryColor(data.secondaryColor)
            login.setButtonTextColor(data.buttonTextColor)
            login.setfontFamilyChange(data.textfontFamilyChange)
            login.setfontSizeChange(data.textfontSizeChange)
            login.setButtonColor(data.buttonColor)


        })();
    }, [])




    const styles = {
        main: {
            color: login.headColor,
            fontFamily: login.fontFamilyChange,
            fontSize: `${login.fontSizeChange}px`
        },
        primary: {
            color: login.primaryColor,
            fontSize: `${login.primaryFontSize}px`
        },
        secondary: {
            color: login.secondaryColor,
            fontSize: `${login.secondaryFontSize}px`
        },
        button: {
            background: login.buttonColor,
            color: login.buttonTextColor
        }
    };

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email_address: "",
        password: "",
        cpassword: "",
        terms: "",
        loading: false,
        errors: {},
        user_token: localStorage.getItem("usertoken")
    });

    const routePage = (e) => {
        e.preventDefault()
        if (path.length && path[3] === 'preview') {
            navigate('/login')
        } else {
            props.setRouting("1")
        }

    }

    const {
        errors,
        username,
        email_address,
        password,
        cpassword,
        terms,
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

    const registerValid = () => {
        let errors = {};
        var mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email_address) {
            errors.email_address = "Email address is required";
        } else if (!email_address.match(mailformat)) {
            errors.email_address = "Invalid Eamil";
        }
        if (!username) {
            errors.username = "Username is required";
        }
        if (!password) {
            errors.password = "Password is required";
        } else if (passwordvalidation(password) != true) {
            const err = passwordvalidation(password);
            errors.password = "Password " + err;
        }
        if (!cpassword) {
            errors.cpassword = "Confirm Password is required";
        } else if (passwordvalidation(cpassword) != true) {
            const err = passwordvalidation(cpassword);
            errors.cpassword = "Confirm Password " + err;
        }
        if (password != cpassword) {
            errors.cpassword = "Please Enter The Same Password";
        }
        if (Object.keys(errors).length != 0) {
            setFormData({ ...formData, errors, loading: false });
            return false;
        } else {
            return true;
        }
    };

    const onSubmitSignUp = async (e) => {
        e.preventDefault();

        const isValid = registerValid();

        console.log(isValid, "isValid")
        if (isValid) {
            const Signup_data = JSON.stringify({
                username,
                email_address,
                password,
                cpassword
            });

            const getResp = await dispatch(userRegister(Signup_data, true));

            console.log(getResp, "insert_data")

            if (getResp.status === true) {
                navigate('/login')
            } else {
                // toast.error(getResp.message)
                // alert("error")
            }
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
                                <div className="full-new-mob home-screen" style={{ background: login.backgroundColor }}>
                                    <div className="heading text-center pad-5">
                                        <h3 style={styles.main}>Register</h3>
                                        <h5>Create your account now!</h5>
                                    </div>
                                    <form className="pwb-form pt-4" onSubmit={(e) => onSubmitSignUp(e)}>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" style={styles.secondary}>Name</label>
                                            <input type="email" className="form-control" id="username" name="username"
                                                aria-describedby="emailHelp" placeholder="Enter your email or phone number" style={styles.primary} value={formData.username} onChange={(e) => onChange(e)} />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" style={styles.secondary}>Email</label>
                                            <input type="email" className="form-control" id="email_address" name="email_address"
                                                aria-describedby="emailHelp" placeholder="Enter your email or phone number" style={styles.primary} value={formData.email_address} onChange={(e) => onChange(e)} />
                                        </div>
                                        <span style={{ color: "red" }}>
                                            {formData.errors.email_address}
                                        </span>
                                        <div className="form-group  pass-eye">
                                            <label for="exampleInputEmail1" style={styles.secondary}>Password</label>
                                            <input type="Password" className="form-control " id="password" name="password"
                                                aria-describedby="emailHelp" placeholder="Password" style={styles.primary} value={formData.password}
                                                onChange={(e) => onChange(e)} />
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 2.5L17.5 17.5" stroke="#FA3174" stroke-width="1.25"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M8.81997 8.8225C8.50724 9.13502 8.33146 9.55896 8.3313 10.0011C8.33114 10.4432 8.50662 10.8673 8.81914 11.18C9.13165 11.4927 9.5556 11.6685 9.99771 11.6687C10.4398 11.6688 10.8639 11.4933 11.1766 11.1808"
                                                    stroke="#FA3174" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M7.80252 4.47083C8.51703 4.26644 9.25685 4.16404 10 4.16667C13.3334 4.16667 16.1109 6.11083 18.3334 10C17.685 11.1342 16.99 12.1033 16.2475 12.9067M14.4642 14.4575C13.105 15.3742 11.6184 15.8333 10 15.8333C6.66669 15.8333 3.88919 13.8892 1.66669 10C2.80752 8.00417 4.09419 6.52083 5.52669 5.54917"
                                                    stroke="#FA3174" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <span style={{ color: "red" }}>
                                            {formData.errors.password}
                                        </span>

                                        <div className="form-group  pass-eye">
                                            <label for="exampleInputEmail1" style={styles.secondary}>Confirm Password</label>
                                            <input type="Password" className="form-control" id="cpassword" name="cpassword"
                                                aria-describedby="emailHelp" placeholder="Password" style={styles.primary} value={formData.cpassword}
                                                onChange={(e) => onChange(e)} />
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 2.5L17.5 17.5" stroke="#FA3174" stroke-width="1.25"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M8.81997 8.8225C8.50724 9.13502 8.33146 9.55896 8.3313 10.0011C8.33114 10.4432 8.50662 10.8673 8.81914 11.18C9.13165 11.4927 9.5556 11.6685 9.99771 11.6687C10.4398 11.6688 10.8639 11.4933 11.1766 11.1808"
                                                    stroke="#FA3174" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M7.80252   4.26644 9.25685 4.16404 10 4.16667C13.3334 4.16667 16.1109 6.11083 18.3334 10C17.685 11.1342 16.99 12.1033 16.2475 12.9067M14.4642 14.4575C13.105 15.3742 11.6184 15.8333 10 15.8333C6.66669 15.8333 3.88919 13.8892 1.66669 10C2.80752 8.00417 4.09419 6.52083 5.52669 5.54917"
                                                    stroke="#FA3174" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <span style={{ color: "red" }}>
                                            {formData.errors.cpassword}
                                        </span>

                                        <button type="submit" className="btn primary-btn2 w-100" style={styles.button}>
                                            Register
                                        </button>
                                    </form>
                                    <div>
                                        <div className="register text-center">
                                            Have an account? <a href="#">Login</a>
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

export default Register;