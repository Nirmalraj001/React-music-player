import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sign11Img from "../../assets/images/sing11.png";
import re1Img from "../../assets/images/re1.png";
import re2Img from "../../assets/images/re2.png";
import re3Img from "../../assets/images/re3.png";
import re4Img from "../../assets/images/re4.png";
import re5Img from "../../assets/images/re5.png";
import re6Img from "../../assets/images/re6.png";
import re7Img from "../../assets/images/re7.png";
import re8Img from "../../assets/images/re8.png";
import re9Img from "../../assets/images/re9.png";
import pl1Img from "../../assets/images/pl1.png";
import pl2Img from "../../assets/images/pl2.png";
import pl3Img from "../../assets/images/pl3.png";
import pl4Img from "../../assets/images/pl4.png";
import pl5Img from "../../assets/images/pl5.png";
import pl6Img from "../../assets/images/pl6.png";
import Bottom from "../Reuse/Bottom";
import Sidebar from "../Reuse/Sidebar";
import { actorWiseList } from "../../../../../../redux/features/musicpreview";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { useCustomizeContext } from "../../../../../../contexts/CustomizeContext";

const Category = (props) => {
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
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Musicplay } = useCustomizeContext()

    const { actorWise } = useSelector(state => state.musicpreview)


    useEffect(() => {
        (async () => {
            const resp1 = await dispatch(actorWiseList());

            console.log(resp1, "pro")
        })();
    }, [])

    const songData = (data) => {
        console.log(data, "song123")
        Musicplay.setSongData(data)
        navigate("/actorsong")
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
                                                {/* <div className="d-flex"> */}
                                                <button className="arrow-svg" onClick={handleToggle}>
                                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="16" height="4" rx="2" fill="white" />
                                                        <rect y="6" width="13" height="4" rx="2" fill="white" />
                                                    </svg>
                                                </button>
                                                <h4>Actors</h4>
                                                {/* </div> */}
                                                <div className="profile">
                                                    <img src={sign11Img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <main className="pad-top2">
                                            <div className="slick-heading">
                                                <h4>Actors Collection</h4>
                                                {/* <a href="catagory.html">
                                                    More
                                                </a> */}
                                            </div>
                                            <div className="slick_carousel more-music mt-0">
                                                {actorWise.map((data, index) => (
                                                    <div className="slide-item" onClick={() => songData(data)}>
                                                        <div className="popular_img">
                                                            <img src={data._id.actor_img ? data._id.actor_img : re1Img} alt="" />
                                                        </div>
                                                        <p>{data._id.actor_name ? data._id.actor_name : "Movie Name"}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </main>
                                        <div className="music-bar">
                                            <div className="song-wrapper align-items-start">
                                                <div className="thumb-wrapper">
                                                    <img src={re3Img} alt="" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="flex-d align-items-start">
                                                        <div className="song-details">
                                                            <h4> At the starting of the week</h4>
                                                            <p>One Direction</p>
                                                        </div>
                                                        <div className="menu-btn">
                                                            <button>
                                                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.1065 9.3281C10.6085 9.32784 11.0899 9.12833 11.4449 8.77339C11.8 8.41846 11.9996 7.93712 12 7.4351V2.5651C12.0001 2.21547 11.9033 1.87265 11.7203 1.57471C11.5373 1.27678 11.2754 1.03539 10.9635 0.877352C10.6516 0.719314 10.302 0.650812 9.95355 0.679454C9.60509 0.708095 9.27139 0.832759 8.9895 1.0396L7.1 2.4266C7.0753 2.08971 6.96083 1.76558 6.76849 1.48789C6.57615 1.2102 6.31295 0.989091 6.00625 0.847528C5.69955 0.705965 5.36053 0.649119 5.02443 0.682896C4.68833 0.716673 4.3674 0.839841 4.095 1.0396L0.7745 3.4746C0.535146 3.65036 0.340525 3.88 0.206382 4.14493C0.0722382 4.40986 0.00233841 4.70265 0.00233841 4.9996C0.00233841 5.29656 0.0722382 5.58934 0.206382 5.85427C0.340525 6.1192 0.535146 6.34884 0.7745 6.5246L4.095 8.9596C4.36733 9.15933 4.68817 9.2825 5.0242 9.31633C5.36022 9.35015 5.69917 9.29339 6.00585 9.15194C6.31252 9.0105 6.57573 8.78952 6.76814 8.51197C6.96055 8.23441 7.07513 7.91041 7.1 7.5736L8.9895 8.9606C9.3132 9.19892 9.70453 9.32767 10.1065 9.3281V9.3281ZM6.6035 6.0906C6.47089 6.0906 6.34371 6.14328 6.24995 6.23705C6.15618 6.33082 6.1035 6.45799 6.1035 6.5906V7.4351C6.10337 7.59983 6.05764 7.76131 5.97135 7.90164C5.88507 8.04196 5.76161 8.15566 5.61467 8.23011C5.46773 8.30457 5.30304 8.33688 5.13885 8.32346C4.97467 8.31004 4.81741 8.25143 4.6845 8.1541L1.3645 5.7191C1.25155 5.6363 1.1597 5.52806 1.09639 5.40314C1.03307 5.27822 1.00008 5.14015 1.00008 5.0001C1.00008 4.86005 1.03307 4.72198 1.09639 4.59706C1.1597 4.47214 1.25155 4.3639 1.3645 4.2811L4.6845 1.8461C4.81741 1.74878 4.97467 1.69016 5.13885 1.67674C5.30304 1.66332 5.46773 1.69564 5.61467 1.77009C5.76161 1.84455 5.88507 1.95824 5.97135 2.09857C6.05764 2.23889 6.10337 2.40037 6.1035 2.5651V3.4096C6.10356 3.50195 6.1292 3.59248 6.17757 3.67115C6.22594 3.74982 6.29516 3.81356 6.37754 3.8553C6.45992 3.89703 6.55226 3.91513 6.6443 3.9076C6.73634 3.90006 6.8245 3.86718 6.899 3.8126L9.581 1.8461C9.71391 1.74878 9.87117 1.69016 10.0354 1.67674C10.1995 1.66332 10.3642 1.69564 10.5112 1.77009C10.6581 1.84455 10.7816 1.95824 10.8679 2.09857C10.9541 2.23889 10.9999 2.40037 11 2.5651V7.4351C10.9999 7.59983 10.9541 7.76131 10.8679 7.90164C10.7816 8.04196 10.6581 8.15566 10.5112 8.23011C10.3642 8.30457 10.1995 8.33688 10.0354 8.32346C9.87117 8.31004 9.71391 8.25143 9.581 8.1541L6.9 6.1876C6.81404 6.12447 6.71015 6.09049 6.6035 6.0906Z"
                                                                        fill="white" />
                                                                </svg>
                                                            </button>
                                                            <button>
                                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M8.49756 4.16666H6.83089C6.37065 4.16666 5.99756 4.53975 5.99756 4.99999V15C5.99756 15.4602 6.37065 15.8333 6.83089 15.8333H8.49756C8.9578 15.8333 9.33089 15.4602 9.33089 15V4.99999C9.33089 4.53975 8.9578 4.16666 8.49756 4.16666Z"
                                                                        fill="white" stroke="white" stroke-width="1.25"
                                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path
                                                                        d="M15.1643 4.16666H13.4976C13.0374 4.16666 12.6643 4.53975 12.6643 4.99999V15C12.6643 15.4602 13.0374 15.8333 13.4976 15.8333H15.1643C15.6245 15.8333 15.9976 15.4602 15.9976 15V4.99999C15.9976 4.53975 15.6245 4.16666 15.1643 4.16666Z"
                                                                        fill="white" stroke="white" stroke-width="1.25"
                                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button>
                                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_102_354)">
                                                                        <path
                                                                            d="M2.89106 10.3281C2.38904 10.3278 1.90765 10.1283 1.55262 9.77339C1.19759 9.41846 0.997956 8.93712 0.997559 8.4351V3.5651C0.997465 3.21547 1.09428 2.87265 1.27726 2.57471C1.46023 2.27678 1.72221 2.03539 2.03409 1.87735C2.34597 1.71931 2.69555 1.65081 3.04401 1.67945C3.39247 1.7081 3.72617 1.83276 4.00806 2.0396L5.89756 3.4266C5.92226 3.08971 6.03673 2.76558 6.22907 2.48789C6.42141 2.2102 6.68461 1.98909 6.99131 1.84753C7.29801 1.70597 7.63703 1.64912 7.97313 1.6829C8.30923 1.71667 8.63016 1.83984 8.90256 2.0396L12.2231 4.4746C12.4624 4.65036 12.657 4.88 12.7912 5.14493C12.9253 5.40986 12.9952 5.70265 12.9952 5.9996C12.9952 6.29656 12.9253 6.58934 12.7912 6.85427C12.657 7.1192 12.4624 7.34884 12.2231 7.5246L8.90256 9.9596C8.63023 10.1593 8.30939 10.2825 7.97336 10.3163C7.63734 10.3502 7.29839 10.2934 6.99171 10.1519C6.68504 10.0105 6.42183 9.78952 6.22942 9.51197C6.03701 9.23441 5.92242 8.91041 5.89756 8.5736L4.00806 9.9606C3.68436 10.1989 3.29303 10.3277 2.89106 10.3281V10.3281ZM6.39406 7.0906C6.52667 7.0906 6.65384 7.14328 6.74761 7.23705C6.84138 7.33082 6.89406 7.45799 6.89406 7.5906V8.4351C6.89418 8.59983 6.93992 8.76131 7.02621 8.90164C7.11249 9.04196 7.23594 9.15566 7.38289 9.23011C7.52983 9.30457 7.69452 9.33688 7.85871 9.32346C8.02289 9.31004 8.18015 9.25143 8.31306 9.1541L11.6331 6.7191C11.746 6.6363 11.8379 6.52806 11.9012 6.40314C11.9645 6.27822 11.9975 6.14015 11.9975 6.0001C11.9975 5.86005 11.9645 5.72198 11.9012 5.59706C11.8379 5.47214 11.746 5.3639 11.6331 5.2811L8.31306 2.8461C8.18015 2.74878 8.02289 2.69016 7.85871 2.67674C7.69452 2.66332 7.52983 2.69564 7.38289 2.77009C7.23594 2.84455 7.11249 2.95824 7.02621 3.09857C6.93992 3.23889 6.89418 3.40037 6.89406 3.5651V4.4096C6.894 4.50195 6.86836 4.59248 6.81999 4.67115C6.77162 4.74982 6.7024 4.81356 6.62002 4.8553C6.53763 4.89703 6.4453 4.91513 6.35326 4.9076C6.26121 4.90006 6.17306 4.86718 6.09856 4.8126L3.41656 2.8461C3.28365 2.74878 3.12639 2.69016 2.96221 2.67674C2.79802 2.66332 2.63333 2.69564 2.48639 2.77009C2.33944 2.84455 2.21599 2.95824 2.12971 3.09857C2.04342 3.23889 1.99768 3.40037 1.99756 3.5651V8.4351C1.99768 8.59983 2.04342 8.76131 2.12971 8.90164C2.21599 9.04196 2.33944 9.15566 2.48639 9.23011C2.63333 9.30457 2.79802 9.33688 2.96221 9.32346C3.12639 9.31004 3.28365 9.25143 3.41656 9.1541L6.09756 7.1876C6.18352 7.12447 6.28741 7.09049 6.39406 7.0906Z"
                                                                            fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_102_354">
                                                                            <rect width="12" height="12" fill="white"
                                                                                transform="translate(0.997559)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </button>
                                                        </div>

                                                    </div>
                                                    <div className="progress-details">
                                                        <h5>01:30</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="60"
                                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "20.2%" }}>
                                                            </div>
                                                        </div>
                                                        <h5>05:50</h5>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
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

export default Category;