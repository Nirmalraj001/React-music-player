import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

import profileImg from "../../assets/images/profileimg.png";
import l2Img from "../../assets/images/l2.png";
import l3Img from "../../assets/images/l3.png";
import l4Img from "../../assets/images/l4.png";
import l5Img from "../../assets/images/l5.png";
import re3Img from "../../assets/images/re3.png";
import re1Img from "../../assets/images/re1.png";
import re4Img from "../../assets/images/re4.png";
import re6Img from "../../assets/images/re6.png";


const Myprofile = (props) => {
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
                                    <div className="main-screen">
                                        <div className="main-header">
                                            <div className="flex-d">
                                                <button className="arrow-svg">
                                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 1L1 7L7 13" stroke="white" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </button>
                                                <h4 className="mr-0">My Profile</h4>
                                                <a href="#" className="profile " data-toggle="modal" data-target="#exampleModalCenter">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M10.0458 3.0365C10.5428 0.987833 13.4572 0.987833 13.9542 3.0365C14.0287 3.34427 14.1749 3.63008 14.3808 3.87067C14.5867 4.11126 14.8465 4.29983 15.1391 4.42104C15.4317 4.54224 15.7487 4.59266 16.0644 4.56818C16.3801 4.5437 16.6856 4.44502 16.956 4.28017C18.7562 3.1835 20.8177 5.24383 19.721 7.04517C19.5564 7.31543 19.4579 7.62073 19.4334 7.93624C19.409 8.25174 19.4594 8.56856 19.5804 8.86094C19.7015 9.15332 19.8899 9.41301 20.1302 9.61889C20.3705 9.82478 20.656 9.97106 20.9635 10.0458C23.0122 10.5428 23.0122 13.4572 20.9635 13.9542C20.6557 14.0287 20.3699 14.1749 20.1293 14.3808C19.8887 14.5867 19.7002 14.8465 19.579 15.1391C19.4578 15.4317 19.4073 15.7487 19.4318 16.0644C19.4563 16.3801 19.555 16.6856 19.7198 16.956C20.8165 18.7562 18.7562 20.8177 16.9548 19.721C16.6846 19.5564 16.3793 19.4579 16.0638 19.4334C15.7483 19.409 15.4314 19.4594 15.1391 19.5804C14.8467 19.7015 14.587 19.8899 14.3811 20.1302C14.1752 20.3705 14.0289 20.656 13.9542 20.9635C13.4572 23.0122 10.5428 23.0122 10.0458 20.9635C9.97126 20.6557 9.82508 20.3699 9.61917 20.1293C9.41327 19.8887 9.15346 19.7002 8.86091 19.579C8.56835 19.4578 8.25131 19.4073 7.93558 19.4318C7.61986 19.4563 7.31438 19.555 7.044 19.7198C5.24383 20.8165 3.18233 18.7562 4.279 16.9548C4.44362 16.6846 4.54214 16.3793 4.56656 16.0638C4.59099 15.7483 4.54062 15.4314 4.41955 15.1391C4.29848 14.8467 4.11014 14.587 3.86982 14.3811C3.6295 14.1752 3.34399 14.0289 3.0365 13.9542C0.987833 13.4572 0.987833 10.5428 3.0365 10.0458C3.34427 9.97126 3.63008 9.82508 3.87067 9.61917C4.11126 9.41327 4.29983 9.15346 4.42104 8.86091C4.54224 8.56835 4.59266 8.25131 4.56818 7.93558C4.5437 7.61986 4.44502 7.31438 4.28017 7.044C3.1835 5.24383 5.24383 3.18233 7.04517 4.279C8.21183 4.98833 9.72383 4.36067 10.0458 3.0365Z"
                                                            stroke="white" stroke-width="1.75" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                                                            stroke="white" stroke-width="1.75" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <main className="">
                                            <div className="profile-box">
                                                <div className="profile-circ">
                                                    <img src={profileImg} className="profile-img" alt="" />
                                                    <a href="#">
                                                        <div>
                                                            <input type="file" className="upload" id="upload-btn-2" />
                                                            <label className="file-upload" for="upload-btn-2">
                                                                <span className="edit">
                                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M7 9.33333C7.9665 9.33333 8.75 8.54983 8.75 7.58333C8.75 6.61683 7.9665 5.83333 7 5.83333C6.0335 5.83333 5.25 6.61683 5.25 7.58333C5.25 8.54983 6.0335 9.33333 7 9.33333Z"
                                                                            stroke="white" stroke-width="1.25"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path
                                                                            d="M2.91667 4.08333H4.08333C4.39275 4.08333 4.6895 3.96041 4.90829 3.74162C5.12708 3.52283 5.25 3.22608 5.25 2.91666C5.25 2.76195 5.31146 2.61358 5.42085 2.50418C5.53025 2.39479 5.67862 2.33333 5.83333 2.33333H7M12.25 6.41666V10.5C12.25 10.8094 12.1271 11.1062 11.9083 11.325C11.6895 11.5437 11.3928 11.6667 11.0833 11.6667H2.91667C2.60725 11.6667 2.3105 11.5437 2.09171 11.325C1.87292 11.1062 1.75 10.8094 1.75 10.5V5.24999C1.75 4.94058 1.87292 4.64383 2.09171 4.42504C2.3105 4.20624 2.60725 4.08333 2.91667 4.08333"
                                                                            stroke="white" stroke-width="1.25"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M8.75 3.5H12.25" stroke="white" stroke-width="1.25"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M10.5 1.75V5.25" stroke="white" stroke-width="1.25"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="profile-name logout-btn">
                                                    <a className="" href="editprofile.html">
                                                        Edit Profile
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="heading-details">
                                                <h4>Lance
                                                    Henderson</h4>
                                                <h6>@lan_hen</h6>
                                            </div>
                                            <div className="slick-heading">
                                                <h4>My Playlists</h4>
                                            </div>
                                            <ul className="add-list">
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={l2Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group ">
                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L7 7L1 13" stroke="#494B63" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={l3Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group">
                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L7 7L1 13" stroke="#494B63" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={l4Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group ">
                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L7 7L1 13" stroke="#494B63" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={l5Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group ">
                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L7 7L1 13" stroke="#494B63" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={re1Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group ">
                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L7 7L1 13" stroke="#494B63" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={re3Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group ">
                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L7 7L1 13" stroke="#494B63" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={re4Img}alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group ">
                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L7 7L1 13" stroke="#494B63" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={re6Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group ">
                                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 1L7 7L1 13" stroke="#494B63" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>
                                        </main>
                                        <div className="logout-btn">
                                            <button  data-toggle="modal" data-target="#edit">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.3333 9.33332V6.99999C16.3333 6.38115 16.0875 5.78766 15.6499 5.35007C15.2123 4.91249 14.6188 4.66666 14 4.66666H5.83333C5.21449 4.66666 4.621 4.91249 4.18342 5.35007C3.74583 5.78766 3.5 6.38115 3.5 6.99999V21C3.5 21.6188 3.74583 22.2123 4.18342 22.6499C4.621 23.0875 5.21449 23.3333 5.83333 23.3333H14C14.6188 23.3333 15.2123 23.0875 15.6499 22.6499C16.0875 22.2123 16.3333 21.6188 16.3333 21V18.6667"
                                                        stroke="white" stroke-width="1.75" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M8.16699 14H24.5003L21.0003 10.5M21.0003 17.5L24.5003 14"
                                                        stroke="white" stroke-width="1.75" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                Logout
                                            </button>
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

export default Myprofile;