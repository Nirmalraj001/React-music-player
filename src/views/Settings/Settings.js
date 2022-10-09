import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

const Settings = (props) => {
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
                                            <div className="settings">
                                                <div className="dash-bo">
                                                    <div className="heading">
                                                        <h2>Sound</h2>
                                                    </div>
                                                    <div className="dash-menus">
                                                        <h3>Sound Quality</h3>
                                                        {/* <div className="dropdown">
                                                            <button className="btn  dropdown-toggle" type="button"
                                                                id="dropdownMenuButton" data-toggle="dropdown"
                                                                aria-expanded="false">
                                                                High
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <a className="dropdown-item" href="#">Medium</a>
                                                                <a className="dropdown-item" href="#">Low</a>
                                                            </div>
                                                        </div> */}
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle caret>
                                                            High
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Medium</DropdownItem>
                                                                <DropdownItem>Low</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                    <div className="dash-menus ">
                                                        <h3> Audio</h3>
                                                        {/* <div className="dropdown">
                                                            <button className="btn  dropdown-toggle" type="button"
                                                                id="dropdownMenuButton" data-toggle="dropdown"
                                                                aria-expanded="false">
                                                                Stereo
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <a className="dropdown-item" href="#">Medium</a>
                                                                <a className="dropdown-item" href="#">Low</a>
                                                            </div>
                                                        </div> */}
                                                         <UncontrolledDropdown>
                                                            <DropdownToggle caret>
                                                            High
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                <DropdownItem>Medium</DropdownItem>
                                                                <DropdownItem>Low</DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </div>
                                                </div>
                                                <div className="dash-bo ">
                                                    <div className="heading ">
                                                        <h2>Application</h2>
                                                    </div>
                                                    <div className="dash-menus">
                                                        <h3>Notifications</h3>
                                                        <div className="toggle-pmg my-2 my-lg-0">
                                                            <div className="toggle-s">
                                                                <label className="switch  dark-theme">
                                                                    <input type="checkbox" id="test1" value="supress" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dash-menus">
                                                        <h3>Auto Play</h3>
                                                        <div className="toggle-pmg my-2 my-lg-0">
                                                            <div className="toggle-s">
                                                                <label className="switch  dark-theme">
                                                                    <input type="checkbox" id="test2" value="supress" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dash-menus">
                                                        <h3>Auto Play</h3>
                                                        <div className="toggle-pmg my-2 my-lg-0">
                                                            <div className="toggle-s">
                                                                <label className="switch  dark-theme">
                                                                    <input type="checkbox" id="test3" value="supress" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dash-menus">
                                                        <h3>Data Saver</h3>
                                                        <div className="toggle-pmg my-2 my-lg-0">
                                                            <div className="toggle-s">
                                                                <label className="switch  dark-theme">
                                                                    <input type="checkbox" id="test4" value="supress" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dash-bo">
                                                    <div className="heading ">
                                                        <h2>Passwords</h2>
                                                    </div>
                                                    <a href="#" className="e-pas">
                                                        <span>Change Password</span>
                                                        <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 13L7 7L0.999999 1" stroke="#9698B4" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>

                                                    </a>
                                                </div>
                                                <div className="dash-bo">
                                                    <div className="heading ">
                                                        <h2>About</h2>
                                                    </div>
                                                    <a href="#" className="e-pass">                                            
                                                        Terms & Conditions
                                                    </a>
                                                    <a href="#" className="e-pass">                                            
                                                        Privacy Policy
                                                    </a>
                                                </div>
                                                <h6>V0.001.02</h6>
                                            </div>
                                        
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

export default Settings;