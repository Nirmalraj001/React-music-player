import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";

const Register = (props) => {

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
                                        <h3>Register</h3>
                                        <h5>Create your account now!</h5>
                                    </div>
                                    <form className="pwb-form pt-4">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" >Email</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" value="test@gmail.com"
                                                aria-describedby="emailHelp" placeholder="Enter your email or phone number"   />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" >Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" value="John"
                                                aria-describedby="emailHelp" placeholder="Enter your email or phone number"   />
                                        </div>
                                        <div className="form-group  pass-eye">
                                            <label for="exampleInputEmail1" >Password</label>
                                            <input type="Password" className="form-control " id="exampleInputEmail1" value="password"
                                                aria-describedby="emailHelp" placeholder="Password"   />
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
                                        <div className="form-group  pass-eye">
                                            <label for="exampleInputEmail1" >Confirm Password</label>
                                            <input type="Password" className="form-control" id="exampleInputEmail1" value="password"
                                                aria-describedby="emailHelp" placeholder="Password"   />
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
                                        <button type="submit" className="btn primary-btn2 w-100">
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