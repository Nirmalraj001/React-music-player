import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, Modal, ModalBody, ModalHeader} from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import l1Img from "../../assets/images/l1.png";
import l2Img from "../../assets/images/l2.png";
import l3Img from "../../assets/images/l3.png";
import b1Img from "../../assets/images/b1.png";
import b2Img from "../../assets/images/b2.png";
import b3Img from "../../assets/images/b3.png";
import g1Img from "../../assets/images/g1.png";

const Search = (props) => {   
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal); 
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
                                            <ul className="add-list ul-border">
                                                <li className="list-song">
                                                    <a className="list-songs" onClick={toggle}>
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
                                                            <button className="add-fav " type="button">
                                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M16.9998 5.66667L5.6665 17" stroke="#494B63"
                                                                        stroke-width="2" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M5.6665 5.66667L16.9998 17" stroke="#494B63"
                                                                        stroke-width="2" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
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
                                                            <button className="add-fav " type="button">
                                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M16.9998 5.66667L5.6665 17" stroke="#494B63"
                                                                        stroke-width="2" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M5.6665 5.66667L16.9998 17" stroke="#494B63"
                                                                        stroke-width="2" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
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
                                                        <div className="fav-group active">
                                                            <button className="add-fav " type="button">
                                                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M16.9998 5.66667L5.6665 17" stroke="#494B63"
                                                                        stroke-width="2" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                    <path d="M5.6665 5.66667L16.9998 17" stroke="#494B63"
                                                                        stroke-width="2" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="slick-heading">
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
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div className="">
                <Modal isOpen={modal} toggle={toggle} className="modal-dialog-centered poup-modal">
                    <ModalHeader toggle={toggle}>
                        <button className="close" data-dismiss="modal" aria-label="Close">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9998 5.66666L5.6665 17" stroke="#FA3174" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.6665 5.66666L16.9998 17" stroke="#FA3174" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="popsong-wapper">
                            <div className="details">
                                <div className="thumb">
                                    <img src={g1Img} alt="" />
                                </div>
                                <div className="details-song">
                                    <h5>God’s Plan On...</h5>
                                    <h6>Dl Drake</h6>
                                    <div className="song-time">
                                        <div className="song-bg">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3 10C3.82843 10 4.5 9.32843 4.5 8.5C4.5 7.67157 3.82843 7 3 7C2.17157 7 1.5 7.67157 1.5 8.5C1.5 9.32843 2.17157 10 3 10Z"
                                                    stroke="white" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M8 10C8.82843 10 9.5 9.32843 9.5 8.5C9.5 7.67157 8.82843 7 8 7C7.17157 7 6.5 7.67157 6.5 8.5C6.5 9.32843 7.17157 10 8 10Z"
                                                    stroke="white" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M4.5 8.5V2H9.5V8.5" stroke="white" stroke-width="1.25"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4.5 4H9.5" stroke="white" stroke-width="1.25"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p>5.00 mins</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.625 10.179L8.99998 15.75L3.37498 10.179M3.37498 10.179C3.00396 9.81796 2.71171 9.38401 2.51664 8.90447C2.32157 8.42494 2.2279 7.91021 2.24153 7.3927C2.25517 6.87518 2.3758 6.3661 2.59585 5.8975C2.8159 5.4289 3.13058 5.01094 3.5201 4.66993C3.90961 4.32892 4.36551 4.07226 4.85909 3.91611C5.35267 3.75995 5.87324 3.70768 6.38801 3.7626C6.90278 3.81751 7.40061 3.97841 7.85014 4.23518C8.29967 4.49194 8.69117 4.839 8.99998 5.2545C9.31013 4.84201 9.70208 4.49799 10.1513 4.24395C10.6005 3.98991 11.0974 3.83133 11.6107 3.77814C12.124 3.72494 12.6428 3.77827 13.1346 3.93479C13.6263 4.09131 14.0805 4.34765 14.4686 4.68777C14.8568 5.02789 15.1706 5.44446 15.3903 5.91141C15.61 6.37837 15.731 6.88566 15.7457 7.40153C15.7604 7.9174 15.6684 8.43074 15.4756 8.90943C15.2827 9.38813 14.9932 9.82186 14.625 10.1835"
                                        fill="#FA3174" />
                                    <path
                                        d="M14.625 10.179L8.99998 15.75L3.37498 10.179M3.37498 10.179C3.00396 9.81796 2.71171 9.38401 2.51664 8.90447C2.32157 8.42494 2.2279 7.91021 2.24153 7.3927C2.25517 6.87518 2.3758 6.3661 2.59585 5.8975C2.8159 5.4289 3.13058 5.01094 3.5201 4.66993C3.90961 4.32892 4.36551 4.07226 4.85909 3.91611C5.35267 3.75995 5.87324 3.70768 6.38801 3.7626C6.90278 3.81751 7.40061 3.97841 7.85014 4.23518C8.29967 4.49194 8.69117 4.839 8.99998 5.2545C9.31013 4.84201 9.70208 4.49799 10.1513 4.24395C10.6005 3.98991 11.0974 3.83133 11.6107 3.77814C12.124 3.72494 12.6428 3.77827 13.1346 3.93479C13.6263 4.09131 14.0805 4.34765 14.4686 4.68777C14.8568 5.02789 15.1706 5.44446 15.3903 5.91141C15.61 6.37837 15.731 6.88566 15.7457 7.40153C15.7604 7.9174 15.6684 8.43074 15.4756 8.90943C15.2827 9.38813 14.9932 9.82186 14.625 10.1835"
                                        stroke="#FA3174" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </div>

                        </div>
                        <ul className="anchr-list">
                            <li>
                                <a href="#">Add to queue</a>
                            </li>
                            <li>
                                <a href="#">Go to artist</a>
                            </li>
                            <li>
                                <a href="#">Go to album</a>
                            </li>
                            <li>
                                <a href="#">Add to playlist</a>
                            </li>
                        </ul>
                    </ModalBody>            
                </Modal>
            </div>
        </Fragment>
    );
   
}

export default Search;