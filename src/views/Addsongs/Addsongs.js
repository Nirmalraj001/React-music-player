import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import l2Img from '../../assets/images/l2.png';
import l3Img from '../../assets/images/l3.png';
import l4Img from '../../assets/images/l4.png';
import l5Img from '../../assets/images/l5.png';
import re1Img from '../../assets/images/re1.png';
import re3Img from '../../assets/images/re3.png';
import re4Img from '../../assets/images/re4.png';
import re6Img from '../../assets/images/re6.png';
import Backicon from '../../assets/images/musicback.png'

import sing11Img from '../../assets/images/sing11.png';
import Bottom from "../Reuse/Bottom";

const Addsongs = (props) => {

    // const dispatch = useDispatch();
    const path = window.location.pathname?.split('/')

    console.log(path[3], "path[3]")

    // const { Customizelist } = useCustomizeContext()

    const str =  "invert(95%) sepia(0%) saturate(7482%) hue-rotate(94deg) brightness(109%) contrast(104%)"
    const arr = str.split(/[()]/)

    const style = {
        headerIcon: {
            width: "20px",
            height: "20px",
            WebkitFilter: `invert(${arr[1]}) sepia(${arr[3]}) saturate(${arr[5]}) hue-rotate(${arr[7]}) brightness(${arr[9]}) contrast(${arr[11]})`

        }
    }

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
                                        {path[3] !== "appcustomizelist" ?
                                            <div className="main-header">
                                                <div className="flex-d">
                                                    <img src={Backicon} alt="" style={style.headerIcon} />

                                                    <h4 className="mr-0" style={style.header}>Song List</h4>
                                                    <div className="profile ">
                                                        {/* <img src={sing11Img} alt="" /> */}
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
                                            :
                                            <div className="main-header">
                                                <div className="flex-d">
                                                    <img src={Backicon} alt="" style={style.headerIcon} />

                                                    <h4 className="mr-0" style={style.header}>Song List</h4>
                                                    <div className="profile ">
                                                        {/* <img src={sing11Img} alt="" /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        <main className="pad-top1">
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
                                                        <div className="fav-group active">
                                                            <button className="add-fav active">
                                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M16.8752 9.441L10.0002 16.25L3.12519 9.441M3.12519 9.441C2.67172 8.99973 2.31453 8.46935 2.07611 7.88325C1.83769 7.29715 1.72321 6.66804 1.73987 6.03552C1.75653 5.40301 1.90398 4.78079 2.17292 4.20806C2.44187 3.63533 2.82649 3.12448 3.30256 2.7077C3.77863 2.29091 4.33584 1.97721 4.9391 1.78636C5.54237 1.5955 6.17862 1.53162 6.80778 1.59873C7.43695 1.66585 8.0454 1.86251 8.59483 2.17633C9.14426 2.49015 9.62276 2.91433 10.0002 3.42217C10.3793 2.91802 10.8583 2.49754 11.4074 2.18705C11.9564 1.87656 12.5636 1.68274 13.191 1.61773C13.8184 1.55271 14.4525 1.61789 15.0536 1.80919C15.6546 2.00049 16.2097 2.3138 16.6841 2.7295C17.1585 3.1452 17.542 3.65434 17.8106 4.22507C18.0792 4.79579 18.227 5.41581 18.245 6.04632C18.2629 6.67682 18.1505 7.30424 17.9148 7.88931C17.6791 8.47438 17.3252 9.0045 16.8752 9.4465"
                                                                        stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="add-fav ">

                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                                        stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 18V7H20V18" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 10H20" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div className="add-songs">
                                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
                                                                            fill="#494B63" stroke="#494B63" stroke-width="1.75"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <rect x="5" y="3" width="1" height="5" rx="0.5"
                                                                            fill="white" />
                                                                        <rect x="3" y="6" width="1" height="5" rx="0.5"
                                                                            transform="rotate(-90 3 6)" fill="white" />
                                                                    </svg>
                                                                </div>
                                                            </button>
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
                                                            <button className="add-fav">
                                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M16.8752 9.441L10.0002 16.25L3.12519 9.441M3.12519 9.441C2.67172 8.99973 2.31453 8.46935 2.07611 7.88325C1.83769 7.29715 1.72321 6.66804 1.73987 6.03552C1.75653 5.40301 1.90398 4.78079 2.17292 4.20806C2.44187 3.63533 2.82649 3.12448 3.30256 2.7077C3.77863 2.29091 4.33584 1.97721 4.9391 1.78636C5.54237 1.5955 6.17862 1.53162 6.80778 1.59873C7.43695 1.66585 8.0454 1.86251 8.59483 2.17633C9.14426 2.49015 9.62276 2.91433 10.0002 3.42217C10.3793 2.91802 10.8583 2.49754 11.4074 2.18705C11.9564 1.87656 12.5636 1.68274 13.191 1.61773C13.8184 1.55271 14.4525 1.61789 15.0536 1.80919C15.6546 2.00049 16.2097 2.3138 16.6841 2.7295C17.1585 3.1452 17.542 3.65434 17.8106 4.22507C18.0792 4.79579 18.227 5.41581 18.245 6.04632C18.2629 6.67682 18.1505 7.30424 17.9148 7.88931C17.6791 8.47438 17.3252 9.0045 16.8752 9.4465"
                                                                        stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="add-fav add-mus">

                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                                        stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 18V7H20V18" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 10H20" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div className="add-songs">
                                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
                                                                            fill="#494B63" stroke="#494B63" stroke-width="1.75"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <rect x="5" y="3" width="1" height="5" rx="0.5"
                                                                            fill="white" />
                                                                        <rect x="3" y="6" width="1" height="5" rx="0.5"
                                                                            transform="rotate(-90 3 6)" fill="white" />
                                                                    </svg>
                                                                </div>
                                                            </button>
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
                                                            <button className="add-fav ">
                                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M16.8752 9.441L10.0002 16.25L3.12519 9.441M3.12519 9.441C2.67172 8.99973 2.31453 8.46935 2.07611 7.88325C1.83769 7.29715 1.72321 6.66804 1.73987 6.03552C1.75653 5.40301 1.90398 4.78079 2.17292 4.20806C2.44187 3.63533 2.82649 3.12448 3.30256 2.7077C3.77863 2.29091 4.33584 1.97721 4.9391 1.78636C5.54237 1.5955 6.17862 1.53162 6.80778 1.59873C7.43695 1.66585 8.0454 1.86251 8.59483 2.17633C9.14426 2.49015 9.62276 2.91433 10.0002 3.42217C10.3793 2.91802 10.8583 2.49754 11.4074 2.18705C11.9564 1.87656 12.5636 1.68274 13.191 1.61773C13.8184 1.55271 14.4525 1.61789 15.0536 1.80919C15.6546 2.00049 16.2097 2.3138 16.6841 2.7295C17.1585 3.1452 17.542 3.65434 17.8106 4.22507C18.0792 4.79579 18.227 5.41581 18.245 6.04632C18.2629 6.67682 18.1505 7.30424 17.9148 7.88931C17.6791 8.47438 17.3252 9.0045 16.8752 9.4465"
                                                                        stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="add-fav">

                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                                        stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 18V7H20V18" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 10H20" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div className="add-songs">
                                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
                                                                            fill="#494B63" stroke="#494B63" stroke-width="1.75"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <rect x="5" y="3" width="1" height="5" rx="0.5"
                                                                            fill="white" />
                                                                        <rect x="3" y="6" width="1" height="5" rx="0.5"
                                                                            transform="rotate(-90 3 6)" fill="white" />
                                                                    </svg>
                                                                </div>
                                                            </button>
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
                                                        <div className="fav-group active">
                                                            <button className="add-fav active">
                                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M16.8752 9.441L10.0002 16.25L3.12519 9.441M3.12519 9.441C2.67172 8.99973 2.31453 8.46935 2.07611 7.88325C1.83769 7.29715 1.72321 6.66804 1.73987 6.03552C1.75653 5.40301 1.90398 4.78079 2.17292 4.20806C2.44187 3.63533 2.82649 3.12448 3.30256 2.7077C3.77863 2.29091 4.33584 1.97721 4.9391 1.78636C5.54237 1.5955 6.17862 1.53162 6.80778 1.59873C7.43695 1.66585 8.0454 1.86251 8.59483 2.17633C9.14426 2.49015 9.62276 2.91433 10.0002 3.42217C10.3793 2.91802 10.8583 2.49754 11.4074 2.18705C11.9564 1.87656 12.5636 1.68274 13.191 1.61773C13.8184 1.55271 14.4525 1.61789 15.0536 1.80919C15.6546 2.00049 16.2097 2.3138 16.6841 2.7295C17.1585 3.1452 17.542 3.65434 17.8106 4.22507C18.0792 4.79579 18.227 5.41581 18.245 6.04632C18.2629 6.67682 18.1505 7.30424 17.9148 7.88931C17.6791 8.47438 17.3252 9.0045 16.8752 9.4465"
                                                                        stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="add-fav add-mus">

                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                                        stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 18V7H20V18" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 10H20" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div className="add-songs">
                                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
                                                                            fill="#494B63" stroke="#494B63" stroke-width="1.75"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <rect x="5" y="3" width="1" height="5" rx="0.5"
                                                                            fill="white" />
                                                                        <rect x="3" y="6" width="1" height="5" rx="0.5"
                                                                            transform="rotate(-90 3 6)" fill="white" />
                                                                    </svg>
                                                                </div>
                                                            </button>
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
                                                        <div className="fav-group active">
                                                            <button className="add-fav active">
                                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M16.8752 9.441L10.0002 16.25L3.12519 9.441M3.12519 9.441C2.67172 8.99973 2.31453 8.46935 2.07611 7.88325C1.83769 7.29715 1.72321 6.66804 1.73987 6.03552C1.75653 5.40301 1.90398 4.78079 2.17292 4.20806C2.44187 3.63533 2.82649 3.12448 3.30256 2.7077C3.77863 2.29091 4.33584 1.97721 4.9391 1.78636C5.54237 1.5955 6.17862 1.53162 6.80778 1.59873C7.43695 1.66585 8.0454 1.86251 8.59483 2.17633C9.14426 2.49015 9.62276 2.91433 10.0002 3.42217C10.3793 2.91802 10.8583 2.49754 11.4074 2.18705C11.9564 1.87656 12.5636 1.68274 13.191 1.61773C13.8184 1.55271 14.4525 1.61789 15.0536 1.80919C15.6546 2.00049 16.2097 2.3138 16.6841 2.7295C17.1585 3.1452 17.542 3.65434 17.8106 4.22507C18.0792 4.79579 18.227 5.41581 18.245 6.04632C18.2629 6.67682 18.1505 7.30424 17.9148 7.88931C17.6791 8.47438 17.3252 9.0045 16.8752 9.4465"
                                                                        stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="add-fav add-mus">

                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                                        stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 18V7H20V18" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 10H20" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div className="add-songs">
                                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
                                                                            fill="#494B63" stroke="#494B63" stroke-width="1.75"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <rect x="5" y="3" width="1" height="5" rx="0.5"
                                                                            fill="white" />
                                                                        <rect x="3" y="6" width="1" height="5" rx="0.5"
                                                                            transform="rotate(-90 3 6)" fill="white" />
                                                                    </svg>
                                                                </div>
                                                            </button>
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
                                                        <div className="fav-group">
                                                            <button className="add-fav">
                                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M16.8752 9.441L10.0002 16.25L3.12519 9.441M3.12519 9.441C2.67172 8.99973 2.31453 8.46935 2.07611 7.88325C1.83769 7.29715 1.72321 6.66804 1.73987 6.03552C1.75653 5.40301 1.90398 4.78079 2.17292 4.20806C2.44187 3.63533 2.82649 3.12448 3.30256 2.7077C3.77863 2.29091 4.33584 1.97721 4.9391 1.78636C5.54237 1.5955 6.17862 1.53162 6.80778 1.59873C7.43695 1.66585 8.0454 1.86251 8.59483 2.17633C9.14426 2.49015 9.62276 2.91433 10.0002 3.42217C10.3793 2.91802 10.8583 2.49754 11.4074 2.18705C11.9564 1.87656 12.5636 1.68274 13.191 1.61773C13.8184 1.55271 14.4525 1.61789 15.0536 1.80919C15.6546 2.00049 16.2097 2.3138 16.6841 2.7295C17.1585 3.1452 17.542 3.65434 17.8106 4.22507C18.0792 4.79579 18.227 5.41581 18.245 6.04632C18.2629 6.67682 18.1505 7.30424 17.9148 7.88931C17.6791 8.47438 17.3252 9.0045 16.8752 9.4465"
                                                                        stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="add-fav ">

                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                                        stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 18V7H20V18" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 10H20" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div className="add-songs">
                                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
                                                                            fill="#494B63" stroke="#494B63" stroke-width="1.75"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <rect x="5" y="3" width="1" height="5" rx="0.5"
                                                                            fill="white" />
                                                                        <rect x="3" y="6" width="1" height="5" rx="0.5"
                                                                            transform="rotate(-90 3 6)" fill="white" />
                                                                    </svg>
                                                                </div>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={re4Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5>God’s Plan for you</h5>
                                                                <h6>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        <div className="fav-group ">
                                                            <button className="add-fav ">
                                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M16.8752 9.441L10.0002 16.25L3.12519 9.441M3.12519 9.441C2.67172 8.99973 2.31453 8.46935 2.07611 7.88325C1.83769 7.29715 1.72321 6.66804 1.73987 6.03552C1.75653 5.40301 1.90398 4.78079 2.17292 4.20806C2.44187 3.63533 2.82649 3.12448 3.30256 2.7077C3.77863 2.29091 4.33584 1.97721 4.9391 1.78636C5.54237 1.5955 6.17862 1.53162 6.80778 1.59873C7.43695 1.66585 8.0454 1.86251 8.59483 2.17633C9.14426 2.49015 9.62276 2.91433 10.0002 3.42217C10.3793 2.91802 10.8583 2.49754 11.4074 2.18705C11.9564 1.87656 12.5636 1.68274 13.191 1.61773C13.8184 1.55271 14.4525 1.61789 15.0536 1.80919C15.6546 2.00049 16.2097 2.3138 16.6841 2.7295C17.1585 3.1452 17.542 3.65434 17.8106 4.22507C18.0792 4.79579 18.227 5.41581 18.245 6.04632C18.2629 6.67682 18.1505 7.30424 17.9148 7.88931C17.6791 8.47438 17.3252 9.0045 16.8752 9.4465"
                                                                        stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="add-fav">

                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                                        stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 18V7H20V18" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 10H20" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div className="add-songs">
                                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
                                                                            fill="#494B63" stroke="#494B63" stroke-width="1.75"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <rect x="5" y="3" width="1" height="5" rx="0.5"
                                                                            fill="white" />
                                                                        <rect x="3" y="6" width="1" height="5" rx="0.5"
                                                                            transform="rotate(-90 3 6)" fill="white" />
                                                                    </svg>
                                                                </div>
                                                            </button>
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
                                                        <div className="fav-group active">
                                                            <button className="add-fav active">
                                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M16.8752 9.441L10.0002 16.25L3.12519 9.441M3.12519 9.441C2.67172 8.99973 2.31453 8.46935 2.07611 7.88325C1.83769 7.29715 1.72321 6.66804 1.73987 6.03552C1.75653 5.40301 1.90398 4.78079 2.17292 4.20806C2.44187 3.63533 2.82649 3.12448 3.30256 2.7077C3.77863 2.29091 4.33584 1.97721 4.9391 1.78636C5.54237 1.5955 6.17862 1.53162 6.80778 1.59873C7.43695 1.66585 8.0454 1.86251 8.59483 2.17633C9.14426 2.49015 9.62276 2.91433 10.0002 3.42217C10.3793 2.91802 10.8583 2.49754 11.4074 2.18705C11.9564 1.87656 12.5636 1.68274 13.191 1.61773C13.8184 1.55271 14.4525 1.61789 15.0536 1.80919C15.6546 2.00049 16.2097 2.3138 16.6841 2.7295C17.1585 3.1452 17.542 3.65434 17.8106 4.22507C18.0792 4.79579 18.227 5.41581 18.245 6.04632C18.2629 6.67682 18.1505 7.30424 17.9148 7.88931C17.6791 8.47438 17.3252 9.0045 16.8752 9.4465"
                                                                        stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button className="add-fav add-mus">

                                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.5 21C9.88071 21 11 19.8807 11 18.5C11 17.1193 9.88071 16 8.5 16C7.11929 16 6 17.1193 6 18.5C6 19.8807 7.11929 21 8.5 21Z"
                                                                        stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 18V7H20V18" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M11 10H20" stroke="#494B63" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div className="add-songs">
                                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10Z"
                                                                            fill="#494B63" stroke="#494B63" stroke-width="1.75"
                                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                                        <rect x="5" y="3" width="1" height="5" rx="0.5"
                                                                            fill="white" />
                                                                        <rect x="3" y="6" width="1" height="5" rx="0.5"
                                                                            transform="rotate(-90 3 6)" fill="white" />
                                                                    </svg>
                                                                </div>
                                                            </button>
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

export default Addsongs;