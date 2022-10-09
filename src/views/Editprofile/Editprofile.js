import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

const Editprofile = (props) => {
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
                            <div className="screen home" style={{overflow:"scroll"}}>
                                <div className="full-new-mob">
                                    <div className="main-screen">
                                        <div className="header">
                                            <div className="arrow-svg">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 6L9 12L15 18" stroke="white" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </div>

                                            <h5>Edit Profile</h5>
                                        </div>
                                        <main>
                                            <form className="pwb-form pt-4">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Name</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" placeholder="Enter your name" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" placeholder="Enter your name" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Phone Number</label>
                                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" placeholder="Enter your name" />
                                                </div>
                                                <div>
                                                    <label for="exampleInputEmail1">Gender</label>
                                                    <div className="gender-box">

                                                        <button className="male-btn Grd-Btn active">
                                                            Male
                                                        </button>
                                                        <button className="female-btn">
                                                            Female
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="dob-from my-3 form-group">
                                                    <label for="">Date of Birth</label>
                                                    {/* <div className="input-group mb-3"> */}
                                                        <input type="date" className="form-control" placeholder="08-12-1999"
                                                            aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                        {/* <div className="input-group-append">
                                                            <span className="input-group-text" id="basic-addon2"><svg width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M14.9997 4.16666H4.99967C4.0792 4.16666 3.33301 4.91286 3.33301 5.83333V15.8333C3.33301 16.7538 4.0792 17.5 4.99967 17.5H14.9997C15.9201 17.5 16.6663 16.7538 16.6663 15.8333V5.83333C16.6663 4.91286 15.9201 4.16666 14.9997 4.16666Z"
                                                                        stroke="#FA3174" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M13.333 2.5V5.83333" stroke="#FA3174"
                                                                        stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M6.66699 2.5V5.83333" stroke="#FA3174"
                                                                        stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M3.33301 9.16667H16.6663" stroke="#FA3174"
                                                                        stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M8.33366 12.5H6.66699V14.1667H8.33366V12.5Z"
                                                                        stroke="#FA3174" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </div> */}
                                                    {/* </div> */}
                                                </div>
                                                <div className="form-group  activity my-2">
                                                    <label for="">Country or Region</label>
                                                    <select className="custom-select" id="inputGroupSelect03"
                                                        aria-label="Example select with button addon">
                                                        <option selected="">INDIA</option>
                                                        <option value="1">USA</option>
                                                        <option value="2">CANADA</option>
                                                        <option value="3">AUS</option>
                                                    </select>
                                                </div>
                                                <button type="submit" className="btn primary-btn w-100 mt-4">
                                                    Update
                                                </button>
                                            </form>
                                        </main>
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

export default Editprofile;