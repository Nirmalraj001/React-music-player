import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, Modal, ModalBody, ModalHeader } from 'reactstrap';
import sign11Img from "../../assets/images/sing11.png";
import billeilishImg from "../../assets/images/billeilish1.png";
import l1Img from "../../assets/images/l1.png";
import l2Img from "../../assets/images/l2.png";
import l3Img from "../../assets/images/l3.png";
import l4Img from "../../assets/images/l4.png";
import Editicon from '../../assets/images/editicon.png'
import Playicon from '../../assets/images/play.png'
import Bottom from "../Reuse/Bottom";

const Myplaylist = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);



    const str = "invert(95%) sepia(0%) saturate(7482%) hue-rotate(94deg) brightness(109%) contrast(104%)"
    const arr = str.split(/[()]/)

    const str2 ="invert(100%) sepia(100%) saturate(2%) hue-rotate(120deg) brightness(107%) contrast(101%)"
    const arr2 = str2.split(/[()]/)

    const style = {
        headerIcon: {
            width: "20px",
            height: "20px",
            WebkitFilter: `invert(${arr[1]}) sepia(${arr[3]}) saturate(${arr[5]}) hue-rotate(${arr[7]}) brightness(${arr[9]}) contrast(${arr[11]})`

        },
        buttonIcon: {
            width: "18px",
            height: "18px",
            WebkitFilter: `invert(${arr2[1]}) sepia(${arr2[3]}) saturate(${arr2[5]}) hue-rotate(${arr2[7]}) brightness(${arr2[9]}) contrast(${arr2[11]})`
        },
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
                                                <div className="align-song">
                                                    <h5 style={style.header}>Happy Vibe’s &nbsp;
                                                        <img src={Editicon} style={style.headerIcon} />
                                                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M9 15H12L20.5 6.5C20.8978 6.10217 21.1213 5.56261 21.1213 5C21.1213 4.43739 20.8978 3.89782 20.5 3.5C20.1022 3.10217 19.5626 2.87868 19 2.87868C18.4374 2.87868 17.8978 3.10217 17.5 3.5L9 12V15Z"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path d="M16 5L19 8" stroke="white" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg> */}
                                                    </h5>
                                                    <p style={style.subheader}>12,568 Songs</p>
                                                    <button className="music-2 primary-btn2"  >
                                                        <span >Add Songs</span>
                                                    </button>
                                                </div>
                                                <button className="play-btn" onClick={toggle}  >
                                                    <img src={Playicon} style={style.buttonIcon} />
                                                </button>
                                            </div>
                                            <ul className="add-list add-p">
                                                <li className="list-song">
                                                    <div className="list-songs">
                                                        <div className="details">
                                                            <div className="thumb">
                                                                <img src={l2Img} alt="" />
                                                            </div>
                                                            <div className="details-song">
                                                                <h5 style={style.primary}>God’s Plan for you</h5>
                                                                <h6 style={style.secondary}>Dl Drake <span>5 min</span> </h6>
                                                            </div>
                                                        </div>
                                                        {/* <div className="fav-group active d-flex align-items-center">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" fill="#FA3174" />
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" stroke="#FA3174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle className="add-fav">
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
                                                        </div> */}
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
                                                        {/* <div className="fav-group active d-flex align-items-center">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" fill="#FA3174" />
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" stroke="#FA3174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle className="add-fav">
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
                                                        </div> */}
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
                                                        {/* <div className="fav-group active d-flex align-items-center">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465"
                                                                    stroke="#494B63" stroke-width="1.5" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle className="add-fav">
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
                                                        </div> */}
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
                                                        {/* <div className="fav-group active d-flex align-items-center">
                                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" fill="#FA3174" />
                                                                <path d="M17.8752 12.441L11.0002 19.25L4.12519 12.441M4.12519 12.441C3.67172 11.9997 3.31453 11.4693 3.07611 10.8832C2.83769 10.2972 2.72321 9.66804 2.73987 9.03552C2.75653 8.40301 2.90398 7.78079 3.17292 7.20806C3.44187 6.63533 3.82649 6.12448 4.30256 5.7077C4.77863 5.29091 5.33584 4.97721 5.9391 4.78636C6.54237 4.5955 7.17862 4.53162 7.80778 4.59873C8.43695 4.66585 9.0454 4.86251 9.59483 5.17633C10.1443 5.49015 10.6228 5.91433 11.0002 6.42217C11.3793 5.91802 11.8583 5.49754 12.4074 5.18705C12.9564 4.87656 13.5636 4.68274 14.191 4.61773C14.8184 4.55271 15.4525 4.61789 16.0536 4.80919C16.6546 5.00049 17.2097 5.3138 17.6841 5.7295C18.1585 6.1452 18.542 6.65434 18.8106 7.22507C19.0792 7.79579 19.227 8.41581 19.245 9.04632C19.2629 9.67682 19.1505 10.3042 18.9148 10.8893C18.6791 11.4744 18.3252 12.0045 17.8752 12.4465" stroke="#FA3174" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle className="add-fav">
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
                                                        </div> */}
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
            <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered poup-modal">
                <ModalHeader toggle={toggle}>Edit Playlist</ModalHeader>
                <ModalBody>
                    <form action="" className="modal-form">
                        <div className="form-group">
                            <div className="profile-box">
                                <div className="profile-circ">
                                    <a href="#" className="up-pop">
                                        <div className="in-h">
                                            <input type="file" className="upload" id="upload-btn-2" />
                                            <label className="file-upload" for="upload-btn-2">
                                                <span className="edit">
                                                    <svg width="24" height="24" viewBox="0 0 14 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7 9.33333C7.9665 9.33333 8.75 8.54983 8.75 7.58333C8.75 6.61683 7.9665 5.83333 7 5.83333C6.0335 5.83333 5.25 6.61683 5.25 7.58333C5.25 8.54983 6.0335 9.33333 7 9.33333Z"
                                                            stroke="white" stroke-width="1.25"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path
                                                            d="M2.91667 4.08333H4.08333C4.39275 4.08333 4.6895 3.96041 4.90829 3.74162C5.12708 3.52283 5.25 3.22608 5.25 2.91666C5.25 2.76195 5.31146 2.61358 5.42085 2.50418C5.53025 2.39479 5.67862 2.33333 5.83333 2.33333H7M12.25 6.41666V10.5C12.25 10.8094 12.1271 11.1062 11.9083 11.325C11.6895 11.5437 11.3928 11.6667 11.0833 11.6667H2.91667C2.60725 11.6667 2.3105 11.5437 2.09171 11.325C1.87292 11.1062 1.75 10.8094 1.75 10.5V5.24999C1.75 4.94058 1.87292 4.64383 2.09171 4.42504C2.3105 4.20624 2.60725 4.08333 2.91667 4.08333"
                                                            stroke="white" stroke-width="1.25"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M8.75 3.5H12.25" stroke="white" stroke-width="1.25"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M10.5 1.75V5.25" stroke="white" stroke-width="1.25"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>

                                                </span>
                                                <p>Choose Photo</p>
                                            </label>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="form-group">
                            <label for="playlist">
                                Playlist Name
                            </label>
                            <input type="text" id="playlist" className="form-control" placeholder="Enter playlist name" />
                        </div>
                        <div>
                            <button className="primary-btn w-100">
                                Update Playlist
                            </button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </Fragment>
    );

}

export default Myplaylist;