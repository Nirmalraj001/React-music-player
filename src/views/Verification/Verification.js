import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

const Verification = (props) => {
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
                                        <h3>Verification Code</h3>
                                        <h6>Enter verification code sent to <span> 956****55*78 </span> </h6>
                                    </div>
                                    <form className="pwb-form pt-4 ">
                                        <div className="ver-form ">
                                            <div className="form-group mx-2">
                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                            <div className="form-group mx-2">
                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                            <div className="form-group mx-2">
                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                            <div className="form-group mx-2">
                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn  primary-btn w-100 mt-5">
                                            Submit
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </Fragment>
    );
   
}

export default Verification;