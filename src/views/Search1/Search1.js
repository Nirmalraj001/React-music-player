import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import l1Img from "../../assets/images/l1.png";
import l2Img from "../../assets/images/l2.png";
import l3Img from "../../assets/images/l3.png";
import Bottom from "../Reuse/Bottom";

const Search = (props) => {    
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
                                            <form className="search-form search-w">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Search music..." />
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z"
                                                            stroke="#9698B4" stroke-width="1.25" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path d="M17.5 17.5L12.5 12.5" stroke="#9698B4" stroke-width="1.25"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="filter-bg">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.58342 4.16666H15.4168C15.5368 4.20875 15.6456 4.27775 15.7348 4.36838C15.824 4.459 15.8913 4.56885 15.9315 4.68951C15.9718 4.81016 15.9838 4.93842 15.9668 5.06446C15.9498 5.1905 15.9042 5.31098 15.8334 5.41666L11.6668 9.99999V15.8333L8.33342 13.3333V9.99999L4.16676 5.41666C4.096 5.31098 4.05037 5.1905 4.03336 5.06446C4.01636 4.93842 4.02842 4.81016 4.06864 4.68951C4.10886 4.56885 4.17616 4.459 4.26539 4.36838C4.35462 4.27775 4.46341 4.20875 4.58342 4.16666Z"
                                                            stroke="#9698B4" stroke-width="1.25" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>
                                                            <div className="ChkFrm login-check">
                                                                <div className="form-check form-group pl-0">
                                                                    <input type="checkbox" className="form-check-input"
                                                                        id="exampleCheck" checked/>
                                                                    <label className="form-check-label mt-1" for="exampleCheck"><span
                                                                            className="">
                                                                            All</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="ChkFrm login-check">
                                                                <div className="form-check form-group pl-0">
                                                                    <input type="checkbox" className="form-check-input"
                                                                        id="exampleCheck1" checked/>
                                                                    <label className="form-check-label mt-1" for="exampleCheck"><span
                                                                            className="">
                                                                            Poppular</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="ChkFrm login-check">
                                                                <div className="form-check form-group pl-0">
                                                                    <input type="checkbox" className="form-check-input"
                                                                        id="exampleCheck2" checked/>
                                                                    <label className="form-check-label mt-1" for="exampleCheck"><span
                                                                            className="">
                                                                            Newest</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="ChkFrm login-check">
                                                                <div className="form-check form-group pl-0">
                                                                    <input type="checkbox" className="form-check-input"
                                                                        id="exampleCheck3" />
                                                                    <label className="form-check-label mt-1" for="exampleCheck"><span
                                                                            className="">
                                                                            Indie</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div className="ChkFrm login-check">
                                                                <div className="form-check form-group pl-0">
                                                                    <input type="checkbox" className="form-check-input"
                                                                        id="exampleCheck4" />
                                                                    <label className="form-check-label mt-1" for="exampleCheck"><span
                                                                            className="">
                                                                            Pop</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>                                                
                                            </form>
                                        </div>
                                        <main className="pad-top p-t-60">
                                            <div className="slick-heading">
                                                <h5>Recent Searches</h5>
                                            </div>
                                            <ul className="add-list">
                                                <li className="list-song">
                                                    <a className="list-songs" data-toggle="modal" data-target="#song">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={l2Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group active">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle  className="add-fav">
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.99984 10.8333C10.4601 10.8333 10.8332 10.4602 10.8332 9.99999C10.8332 9.53975 10.4601 9.16666 9.99984 9.16666C9.5396 9.16666 9.1665 9.53975 9.1665 9.99999C9.1665 10.4602 9.5396 10.8333 9.99984 10.8333Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path
                                                                        d="M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.5396 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.5396 16.6667 9.99984 16.6667Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path
                                                                        d="M9.99984 5.00001C10.4601 5.00001 10.8332 4.62691 10.8332 4.16668C10.8332 3.70644 10.4601 3.33334 9.99984 3.33334C9.5396 3.33334 9.1665 3.70644 9.1665 4.16668C9.1665 4.62691 9.5396 5.00001 9.99984 5.00001Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                    <DropdownItem>Header</DropdownItem>
                                                                    <DropdownItem>Action</DropdownItem>
                                                                    <DropdownItem>Another Action</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={l1Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group active">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle  className="add-fav">
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.99984 10.8333C10.4601 10.8333 10.8332 10.4602 10.8332 9.99999C10.8332 9.53975 10.4601 9.16666 9.99984 9.16666C9.5396 9.16666 9.1665 9.53975 9.1665 9.99999C9.1665 10.4602 9.5396 10.8333 9.99984 10.8333Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path
                                                                        d="M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.5396 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.5396 16.6667 9.99984 16.6667Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path
                                                                        d="M9.99984 5.00001C10.4601 5.00001 10.8332 4.62691 10.8332 4.16668C10.8332 3.70644 10.4601 3.33334 9.99984 3.33334C9.5396 3.33334 9.1665 3.70644 9.1665 4.16668C9.1665 4.62691 9.5396 5.00001 9.99984 5.00001Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                    <DropdownItem>Header</DropdownItem>
                                                                    <DropdownItem>Action</DropdownItem>
                                                                    <DropdownItem>Another Action</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
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
                                                        <div className="fav-group active">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle  className="add-fav">
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.99984 10.8333C10.4601 10.8333 10.8332 10.4602 10.8332 9.99999C10.8332 9.53975 10.4601 9.16666 9.99984 9.16666C9.5396 9.16666 9.1665 9.53975 9.1665 9.99999C9.1665 10.4602 9.5396 10.8333 9.99984 10.8333Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path
                                                                        d="M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.5396 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.5396 16.6667 9.99984 16.6667Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path
                                                                        d="M9.99984 5.00001C10.4601 5.00001 10.8332 4.62691 10.8332 4.16668C10.8332 3.70644 10.4601 3.33334 9.99984 3.33334C9.5396 3.33334 9.1665 3.70644 9.1665 4.16668C9.1665 4.62691 9.5396 5.00001 9.99984 5.00001Z"
                                                                        stroke="#494B63" stroke-width="1.25" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                    <DropdownItem>Header</DropdownItem>
                                                                    <DropdownItem>Action</DropdownItem>
                                                                    <DropdownItem>Another Action</DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* <div className="slick-heading">
                                                <h5>Browse All</h5>
                                            </div>
                                            <div className="browse-wrapper">
                                                <div className="box-wrapper b1">
                                                    <div className="box-shuffel">
                                                        <img src={b1Img} className="b1" alt="" />
                                                        <img src={b2Img} className="b2" alt="" />
                                                        <img src={b3Img} className="b3" alt="" />
                                                    </div>
                                                    <p>New Releases</p>
                                                </div>
                                                <div className="box-wrapper b2">
                                                    <div className="box-shuffel">
                                                        <img src={b1Img} className="b1" alt="" />
                                                        <img src={b2Img} className="b2" alt="" />
                                                        <img src={b3Img} className="b3" alt="" />
                                                    </div>
                                                    <p>New Releases</p>
                                                </div>
                                                <div className="box-wrapper b3">
                                                    <div className="box-shuffel">
                                                        <img src={b1Img} className="b1" alt="" />
                                                        <img src={b2Img} className="b2" alt="" />
                                                        <img src={b3Img} className="b3" alt="" />
                                                    </div>
                                                    <p>New Releases</p>
                                                </div>
                                                <div className="box-wrapper b4">
                                                    <div className="box-shuffel">
                                                        <img src={b1Img} className="b1" alt="" />
                                                        <img src={b2Img} className="b2" alt="" />
                                                        <img src={b3Img} className="b3" alt="" />
                                                    </div>
                                                    <p>New Releases</p>
                                                </div>
                                                <div className="box-wrapper b5">
                                                    <div className="box-shuffel">
                                                        <img src={b1Img} className="b1" alt="" />
                                                        <img src={b2Img} className="b2" alt="" />
                                                        <img src={b3Img} className="b3" alt="" />
                                                    </div>
                                                    <p>New Releases</p>
                                                </div>
                                            </div> */}
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

export default Search;