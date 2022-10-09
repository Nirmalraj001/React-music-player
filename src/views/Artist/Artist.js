import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import sing1Img from '../../assets/images/sing1.png';
import sing2Img from '../../assets/images/sing2.png';
import sing3Img from '../../assets/images/sing3.png';
import sing4Img from '../../assets/images/sing4.png';
import sing5Img from '../../assets/images/sing5.png';
import sing6Img from '../../assets/images/sing6.png';
import sing7Img from '../../assets/images/sing7.png';
import sing8Img from '../../assets/images/sing8.png';
import sing9Img from '../../assets/images/sing9.png';
import sing10Img from '../../assets/images/sing10.png';
import sing11Img from '../../assets/images/sing11.png';
import sing12Img from '../../assets/images/sing12.png';


const Artist = (props) => {
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
                                <div className="full-new-mob home-screen pos-unset p-0">
                                    <div className="artist-main p-3">
                                        <div>
                                            <div>
                                                <div className="skip-btn">
                                                    <button>
                                                        Skip
                                                    </button>
                                                </div>
                                                <div className="heading text-center pt-4">
                                                    <h3>Select Artist</h3>
                                                    <h5>Select your favourite Artist</h5>
                                                </div>
                                            </div>
                                            <div className="card-columns">
                                                <button className="grid-box-btn">
                                                    <img src={sing1Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn active">
                                                    <img src={sing8Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing5Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing11Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn active">
                                                    <img src={sing6Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing9Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn active">
                                                    <img src={sing5Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing2Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing11Img} alt="" />
                                                </button>

                                                <button className="grid-box-btn">
                                                    <img src={sing12Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn active">
                                                    <img src={sing7Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing8Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing11Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing5Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn active">
                                                    <img src={sing12Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing8Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing1Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn active">
                                                    <img src="assets/images/sing3.png" alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing5Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing11Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn active">
                                                    <img src={sing6Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing9Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn active">
                                                    <img src={sing5Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing2Img} alt="" />
                                                </button>
                                                <button className="grid-box-btn">
                                                    <img src={sing11Img} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-box-shadow">
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

export default Artist;