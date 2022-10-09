import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import sign11Img from "../../assets/images/sing11.png";
import billeilishImg from "../../assets/images/billeilish.png";
import l1Img from "../../assets/images/l1.png";
import l2Img from "../../assets/images/l2.png";
import l3Img from "../../assets/images/l3.png";
import l4Img from "../../assets/images/l4.png";
import Bottom from "../Reuse/Bottom";
const Likedsongs = (props) => {
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
                                        <div className="main-header liked-header">
                                            <div className="flex-d">
                                                <button className="arrow-svg">
                                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 1L1 7L7 13" stroke="white" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                                <h4 className="mr-0">Add Songs</h4>
                                                <div className="profile ">
                                                    <img src={sign11Img} alt="" />
                                                </div>
                                            </div>
                                            <form className="search-form">
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

                                            </form>
                                        </div>
                                        <main className="like-main">
                                            <div className="background">
                                                <img src={billeilishImg} alt="" />
                                            </div>
                                            <div className="song-details">
                                                <div className="">
                                                    <h5>Liked Songs</h5>
                                                    <p>12,568 Songs</p>
                                                </div>
                                                <button className="primary-btn">
                                                    Add Songs
                                                </button>
                                                <button className="play-btn">
                                                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12 9.73205C13.3333 8.96225 13.3333 7.03775 12 6.26795L3 1.0718C1.66667 0.301996 7.31543e-07 1.26424 6.64245e-07 2.80385L2.09983e-07 13.1961C1.42685e-07 14.7358 1.66667 15.698 3 14.9282L12 9.73205Z"
                                                            fill="white" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="slick-heading">
                                                <h5>Recent Searches</h5>
                                            </div>
                                            <ul className="add-list add-p">
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
                                                        <div className="fav-group active d-flex align-items-center">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" fill="#FA3174"/>
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" stroke="#FA3174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
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
                                                                <img src={l1Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group active d-flex align-items-center">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" fill="#FA3174"/>
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" stroke="#FA3174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
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
                                                        <div className="fav-group active d-flex align-items-center">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" fill="#FA3174"/>
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" stroke="#FA3174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
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
                                                                <img src={l4Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group active d-flex align-items-center">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" fill="#FA3174"/>
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" stroke="#FA3174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
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

export default Likedsongs;