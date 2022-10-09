import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, Modal, ModalBody, ModalHeader } from 'reactstrap';

import sign11Img from "../../assets/images/sing11.png";
import sign1Img from "../../assets/images/sing1.png";
import l1Img from "../../assets/images/l1.png";
import l2Img from "../../assets/images/l2.png";
import l3Img from "../../assets/images/l3.png";
import l4Img from "../../assets/images/l4.png";
import l5Img from "../../assets/images/l5.png";
import Sidebar from "../Reuse/Sidebar";
import Bottom from "../Reuse/Bottom";
const Library = (props) => {
    var settings = {
        rows: 1,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        margin: 15,
    };
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
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
                                            <Sidebar />
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
                                                <h4>Your Library</h4>
                                                {/* </div> */}
                                                <div className="music-add" onClick={toggle}>
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
                                            <div className="pwb-form">
                                                <div className="btn-group btn-head gender-box" id="btn-head">
                                                    <button className=" list-btn">
                                                        Playlist
                                                    </button>
                                                    <button className="list-btn">
                                                        Artists
                                                    </button>
                                                    <button className="list-btn">
                                                        Albums
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sub-head">
                                                <a href="#" className="box">
                                                    <div className="imgwrapper">
                                                        <img src={l1Img} alt="" />
                                                    </div>
                                                    <div className="details">
                                                        <h5><svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M8.12504 4.655L5.00004 7.75L1.87504 4.655M1.87504 4.655C1.66892 4.45442 1.50656 4.21334 1.39819 3.94693C1.28982 3.68053 1.23778 3.39457 1.24535 3.10706C1.25292 2.81955 1.31995 2.53673 1.44219 2.27639C1.56444 2.01606 1.73927 1.78386 1.95566 1.59441C2.17206 1.40496 2.42534 1.26237 2.69955 1.17562C2.97376 1.08887 3.26296 1.05983 3.54895 1.09034C3.83493 1.12084 4.1115 1.21023 4.36124 1.35288C4.61098 1.49553 4.82848 1.68834 5.00004 1.91917C5.17235 1.69001 5.3901 1.49889 5.63967 1.35775C5.88924 1.21662 6.16525 1.12852 6.45043 1.09897C6.73561 1.06942 7.02383 1.09904 7.29703 1.186C7.57024 1.27295 7.82256 1.41537 8.03819 1.60432C8.25383 1.79327 8.42814 2.0247 8.55022 2.28412C8.6723 2.54354 8.73952 2.82537 8.74767 3.11196C8.75583 3.39856 8.70474 3.68375 8.5976 3.94969C8.49046 4.21563 8.32959 4.4566 8.12504 4.6575"
                                                                fill="#FA3174" />
                                                            <path
                                                                d="M8.12504 4.655L5.00004 7.75L1.87504 4.655M1.87504 4.655C1.66892 4.45442 1.50656 4.21334 1.39819 3.94693C1.28982 3.68053 1.23778 3.39457 1.24535 3.10706C1.25292 2.81955 1.31995 2.53673 1.44219 2.27639C1.56444 2.01606 1.73927 1.78386 1.95566 1.59441C2.17206 1.40496 2.42534 1.26237 2.69955 1.17562C2.97376 1.08887 3.26296 1.05983 3.54895 1.09034C3.83493 1.12084 4.1115 1.21023 4.36124 1.35288C4.61098 1.49553 4.82848 1.68834 5.00004 1.91917C5.17235 1.69001 5.3901 1.49889 5.63967 1.35775C5.88924 1.21662 6.16525 1.12852 6.45043 1.09897C6.73561 1.06942 7.02383 1.09904 7.29703 1.186C7.57024 1.27295 7.82255 1.41537 8.03819 1.60432C8.25383 1.79327 8.42814 2.0247 8.55022 2.28412C8.6723 2.54354 8.73952 2.82537 8.74767 3.11196C8.75583 3.39856 8.70474 3.68375 8.5976 3.94969C8.49046 4.21563 8.32959 4.4566 8.12504 4.6575"
                                                                stroke="#FA3174" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                            Liked Songs</h5>
                                                        <h6>125 Songs</h6>

                                                    </div>
                                                </a>
                                                <a href="#" className="box">
                                                    <div className="imgwrapper">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5 11.6667V6.66667C5 6.00363 5.26339 5.36775 5.73223 4.8989C6.20107 4.43006 6.83696 4.16667 7.5 4.16667C8.16304 4.16667 8.79893 4.43006 9.26777 4.8989C9.73661 5.36775 10 6.00363 10 6.66667V13.3333C10 13.9964 10.2634 14.6323 10.7322 15.1011C11.2011 15.5699 11.837 15.8333 12.5 15.8333C13.163 15.8333 13.7989 15.5699 14.2678 15.1011C14.7366 14.6323 15 13.9964 15 13.3333V8.33334"
                                                                stroke="white" stroke-width="1.25" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M16.6668 4.16667C16.6668 3.24619 15.9206 2.5 15.0002 2.5C14.0797 2.5 13.3335 3.24619 13.3335 4.16667V6.66667C13.3335 7.58714 14.0797 8.33333 15.0002 8.33333C15.9206 8.33333 16.6668 7.58714 16.6668 6.66667V4.16667Z"
                                                                stroke="white" stroke-width="1.25" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M6.66683 13.3333C6.66683 12.4129 5.92064 11.6667 5.00016 11.6667C4.07969 11.6667 3.3335 12.4129 3.3335 13.3333V15.8333C3.3335 16.7538 4.07969 17.5 5.00016 17.5C5.92064 17.5 6.66683 16.7538 6.66683 15.8333V13.3333Z"
                                                                stroke="white" stroke-width="1.25" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>

                                                    </div>
                                                    <div className="details">
                                                        <h5>
                                                            Playlist</h5>
                                                        <h6>25 Songs</h6>

                                                    </div>
                                                </a>
                                            </div>
                                            <ul className="song-list">
                                                <li>
                                                    <div className="thumb">
                                                        <img src={l2Img} alt="" />

                                                    </div>
                                                    <div className="details">
                                                        <h5>God’s Plan...</h5>
                                                        <h6>Dl Drake  <span>5 min</span> </h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src={l3Img} alt="" />

                                                    </div>
                                                    <div className="details">
                                                        <h5>God’s Plan...</h5>
                                                        <h6>Dl Drake  <span>5 min</span> </h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src={l4Img} alt="" />

                                                    </div>
                                                    <div className="details">
                                                        <h5>God’s Plan...</h5>
                                                        <h6>Dl Drake  <span>5 min</span> </h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src={l5Img} alt="" />

                                                    </div>
                                                    <div className="details">
                                                        <h5>God’s Plan...</h5>
                                                        <h6>Dl Drake  <span>5 min</span> </h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src={sign1Img} alt="" />

                                                    </div>
                                                    <div className="details">
                                                        <h5>God’s Plan...</h5>
                                                        <h6>Dl Drake  <span>5 min</span> </h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src={l5Img} alt="" />

                                                    </div>
                                                    <div className="details">
                                                        <h5>God’s Plan...</h5>
                                                        <h6>Dl Drake  <span>5 min</span> </h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </main>
                                        <>
                                            <Bottom />
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered poup-modal">
                <ModalHeader toggle={toggle}>Create Playlist</ModalHeader>
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
                                Create Playlist
                            </button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </Fragment>
    );

}

export default Library;