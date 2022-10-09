import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

import sign11Img from "../../assets/images/sing11.png";
import p1Img from "../../assets/images/p1.png";
import p2Img from "../../assets/images/p2.png";
import p3Img from "../../assets/images/p3.png";
import p4Img from "../../assets/images/p4.png";
import p5Img from "../../assets/images/p5.png";
import Sidebar from "../Reuse/Sidebar";
import Bottom from "../Reuse/Bottom";


const Playlist = (props) => {    
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
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
                                <div className="full-new-mob">
                                    <div className={isActive ? "main-screen sidebar-close" : "main-screen sidebar-close sidebar-open"} id="sideBar" >
                                        <div className="sidebar">
                                            <button className="close-btn" onClick={handleToggle}>
                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.0001 5.66666L5.66675 17" stroke="white" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M5.66675 5.66666L17.0001 17" stroke="white" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <div className="profile-details">
                                                <div className="thumb">
                                                    <img src={sign11Img} alt="" />
                                                </div>
                                                <div className="pr-detail">
                                                    <h4>John Muller</h4>
                                                    <h5>Good Morning</h5>
                                                </div>
                                            </div>
                                            <Sidebar/>
                                        </div>
                                        <div className="main-header">
                                            <div className="flex-d">
                                                {/* <div className="d-flex"> */}
                                                    <button className="arrow-svg" onClick={handleToggle}>
                                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="16" height="4" rx="2" fill="white" />
                                                            <rect y="6" width="13" height="4" rx="2" fill="white" />
                                                        </svg>
                                                    </button>
                                                    <h4>Playlist</h4>
                                                {/* </div> */}
                                                <div className="music-add">
                                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M11 18V7H20V18" stroke="white" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M11 10H20" stroke="white" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    <button className="add-music">
                                                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="2" width="1" height="5" rx="0.5" fill="white" />
                                                            <rect y="3" width="1" height="5" rx="0.5" transform="rotate(-90 0 3)"
                                                                fill="white" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>                                           
                                        </div>
                                        <main className="">                                           
                                        <div className="sub-head">
                                    <a href="#" className="box">
                                        <div className="imgwrapper">
                                            <img src={p1Img} alt="" />
                                        </div>
                                        <div className="details">
                                            <h5>
                                                Sweet 80s</h5>
                                            <h6>25 Songs</h6>

                                        </div>
                                    </a>
                                    <a href="#" className="box">
                                        <div className="imgwrapper">
                                            <img src={p2Img} alt="" />
                                        </div>
                                        <div className="details">
                                            <h5>
                                                Crazy Gems</h5>
                                            <h6>2k Songs</h6>

                                        </div>
                                    </a>
                                    <a href="#" className="box">
                                        <div className="imgwrapper">
                                            <img src={p3Img} alt="" />
                                        </div>
                                        <div className="details">
                                            <h5>
                                                Motive Mist</h5>
                                            <h6>25 Songs</h6>

                                        </div>
                                    </a>
                                    <a href="#" className="box">
                                        <div className="imgwrapper">
                                            <img src={p4Img} alt="" />
                                        </div>
                                        <div className="details">
                                            <h5>
                                                Reborn of Re..</h5>
                                            <h6>2k Songs</h6>

                                        </div>
                                    </a>
                                    <a href="#" className="box">
                                        <div className="imgwrapper">
                                            <img src={p5Img} alt="" />
                                        </div>
                                        <div className="details">
                                            <h5>
                                                Sweet 80s</h5>
                                            <h6>25 Songs</h6>

                                        </div>
                                    </a>

                                </div>                                           
                                        </main>                                        
                                        <Bottom/>
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

export default Playlist;