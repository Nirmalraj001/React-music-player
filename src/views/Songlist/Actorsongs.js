import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Backicon from '../../assets/images/musicback.png'
import sign11Img from "../../assets/images/sing11.png";
import p1Img from "../../assets/images/p1.png";
import p2Img from "../../assets/images/p2.png";
import p3Img from "../../assets/images/p3.png";
import p4Img from "../../assets/images/p4.png";
import p5Img from "../../assets/images/p5.png";
import Sidebar from "../Reuse/Sidebar";
import Bottom from "../Reuse/Bottom";
import { useCustomizeContext } from "../../../../../../contexts/CustomizeContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { songList, favouriteChangeData } from "../../../../../../redux/features/musicpreview";



const Playlist = (props) => {
    const [isActive, setActive] = useState("false");
    const [fav, setFav] = useState(0)
    const handleToggle = () => {
        setActive(!isActive);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { Musicplay } = useCustomizeContext()

    const modArr = Musicplay.songData?.actor_details?.map(movie => {
        return { ...movie, actor_image: Musicplay.songData?._id?.actor_img, actor_name: Musicplay.songData?._id?.actor_name }
    })

    const favData = (data) => {
        console.log(data._id, "qwer")
        const favDetail = {
            "id": data._id
        }

        console.log(favDetail, "favDetail")


        dispatch(
            favouriteChangeData(favDetail, (resp) => {
                console.log(resp, "fav12");
                setFav(resp.favorite)
                dispatch(songList());
            })
        );
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
                                                {/* <button className="arrow-svg" onClick={handleToggle}>
                                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="16" height="4" rx="2" fill="white" />
                                                        <rect y="6" width="13" height="4" rx="2" fill="white" />
                                                    </svg>
                                                </button> */}
                                                <button className="arrow-svg" onClick={() => navigate("/actor")}>
                                                    <img src={Backicon} style={{ width: "15px", height: "15px", filter: "invert(100%) sepia(99%) saturate(2%) hue-rotate(286deg) brightness(105%) contrast(101%)" }} />
                                                </button>

                                                <h4>Playlist</h4>
                                                <div className="music-add">
                                                    {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
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
                                                    </button> */}
                                                </div>
                                            </div>
                                        </div>
                                        <main className="pad-top2 p-t-60">
                                            <div className="slick-heading">
                                                {/* <h5>Recent Searches</h5> */}
                                            </div>
                                            <ul className="add-list">
                                                {modArr && modArr.map((data, index) => (

                                                    <li className="list-song">
                                                        <a className="list-songs" data-toggle="modal" data-target="#song">
                                                            <div className="details">
                                                                <div className="thumb">
                                                                    <img src={data.actor_img ? data.actor_img : p1Img} alt="" />
                                                                </div>
                                                                <div className="details-song">
                                                                    <h5>{data.title ? data.title : "Song Name."}</h5>
                                                                    <h6>{data.actor_name ? data.actor_name : "Artist Name"} <span>{data.durationTime ? data.durationTime : "0.00"}</span> </h6>
                                                                </div>
                                                            </div>
                                                            <div className="fav-group active">
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
                                                                        <DropdownItem>Play</DropdownItem>
                                                                        <DropdownItem>Playlist</DropdownItem>
                                                                        <DropdownItem onClick={() => favData(data)}>{fav === 0 ? "Add to Favorite" : "Remove from Favorite"}</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </a>
                                                    </li>
                                                ))}
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
        </Fragment>
    );

}

export default Playlist;