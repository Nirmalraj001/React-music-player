import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, ButtonGroup} from 'reactstrap';
import classnames from 'classnames';
import ReactSlider from 'react-slider'

import dilliImg from '../../assets/images/dilli.png';
import sing1Img from '../../assets/images/sing1.png';
import sing2Img from '../../assets/images/sing2.png';
import sing3Img from '../../assets/images/sing3.png';
import sing4Img from '../../assets/images/sing4.png';
import sing5Img from '../../assets/images/sing5.png';
import sing6Img from '../../assets/images/sing6.png';
import sing7Img from '../../assets/images/sing7.png';

const Songplayer = (props) => {   
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
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
                            <div className="screen">
                                <div class="full-new-mob fullscreen_mob">
                                    <div class="fresh_top page_main pb-0">
                                        <div class="music_head">
                                            <div class="music_subhead">
                                                <a href="">
                                                    <div class="left_circle">
                                                        <svg width="10" height="10" viewBox="0 0 10 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 1L1 9L9 17" stroke="#797C7F" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <div class="center_txt">
                                                    <h1>Dilli’s Swag</h1>
                                                    <p>Sam C. S </p>
                                                </div>
                                                <a href="">
                                                    <div class="right_circle">
                                                        <svg width="4" height="18" viewBox="0 0 4 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="2" cy="2" r="2" transform="rotate(90 2 2)" fill="#797C7F" />
                                                            <circle cx="2" cy="9" r="2" transform="rotate(90 2 9)" fill="#797C7F" />
                                                            <circle cx="2" cy="16" r="2" transform="rotate(90 2 16)"
                                                                fill="#797C7F" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                    <main class="pd-b pt-2 px-2 ">
                                        <div class="artist_topblk">
                                            <div class="container">
                                                <div class="artist_grid">
                                                    <span class="artist_outerimg">
                                                        <span class="artist_img">
                                                            <img src={dilliImg} alt="" />
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="songplay-details">
                                            <div class="song-name">
                                                <h5>My Playlist 1</h5>
                                                <button>
                                                    <svg width="108" height="108" viewBox="0 0 108 108" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_3384_597)">
                                                            <circle cx="54" cy="54" r="25" fill="#2A2E34" />
                                                            <circle cx="54" cy="54" r="25" stroke="url(#paint0_linear_3384_597)"
                                                                stroke-width="2" />
                                                        </g>
                                                        <path
                                                            d="M57.328 47.0574C58.8392 46.8263 60.258 47.2965 61.4064 48.4018C62.5733 49.5253 63.1327 51.0056 62.9734 52.5585C62.8159 54.0926 61.9914 55.6076 60.6041 56.9431C60.2171 57.316 59.1766 58.3226 57.6835 59.7688C57.0121 60.4194 56.2975 61.1113 55.5775 61.81L54.8773 62.4882L54.5992 62.7579C54.2664 63.0807 53.7332 63.0807 53.4004 62.7579L50.9829 60.4114L50.4722 59.9172C46.0083 55.6078 45.1842 54.0931 45.0267 52.5585C44.8673 51.0056 45.4263 49.5253 46.5936 48.4018C47.742 47.2965 49.1609 46.8268 50.672 47.0574C51.7934 47.2285 52.931 47.78 54.0002 48.6605C55.0699 47.7805 56.2066 47.2285 57.328 47.0574Z"
                                                            fill="#797C7F" />
                                                        <defs>
                                                            <filter id="filter0_dd_3384_597" x="0" y="0" width="108" height="108"
                                                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.198235 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_3384_597" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_3384_597"
                                                                    result="effect2_dropShadow_3384_597" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_3384_597" result="shape" />
                                                            </filter>
                                                            <linearGradient id="paint0_linear_3384_597" x1="12.4671" y1="45.0335"
                                                                x2="44.5342" y2="88.7722" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#41464B" />
                                                                <stop offset="1" stop-color="#191C21" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>


                                                </button>
                                            </div>
                                            {/* <div class="slider-play">
                                                <svg width="100%" height="80" viewBox="0 0 353 80" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="6" y="36.7723" width="346" height="5.50607" rx="2.5" fill="#111216"
                                                        stroke="url(#paint0_linear_3387_600)" stroke-width="2" />
                                                    <g filter="url(#filter0_f_3387_600)">
                                                        <rect x="6" y="36.7723" width="123.271" height="5.50607" rx="2.5"
                                                            fill="url(#paint1_linear_3387_600)" />
                                                    </g>
                                                    <rect x="6" y="36.7723" width="120.47" height="5.50607" rx="2.75304"
                                                        fill="url(#paint2_linear_3387_600)" stroke="url(#paint3_linear_3387_600)" />
                                                    <g filter="url(#filter1_f_3387_600)">
                                                        <path d="M20.0078 36.7723H343.595" stroke="url(#paint4_linear_3387_600)"
                                                            stroke-width="2" stroke-linecap="round" />
                                                    </g>
                                                    <path
                                                        d="M10.242 67.14C9.49533 67.14 8.85133 66.9347 8.31 66.524C7.778 66.1133 7.36733 65.5347 7.078 64.788C6.78867 64.032 6.644 63.136 6.644 62.1C6.644 61.064 6.78867 60.1727 7.078 59.426C7.36733 58.67 7.778 58.0867 8.31 57.676C8.85133 57.2653 9.49533 57.06 10.242 57.06C10.9887 57.06 11.6327 57.2653 12.174 57.676C12.7153 58.0867 13.1307 58.67 13.42 59.426C13.7093 60.1727 13.854 61.064 13.854 62.1C13.854 63.136 13.7093 64.032 13.42 64.788C13.1307 65.5347 12.7153 66.1133 12.174 66.524C11.6327 66.9347 10.9887 67.14 10.242 67.14ZM10.242 65.768C10.9233 65.768 11.4507 65.4507 11.824 64.816C12.1973 64.172 12.384 63.2667 12.384 62.1C12.384 60.9333 12.1973 60.0327 11.824 59.398C11.4507 58.754 10.9233 58.432 10.242 58.432C9.56067 58.432 9.03333 58.754 8.66 59.398C8.28667 60.0327 8.1 60.9333 8.1 62.1C8.1 63.2667 8.28667 64.172 8.66 64.816C9.03333 65.4507 9.56067 65.768 10.242 65.768ZM18.7459 67.14C17.9992 67.14 17.3552 66.9347 16.8139 66.524C16.2819 66.1133 15.8712 65.5347 15.5819 64.788C15.2926 64.032 15.1479 63.136 15.1479 62.1C15.1479 61.064 15.2926 60.1727 15.5819 59.426C15.8712 58.67 16.2819 58.0867 16.8139 57.676C17.3552 57.2653 17.9992 57.06 18.7459 57.06C19.4926 57.06 20.1366 57.2653 20.6779 57.676C21.2192 58.0867 21.6346 58.67 21.9239 59.426C22.2132 60.1727 22.3579 61.064 22.3579 62.1C22.3579 63.136 22.2132 64.032 21.9239 64.788C21.6346 65.5347 21.2192 66.1133 20.6779 66.524C20.1366 66.9347 19.4926 67.14 18.7459 67.14ZM18.7459 65.768C19.4272 65.768 19.9546 65.4507 20.3279 64.816C20.7012 64.172 20.8879 63.2667 20.8879 62.1C20.8879 60.9333 20.7012 60.0327 20.3279 59.398C19.9546 58.754 19.4272 58.432 18.7459 58.432C18.0646 58.432 17.5372 58.754 17.1639 59.398C16.7906 60.0327 16.6039 60.9333 16.6039 62.1C16.6039 63.2667 16.7906 64.172 17.1639 64.816C17.5372 65.4507 18.0646 65.768 18.7459 65.768ZM24.6038 67.14C24.2958 67.14 24.0578 67.0513 23.8898 66.874C23.7218 66.6873 23.6378 66.426 23.6378 66.09C23.6378 65.782 23.7265 65.53 23.9038 65.334C24.0811 65.138 24.3145 65.04 24.6038 65.04C24.9118 65.04 25.1498 65.1333 25.3178 65.32C25.4858 65.4973 25.5698 65.754 25.5698 66.09C25.5698 66.398 25.4811 66.65 25.3038 66.846C25.1265 67.042 24.8931 67.14 24.6038 67.14ZM24.6038 61.61C24.2958 61.61 24.0578 61.5213 23.8898 61.344C23.7218 61.1573 23.6378 60.896 23.6378 60.56C23.6378 60.252 23.7265 60 23.9038 59.804C24.0811 59.608 24.3145 59.51 24.6038 59.51C24.9118 59.51 25.1498 59.6033 25.3178 59.79C25.4858 59.9673 25.5698 60.224 25.5698 60.56C25.5698 60.868 25.4811 61.12 25.3038 61.316C25.1265 61.512 24.8931 61.61 24.6038 61.61ZM31.1214 67V59.104L31.4714 59.188L28.2514 63.122L28.1954 62.954H34.2854V64.34H27.2574L26.6134 63.08L31.4154 57.2H32.5774V67H31.1214ZM38.921 67.042C38.3143 67.042 37.759 66.916 37.255 66.664C36.7603 66.4027 36.3637 66.0573 36.065 65.628C35.7663 65.1987 35.617 64.7227 35.617 64.2C35.617 63.9107 35.6543 63.64 35.729 63.388C35.813 63.1267 35.9343 62.8887 36.093 62.674C36.261 62.4593 36.4617 62.2633 36.695 62.086C36.9283 61.9087 37.199 61.75 37.507 61.61L37.423 61.904C37.1803 61.8107 36.961 61.6987 36.765 61.568C36.5783 61.428 36.415 61.2693 36.275 61.092C36.135 60.9147 36.0277 60.7233 35.953 60.518C35.8877 60.3127 35.855 60.098 35.855 59.874C35.855 59.3793 35.9903 58.9313 36.261 58.53C36.541 58.1287 36.9097 57.8067 37.367 57.564C37.8337 57.3213 38.3517 57.2 38.921 57.2C39.4903 57.2 40.0037 57.3213 40.461 57.564C40.9277 57.8067 41.2963 58.1287 41.567 58.53C41.847 58.9313 41.987 59.3793 41.987 59.874C41.987 60.098 41.9497 60.3127 41.875 60.518C41.8097 60.7233 41.7117 60.91 41.581 61.078C41.4503 61.246 41.2823 61.4 41.077 61.54C40.881 61.68 40.657 61.8013 40.405 61.904L40.363 61.666C40.643 61.778 40.895 61.9227 41.119 62.1C41.3523 62.2773 41.553 62.478 41.721 62.702C41.889 62.926 42.015 63.164 42.099 63.416C42.1923 63.668 42.239 63.9293 42.239 64.2C42.239 64.732 42.0897 65.2127 41.791 65.642C41.4923 66.0713 41.091 66.412 40.587 66.664C40.0923 66.916 39.537 67.042 38.921 67.042ZM38.921 65.642C39.2663 65.642 39.5743 65.5767 39.845 65.446C40.125 65.3153 40.3443 65.138 40.503 64.914C40.6617 64.69 40.741 64.4333 40.741 64.144C40.741 63.836 40.6617 63.5653 40.503 63.332C40.3443 63.0893 40.125 62.898 39.845 62.758C39.5743 62.618 39.2663 62.548 38.921 62.548C38.5757 62.548 38.2677 62.618 37.997 62.758C37.7263 62.898 37.5117 63.0893 37.353 63.332C37.1943 63.5653 37.115 63.836 37.115 64.144C37.115 64.424 37.1943 64.676 37.353 64.9C37.5117 65.124 37.7263 65.306 37.997 65.446C38.2677 65.5767 38.5757 65.642 38.921 65.642ZM38.921 61.204C39.2197 61.204 39.4857 61.148 39.719 61.036C39.9617 60.924 40.1483 60.7747 40.279 60.588C40.419 60.392 40.489 60.168 40.489 59.916C40.489 59.664 40.419 59.44 40.279 59.244C40.1483 59.048 39.9617 58.894 39.719 58.782C39.4857 58.6607 39.2197 58.6 38.921 58.6C38.6223 58.6 38.3517 58.6607 38.109 58.782C37.8757 58.894 37.689 59.048 37.549 59.244C37.4183 59.44 37.353 59.664 37.353 59.916C37.353 60.168 37.4183 60.392 37.549 60.588C37.689 60.7747 37.8757 60.924 38.109 61.036C38.3517 61.148 38.6223 61.204 38.921 61.204Z"
                                                        fill="#666666" />
                                                    <path
                                                        d="M320.242 67.14C319.495 67.14 318.851 66.9347 318.31 66.524C317.778 66.1133 317.367 65.5347 317.078 64.788C316.789 64.032 316.644 63.136 316.644 62.1C316.644 61.064 316.789 60.1727 317.078 59.426C317.367 58.67 317.778 58.0867 318.31 57.676C318.851 57.2653 319.495 57.06 320.242 57.06C320.989 57.06 321.633 57.2653 322.174 57.676C322.715 58.0867 323.131 58.67 323.42 59.426C323.709 60.1727 323.854 61.064 323.854 62.1C323.854 63.136 323.709 64.032 323.42 64.788C323.131 65.5347 322.715 66.1133 322.174 66.524C321.633 66.9347 320.989 67.14 320.242 67.14ZM320.242 65.768C320.923 65.768 321.451 65.4507 321.824 64.816C322.197 64.172 322.384 63.2667 322.384 62.1C322.384 60.9333 322.197 60.0327 321.824 59.398C321.451 58.754 320.923 58.432 320.242 58.432C319.561 58.432 319.033 58.754 318.66 59.398C318.287 60.0327 318.1 60.9333 318.1 62.1C318.1 63.2667 318.287 64.172 318.66 64.816C319.033 65.4507 319.561 65.768 320.242 65.768ZM328.018 67.14C327.327 67.14 326.725 66.9813 326.212 66.664C325.708 66.3467 325.232 65.8147 324.784 65.068L325.96 64.326C326.193 64.6713 326.422 64.956 326.646 65.18C326.879 65.3947 327.117 65.5533 327.36 65.656C327.603 65.7587 327.859 65.81 328.13 65.81C328.457 65.81 328.76 65.7307 329.04 65.572C329.32 65.404 329.544 65.1753 329.712 64.886C329.88 64.5967 329.964 64.27 329.964 63.906C329.964 63.542 329.899 63.234 329.768 62.982C329.637 62.7207 329.446 62.5247 329.194 62.394C328.942 62.254 328.643 62.184 328.298 62.184C328.139 62.184 327.971 62.2027 327.794 62.24C327.626 62.268 327.444 62.3147 327.248 62.38C327.052 62.436 326.837 62.5107 326.604 62.604L326.184 61.498L329.208 58.166L329.502 58.6H325.33V57.2H330.944L331.224 57.76L328.018 61.316L327.668 60.952C327.743 60.9147 327.864 60.882 328.032 60.854C328.209 60.8167 328.354 60.798 328.466 60.798C328.877 60.798 329.259 60.8773 329.614 61.036C329.978 61.1853 330.291 61.4 330.552 61.68C330.823 61.9507 331.033 62.2727 331.182 62.646C331.341 63.01 331.42 63.402 331.42 63.822C331.42 64.4567 331.266 65.026 330.958 65.53C330.659 66.0247 330.253 66.4167 329.74 66.706C329.227 66.9953 328.653 67.14 328.018 67.14ZM333.51 67.14C333.202 67.14 332.964 67.0513 332.796 66.874C332.628 66.6873 332.544 66.426 332.544 66.09C332.544 65.782 332.633 65.53 332.81 65.334C332.987 65.138 333.221 65.04 333.51 65.04C333.818 65.04 334.056 65.1333 334.224 65.32C334.392 65.4973 334.476 65.754 334.476 66.09C334.476 66.398 334.387 66.65 334.21 66.846C334.033 67.042 333.799 67.14 333.51 67.14ZM333.51 61.61C333.202 61.61 332.964 61.5213 332.796 61.344C332.628 61.1573 332.544 60.896 332.544 60.56C332.544 60.252 332.633 60 332.81 59.804C332.987 59.608 333.221 59.51 333.51 59.51C333.818 59.51 334.056 59.6033 334.224 59.79C334.392 59.9673 334.476 60.224 334.476 60.56C334.476 60.868 334.387 61.12 334.21 61.316C334.033 61.512 333.799 61.61 333.51 61.61ZM338.698 67.098C338.054 67.098 337.47 66.9533 336.948 66.664C336.425 66.3653 335.991 65.9407 335.646 65.39L336.486 64.452C336.924 64.9373 337.307 65.2687 337.634 65.446C337.96 65.6233 338.315 65.712 338.698 65.712C339.08 65.712 339.426 65.628 339.734 65.46C340.042 65.292 340.284 65.0633 340.462 64.774C340.648 64.4847 340.742 64.1627 340.742 63.808C340.742 63.4347 340.653 63.1033 340.476 62.814C340.308 62.5153 340.079 62.282 339.79 62.114C339.5 61.9367 339.174 61.848 338.81 61.848C338.632 61.848 338.464 61.862 338.306 61.89C338.147 61.9087 337.956 61.96 337.732 62.044C337.508 62.128 337.214 62.2587 336.85 62.436L336.052 61.358L336.626 57.2H341.918V58.6H337.578L337.872 58.334L337.41 61.442L337.06 61.036C337.153 60.9427 337.312 60.854 337.536 60.77C337.76 60.6767 338.007 60.602 338.278 60.546C338.558 60.4807 338.824 60.448 339.076 60.448C339.673 60.448 340.205 60.588 340.672 60.868C341.148 61.1387 341.521 61.5167 341.792 62.002C342.072 62.4873 342.212 63.0427 342.212 63.668C342.212 64.312 342.058 64.8953 341.75 65.418C341.442 65.9313 341.022 66.342 340.49 66.65C339.958 66.9487 339.36 67.098 338.698 67.098ZM347.985 67V59.104L348.335 59.188L345.115 63.122L345.059 62.954H351.149V64.34H344.121L343.477 63.08L348.279 57.2H349.441V67H347.985Z"
                                                        fill="#666666" />
                                                    <g filter="url(#filter2_dd_3387_600)">
                                                        <circle cx="125.25" cy="40" r="10" fill="#1A1C20" />
                                                        <circle cx="125.25" cy="40" r="10" stroke="url(#paint5_linear_3387_600)"
                                                            stroke-width="3" />
                                                    </g>
                                                    <g filter="url(#filter3_dd_3387_600)">
                                                        <circle cx="125" cy="40" r="10" fill="url(#paint6_linear_3387_600)" />
                                                        <circle cx="125" cy="40" r="10" stroke="url(#paint7_linear_3387_600)" />
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_f_3387_600" x="0.563437" y="31.3357" width="134.145"
                                                            height="16.3792" filterUnits="userSpaceOnUse"
                                                            color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                                result="shape" />
                                                            <feGaussianBlur stdDeviation="2.71828"
                                                                result="effect1_foregroundBlur_3387_600" />
                                                        </filter>
                                                        <filter id="filter1_f_3387_600" x="17.6487" y="34.4131" width="328.305"
                                                            height="4.71828" filterUnits="userSpaceOnUse"
                                                            color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                                result="shape" />
                                                            <feGaussianBlur stdDeviation="0.67957"
                                                                result="effect1_foregroundBlur_3387_600" />
                                                        </filter>
                                                        <filter id="filter2_dd_3387_600" x="85.75" y="0.5" width="79" height="79"
                                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="8" dy="8" />
                                                            <feGaussianBlur stdDeviation="10" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.353065 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                result="effect1_dropShadow_3387_600" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="-8" dy="-8" />
                                                            <feGaussianBlur stdDeviation="10" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                            <feBlend mode="normal" in2="effect1_dropShadow_3387_600"
                                                                result="effect2_dropShadow_3387_600" />
                                                            <feBlend mode="normal" in="SourceGraphic"
                                                                in2="effect2_dropShadow_3387_600" result="shape" />
                                                        </filter>
                                                        <filter id="filter3_dd_3387_600" x="86.5" y="1.5" width="77" height="77"
                                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="8" dy="8" />
                                                            <feGaussianBlur stdDeviation="10" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                result="effect1_dropShadow_3387_600" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="-8" dy="-8" />
                                                            <feGaussianBlur stdDeviation="10" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                            <feBlend mode="normal" in2="effect1_dropShadow_3387_600"
                                                                result="effect2_dropShadow_3387_600" />
                                                            <feBlend mode="normal" in="SourceGraphic"
                                                                in2="effect2_dropShadow_3387_600" result="shape" />
                                                        </filter>
                                                        <linearGradient id="paint0_linear_3387_600" x1="10.8081" y1="36.9253"
                                                            x2="10.8081" y2="42.2784" gradientUnits="userSpaceOnUse">
                                                            <stop />
                                                            <stop offset="1" stop-color="#383B46" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_3387_600" x1="6" y1="37.6445" x2="45.0551"
                                                            y2="37.6445" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#3CCB0C" />
                                                            <stop offset="1" stop-color="#268809" />
                                                        </linearGradient>
                                                        <linearGradient id="paint2_linear_3387_600" x1="-35.5063" y1="39.8772"
                                                            x2="-35.1215" y2="49.9599" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#48EC0E" />
                                                            <stop offset="1" stop-color="#0F4206" />
                                                        </linearGradient>
                                                        <linearGradient id="paint3_linear_3387_600" x1="-28.5237" y1="38.8241"
                                                            x2="-28.2505" y2="46.6157" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#84DF59" />
                                                            <stop offset="1" stop-color="#1E701C" />
                                                        </linearGradient>
                                                        <linearGradient id="paint4_linear_3387_600" x1="343.595" y1="36.2217"
                                                            x2="20.0078" y2="36.2217" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.60104" stop-color="#40D50C" stop-opacity="0" />
                                                            <stop offset="1" stop-color="#40D70C" />
                                                        </linearGradient>
                                                        <linearGradient id="paint5_linear_3387_600" x1="102.051" y1="34.3787"
                                                            x2="119.333" y2="56.1362" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#2E5A20" />
                                                            <stop offset="1" stop-color="#2C7C18" />
                                                        </linearGradient>
                                                        <linearGradient id="paint6_linear_3387_600" x1="108.109" y1="41.2782"
                                                            x2="126.154" y2="62.887" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#48EC0E" />
                                                            <stop offset="1" stop-color="#0F4206" />
                                                        </linearGradient>
                                                        <linearGradient id="paint7_linear_3387_600" x1="109.268" y1="37.4528"
                                                            x2="122.953" y2="55.2915" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#84DF59" />
                                                            <stop offset="1" stop-color="#1E701C" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>


                                            </div> */}
                                            <ReactSlider
                                                className="horizontal-slider"
                                                thumbClassName="example-thumb"
                                                trackClassName="example-track"
                                                
                                            />
                                            <div className="d-flex justify-content-between align-items-center rsdv">
                                                <span>0:48</span>
                                                <span>3:54</span>
                                            </div>

                                        </div>
                                        <div class="player-bar my-4">
                                            <button>
                                                <svg width="26" height="22" viewBox="0 0 26 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M25.1874 18.475C25.1874 18.45 25.1749 18.425 25.1749 18.4C25.1624 18.3 25.1499 18.2 25.1124 18.1125C25.0638 18.0031 25.0033 17.9173 24.931 17.8321C24.9271 17.8275 24.9261 17.8248 24.9236 17.8193V17.8193C24.9209 17.8132 24.9098 17.8098 24.905 17.8051C24.8192 17.7215 24.7217 17.6611 24.6124 17.6125C24.4999 17.5625 24.3749 17.5375 24.2499 17.5375L18.4249 17.5624C18.4166 17.5625 18.4082 17.5625 18.3999 17.5625V17.5625C17.6499 17.5625 16.9249 17.2125 16.4749 16.6125L14.9499 14.65C14.6374 14.2375 14.0499 14.1625 13.6374 14.4875C13.2249 14.8125 13.1499 15.3875 13.4749 15.8L14.9999 17.7625C15.8124 18.8125 17.0874 19.4375 18.4124 19.4375H18.4249L20.7323 19.4294C21.194 19.4278 21.4264 19.986 21.0999 20.3125V20.3125C20.7374 20.675 20.7374 21.275 21.0999 21.6375C21.2874 21.825 21.5249 21.9125 21.7624 21.9125C21.9999 21.9125 22.2374 21.825 22.4249 21.6375L24.9249 19.1375C25.0124 19.05 25.0749 18.95 25.1249 18.8375C25.1624 18.7125 25.1874 18.5875 25.1874 18.475Z"
                                                        fill="#797C7F" />
                                                    <path
                                                        d="M8.525 4.3625C7.7125 3.2375 6.4125 2.575 5.025 2.575C5.0125 2.575 5.0125 2.575 5 2.575L1.75 2.5875C1.2375 2.5875 0.8125 3.0125 0.8125 3.525C0.8125 4.0375 1.2375 4.4625 1.75 4.4625L5.0125 4.45H5.025C5.8125 4.45 6.55 4.825 7 5.4625L8.35 7.3375C8.5375 7.5875 8.825 7.725 9.1125 7.725C9.3 7.725 9.5 7.6625 9.6625 7.55C10.0875 7.2375 10.175 6.65 9.875 6.2375L8.525 4.3625Z"
                                                        fill="#797C7F" />
                                                    <path
                                                        d="M25.175 3.59999C25.175 3.57499 25.1875 3.54999 25.1875 3.53749C25.1875 3.41249 25.1625 3.28749 25.1125 3.17499C25.0625 3.06249 25 2.96249 24.9125 2.87499L22.4125 0.374994C22.05 0.0124939 21.45 0.0124939 21.0875 0.374994C20.725 0.737494 20.725 1.33749 21.0875 1.69999V1.69999C21.414 2.02645 21.1816 2.58459 20.7199 2.5829L18.5625 2.57499C18.55 2.57499 18.55 2.57499 18.5375 2.57499C17.1 2.57499 15.75 3.28749 14.95 4.49999L6.9625 16.475C6.5125 17.15 5.75 17.5625 4.9375 17.5625H4.925L1.75 17.5375C1.2375 17.5375 0.8125 17.95 0.8125 18.475C0.8125 18.9875 1.225 19.4125 1.75 19.4125L4.9375 19.425C4.95 19.425 4.95 19.425 4.9625 19.425C6.4125 19.425 7.75 18.7125 8.55 17.5L16.5375 5.52499C16.9875 4.84999 17.75 4.43749 18.5625 4.43749H18.575L24.25 4.46249C24.375 4.46249 24.4875 4.43749 24.6125 4.38749C24.7221 4.33876 24.8199 4.27816 24.9058 4.1941C24.9101 4.1899 24.9114 4.18722 24.9138 4.18173V4.18173C24.9165 4.1757 24.9275 4.1721 24.9318 4.16707C25.0045 4.08219 25.0761 3.9966 25.1125 3.88749C25.15 3.79999 25.1625 3.69999 25.175 3.59999Z"
                                                        fill="#2EA00A" />
                                                </svg>
                                            </button>
                                            <button>
                                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M16.3861 0.255285C17.0429 -0.255604 18 0.212491 18 1.04464V20.9554C18 21.7875 17.0429 22.2556 16.3861 21.7447L3.5863 11.7894C3.07156 11.389 3.07156 10.611 3.58631 10.2106L16.3861 0.255285Z"
                                                        fill="#797C7F" />
                                                    <rect width="3.42857" height="17.1429" rx="1"
                                                        transform="matrix(-1 0 0 1 4.28711 2.42853)" fill="#2EA00A" />
                                                </svg>

                                            </button>
                                            <button>
                                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M16.3861 0.255285C17.0429 -0.255604 18 0.212491 18 1.04464V20.9554C18 21.7875 17.0429 22.2556 16.3861 21.7447L3.5863 11.7894C3.07156 11.389 3.07156 10.611 3.58631 10.2106L16.3861 0.255285Z"
                                                        fill="#797C7F" />
                                                    <rect width="3.42857" height="17.1429" rx="1"
                                                        transform="matrix(-1 0 0 1 4.28711 2.42853)" fill="#2EA00A" />
                                                </svg>
                                            </button>
                                            <button class="play-btn">
                                                <svg width="100" height="100" viewBox="0 0 150 150" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_dd_0_1)">
                                                        <circle cx="75.127" cy="75" r="45" fill="#1A1C20" />
                                                        <circle cx="75.127" cy="75" r="45" stroke="url(#paint0_linear_0_1)"
                                                            stroke-width="3" />
                                                    </g>
                                                    <g filter="url(#filter1_dd_0_1)">
                                                        <circle cx="74" cy="75" r="45" fill="url(#paint1_linear_0_1)" />
                                                        <circle cx="74" cy="75" r="45" stroke="url(#paint2_linear_0_1)"
                                                            stroke-width="2" />
                                                    </g>
                                                    <path
                                                        d="M29 75.2899H44.9714C45.5237 75.2899 45.9714 74.8421 45.9714 74.2899V67.3325C45.9714 66.1932 47.5717 65.9405 47.9228 67.0244L50.6 75.2899L54.667 90.8769C54.9338 91.8994 56.3976 91.8632 56.6136 90.8288L59.6911 76.0855C59.7878 75.622 60.1964 75.2899 60.67 75.2899H71.1714H92.114C92.513 75.2899 92.8739 75.0526 93.0321 74.6863L97.0248 65.4412C97.4554 64.4443 98.9429 64.7518 98.9429 65.8377V87.2066C98.9429 88.3798 100.614 88.5943 100.91 87.4591L103.891 76.0374C104.006 75.5971 104.403 75.2899 104.858 75.2899H119"
                                                        stroke="white" stroke-opacity="0.3" stroke-width="2" />
                                                    <g filter="url(#filter2_dd_0_1)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M67.2 57.4C65.8815 56.4111 64 57.3519 64 59V92C64 93.6481 65.8815 94.5889 67.2 93.6L89.2 77.1C90.2667 76.3 90.2667 74.7 89.2 73.9L67.2 57.4Z"
                                                            fill="white" />
                                                    </g>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M70.6074 66.2292C69.9494 65.726 69 66.1952 69 67.0236V83.9764C69 84.8048 69.9494 85.274 70.6075 84.7708L81.692 76.2944C82.2154 75.8941 82.2154 75.1059 81.692 74.7056L70.6074 66.2292Z"
                                                        fill="#2FA30A" />
                                                    <defs>
                                                        <filter id="filter0_dd_0_1" x="0.626953" y="0.5" width="149" height="149"
                                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="8" dy="8" />
                                                            <feGaussianBlur stdDeviation="10" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.353065 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                result="effect1_dropShadow_0_1" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="-8" dy="-8" />
                                                            <feGaussianBlur stdDeviation="10" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                            <feBlend mode="normal" in2="effect1_dropShadow_0_1"
                                                                result="effect2_dropShadow_0_1" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1"
                                                                result="shape" />
                                                        </filter>
                                                        <filter id="filter1_dd_0_1" x="0" y="1" width="148" height="148"
                                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="8" dy="8" />
                                                            <feGaussianBlur stdDeviation="10" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                result="effect1_dropShadow_0_1" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="-8" dy="-8" />
                                                            <feGaussianBlur stdDeviation="10" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                            <feBlend mode="normal" in2="effect1_dropShadow_0_1"
                                                                result="effect2_dropShadow_0_1" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1"
                                                                result="shape" />
                                                        </filter>
                                                        <filter id="filter2_dd_0_1" x="48" y="40.9964" width="58" height="69.0073"
                                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="4" dy="4" />
                                                            <feGaussianBlur stdDeviation="6" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.301983 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                result="effect1_dropShadow_0_1" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                result="hardAlpha" />
                                                            <feOffset dx="-4" dy="-4" />
                                                            <feGaussianBlur stdDeviation="6" />
                                                            <feColorMatrix type="matrix"
                                                                values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.201623 0" />
                                                            <feBlend mode="normal" in2="effect1_dropShadow_0_1"
                                                                result="effect2_dropShadow_0_1" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1"
                                                                result="shape" />
                                                        </filter>
                                                        <linearGradient id="paint0_linear_0_1" x1="-29.268" y1="49.704" x2="48.4988"
                                                            y2="147.613" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#2E5A20" />
                                                            <stop offset="1" stop-color="#2C7C18" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_0_1" x1="-2.00835" y1="80.7518"
                                                            x2="79.1928" y2="177.992" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#48EC0E" />
                                                            <stop offset="1" stop-color="#0F4206" />
                                                        </linearGradient>
                                                        <linearGradient id="paint2_linear_0_1" x1="3.2082" y1="63.5376" x2="64.7891"
                                                            y2="143.812" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#84DF59" />
                                                            <stop offset="1" stop-color="#1E701C" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </button>
                                            <button>
                                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M1.61394 0.255289C0.957085 -0.255601 0 0.212491 0 1.04464V20.9554C0 21.7875 0.957082 22.2556 1.61394 21.7447L14.4137 11.7894C14.9284 11.389 14.9284 10.611 14.4137 10.2106L1.61394 0.255289Z"
                                                        fill="#797C7F" />
                                                    <rect x="13.7129" y="2.42853" width="3.42857" height="17.1429" rx="1"
                                                        fill="#2EA00A" />
                                                </svg>

                                            </button>
                                            <button>
                                                <svg width="28" height="26" viewBox="0 0 28 26" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.8875 19.475C3.65 19.475 3.4125 19.3875 3.225 19.2C1.5125 17.475 0.5625 15.2 0.5625 12.7875C0.5625 7.775 4.625 3.7 9.625 3.7L15.3293 3.7188C16.0078 3.72103 16.3409 2.89339 15.85 2.425V2.425C15.475 2.0625 15.4625 1.475 15.825 1.1C16.1875 0.725002 16.775 0.712502 17.15 1.075L20.2 4C20.475 4.2625 20.5625 4.675 20.425 5.025C20.2875 5.375 19.9375 5.6125 19.55 5.6125L9.625 5.5875C5.6625 5.5875 2.4375 8.825 2.4375 12.8C2.4375 14.7125 3.1875 16.525 4.55 17.8875C4.9125 18.25 4.9125 18.85 4.55 19.2125C4.3625 19.3875 4.125 19.475 3.8875 19.475Z"
                                                        fill="#797C7F" />
                                                    <path
                                                        d="M11.4999 25.1875C11.2624 25.1875 11.0374 25.1 10.8499 24.925L7.79988 22C7.52488 21.7375 7.43738 21.325 7.57488 20.975C7.71238 20.625 8.06238 20.3875 8.44988 20.3875L18.3874 20.4125C22.3499 20.4125 25.5749 17.175 25.5749 13.2C25.5749 11.2875 24.8249 9.475 23.4624 8.1125C23.0999 7.75 23.0999 7.15 23.4624 6.7875C23.8249 6.425 24.4249 6.425 24.7874 6.7875C26.4999 8.5125 27.4499 10.7875 27.4499 13.2C27.4499 18.2125 23.3874 22.2875 18.3874 22.2875L12.6831 22.2687C12.0045 22.2665 11.6715 23.0941 12.1624 23.5625V23.5625C12.5374 23.925 12.5499 24.5125 12.1874 24.8875C11.9874 25.0875 11.7499 25.1875 11.4999 25.1875Z"
                                                        fill="#797C7F" />
                                                    <path
                                                        d="M10.25 17.375H17.75C20.15 17.375 22.125 15.4125 22.125 13C22.125 10.6 20.1625 8.625 17.75 8.625H10.25C7.85 8.625 5.875 10.5875 5.875 13C5.875 15.4125 7.8375 17.375 10.25 17.375Z"
                                                        fill="#2EA00A" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div class="player-menu">
                                            <button class="pull-btn">
                                                <svg width="40" height="7" viewBox="0 0 40 7" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 6L20 1L39 6" stroke="#2D2E32" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p>Pull up the song list</p>
                                            </button>
                                        </div>
                                    </main>
                                    <div class="popup-list">
                                        <div class="login_form search-from">
                                            <form action="">
                                                <div class="form-group">
                                                    <input type="text" name="" class="form-control" placeholder="search" />
                                                    <button class="search-f">
                                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M12.4582 22.75C18.1421 22.75 22.7498 18.1423 22.7498 12.4583C22.7498 6.77439 18.1421 2.16666 12.4582 2.16666C6.77424 2.16666 2.1665 6.77439 2.1665 12.4583C2.1665 18.1423 6.77424 22.75 12.4582 22.75Z"
                                                                fill="#2E3339"></path>
                                                            <path
                                                                d="M23.0748 23.8333C22.8798 23.8333 22.6848 23.7575 22.5439 23.6167L20.5289 21.6017C20.2364 21.3092 20.2364 20.8325 20.5289 20.5292C20.8214 20.2367 21.2981 20.2367 21.6014 20.5292L23.6164 22.5442C23.9089 22.8367 23.9089 23.3133 23.6164 23.6167C23.4648 23.7575 23.2698 23.8333 23.0748 23.8333Z"
                                                                fill="#2E3339"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="song-list">
                                            <div class="music-box-wrapper">
                                                <div class="music-b">
                                                    <div class="thumb">
                                                        <img src={sing5Img} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <h5>Naanga Vera Maari...</h5>
                                                        <p>Yuvan Shankar Raja | Anurag...</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_dd_3397_598)">
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966" fill="#1A1C20" />
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966"
                                                                    stroke="url(#paint0_linear_3397_598)" stroke-width="1.5" />
                                                            </g>
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M43.6508 39.415C43.0021 38.859 42 39.3199 42 40.1742V47.8258C42 48.6801 43.0021 49.141 43.6508 48.585L48.1142 44.7593C48.5798 44.3602 48.5798 43.6398 48.1142 43.2407L43.6508 39.415Z"
                                                                fill="#797C7F" />
                                                            <defs>
                                                                <filter id="filter0_dd_3397_598" x="0.25" y="0.25" width="87.293"
                                                                    height="87.2931" filterUnits="userSpaceOnUse"
                                                                    color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="8" dy="8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.353065 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                                        result="effect1_dropShadow_3397_598" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="-8" dy="-8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_3397_598"
                                                                        result="effect2_dropShadow_3397_598" />
                                                                    <feBlend mode="normal" in="SourceGraphic"
                                                                        in2="effect2_dropShadow_3397_598" result="shape" />
                                                                </filter>
                                                                <linearGradient id="paint0_linear_3397_598" x1="9.33823"
                                                                    y1="35.5227" x2="35.0817" y2="67.9339"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#41464B" />
                                                                    <stop offset="1" stop-color="#0E1013" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                </div>
                                            </div>
                                            <div class="music-box-wrapper">
                                                <div class="music-b">
                                                    <div class="thumb">
                                                        <img src={sing1Img} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <h5>Naanga Vera Maari...</h5>
                                                        <p>Yuvan Shankar Raja | Anurag...</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_dd_3397_598)">
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966" fill="#1A1C20" />
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966"
                                                                    stroke="url(#paint0_linear_3397_598)" stroke-width="1.5" />
                                                            </g>
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M43.6508 39.415C43.0021 38.859 42 39.3199 42 40.1742V47.8258C42 48.6801 43.0021 49.141 43.6508 48.585L48.1142 44.7593C48.5798 44.3602 48.5798 43.6398 48.1142 43.2407L43.6508 39.415Z"
                                                                fill="#797C7F" />
                                                            <defs>
                                                                <filter id="filter0_dd_3397_598" x="0.25" y="0.25" width="87.293"
                                                                    height="87.2931" filterUnits="userSpaceOnUse"
                                                                    color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="8" dy="8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.353065 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                                        result="effect1_dropShadow_3397_598" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="-8" dy="-8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_3397_598"
                                                                        result="effect2_dropShadow_3397_598" />
                                                                    <feBlend mode="normal" in="SourceGraphic"
                                                                        in2="effect2_dropShadow_3397_598" result="shape" />
                                                                </filter>
                                                                <linearGradient id="paint0_linear_3397_598" x1="9.33823"
                                                                    y1="35.5227" x2="35.0817" y2="67.9339"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#41464B" />
                                                                    <stop offset="1" stop-color="#0E1013" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                </div>
                                            </div>
                                            <div class="music-box-wrapper">
                                                <div class="music-b">
                                                    <div class="thumb">
                                                        <img src={sing6Img} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <h5>Naanga Vera Maari...</h5>
                                                        <p>Yuvan Shankar Raja | Anurag...</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_dd_3397_599)">
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966"
                                                                    fill="url(#paint0_linear_3397_599)" />
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966"
                                                                    stroke="url(#paint1_linear_3397_599)" stroke-width="2" />
                                                            </g>
                                                            <rect x="40.1729" y="39.0552" width="2" height="9.68276" rx="0.9"
                                                                fill="white" />
                                                            <rect x="45.7588" y="39.0552" width="2" height="9.68276" rx="0.9"
                                                                fill="white" />
                                                            <defs>
                                                                <filter id="filter0_dd_3397_599" x="0" y="0" width="87.793"
                                                                    height="87.7931" filterUnits="userSpaceOnUse"
                                                                    color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="8" dy="8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                                        result="effect1_dropShadow_3397_599" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="-8" dy="-8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_3397_599"
                                                                        result="effect2_dropShadow_3397_599" />
                                                                    <feBlend mode="normal" in="SourceGraphic"
                                                                        in2="effect2_dropShadow_3397_599" result="shape" />
                                                                </filter>
                                                                <linearGradient id="paint0_linear_3397_599" x1="18.7352"
                                                                    y1="45.8006" x2="45.6156" y2="77.9903"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#48EC0E" />
                                                                    <stop offset="1" stop-color="#0F4206" />
                                                                </linearGradient>
                                                                <linearGradient id="paint1_linear_3397_599" x1="20.462" y1="40.1021"
                                                                    x2="40.8474" y2="66.6757" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#84DF59" />
                                                                    <stop offset="1" stop-color="#1E701C" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>



                                                    </button>
                                                </div>
                                            </div>
                                            <div class="music-box-wrapper">
                                                <div class="music-b">
                                                    <div class="thumb">
                                                        <img src={sing5Img} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <h5>Naanga Vera Maari...</h5>
                                                        <p>Yuvan Shankar Raja | Anurag...</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_dd_3397_598)">
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966" fill="#1A1C20" />
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966"
                                                                    stroke="url(#paint0_linear_3397_598)" stroke-width="1.5" />
                                                            </g>
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M43.6508 39.415C43.0021 38.859 42 39.3199 42 40.1742V47.8258C42 48.6801 43.0021 49.141 43.6508 48.585L48.1142 44.7593C48.5798 44.3602 48.5798 43.6398 48.1142 43.2407L43.6508 39.415Z"
                                                                fill="#797C7F" />
                                                            <defs>
                                                                <filter id="filter0_dd_3397_598" x="0.25" y="0.25" width="87.293"
                                                                    height="87.2931" filterUnits="userSpaceOnUse"
                                                                    color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="8" dy="8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.353065 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                                        result="effect1_dropShadow_3397_598" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="-8" dy="-8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_3397_598"
                                                                        result="effect2_dropShadow_3397_598" />
                                                                    <feBlend mode="normal" in="SourceGraphic"
                                                                        in2="effect2_dropShadow_3397_598" result="shape" />
                                                                </filter>
                                                                <linearGradient id="paint0_linear_3397_598" x1="9.33823"
                                                                    y1="35.5227" x2="35.0817" y2="67.9339"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#41464B" />
                                                                    <stop offset="1" stop-color="#0E1013" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                </div>
                                            </div>
                                            <div class="music-box-wrapper">
                                                <div class="music-b">
                                                    <div class="thumb">
                                                        <img src={sing1Img} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <h5>Naanga Vera Maari...</h5>
                                                        <p>Yuvan Shankar Raja | Anurag...</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_dd_3397_598)">
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966" fill="#1A1C20" />
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966"
                                                                    stroke="url(#paint0_linear_3397_598)" stroke-width="1.5" />
                                                            </g>
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M43.6508 39.415C43.0021 38.859 42 39.3199 42 40.1742V47.8258C42 48.6801 43.0021 49.141 43.6508 48.585L48.1142 44.7593C48.5798 44.3602 48.5798 43.6398 48.1142 43.2407L43.6508 39.415Z"
                                                                fill="#797C7F" />
                                                            <defs>
                                                                <filter id="filter0_dd_3397_598" x="0.25" y="0.25" width="87.293"
                                                                    height="87.2931" filterUnits="userSpaceOnUse"
                                                                    color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="8" dy="8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.353065 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                                        result="effect1_dropShadow_3397_598" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="-8" dy="-8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_3397_598"
                                                                        result="effect2_dropShadow_3397_598" />
                                                                    <feBlend mode="normal" in="SourceGraphic"
                                                                        in2="effect2_dropShadow_3397_598" result="shape" />
                                                                </filter>
                                                                <linearGradient id="paint0_linear_3397_598" x1="9.33823"
                                                                    y1="35.5227" x2="35.0817" y2="67.9339"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#41464B" />
                                                                    <stop offset="1" stop-color="#0E1013" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                </div>
                                            </div>
                                            <div class="music-box-wrapper"> 
                                                <div class="music-b">
                                                    <div class="thumb">
                                                        <img src={sing7Img} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <h5>Naanga Vera Maari...</h5>
                                                        <p>Yuvan Shankar Raja | Anurag...</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_dd_3397_598)">
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966" fill="#1A1C20" />
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966"
                                                                    stroke="url(#paint0_linear_3397_598)" stroke-width="1.5" />
                                                            </g>
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M43.6508 39.415C43.0021 38.859 42 39.3199 42 40.1742V47.8258C42 48.6801 43.0021 49.141 43.6508 48.585L48.1142 44.7593C48.5798 44.3602 48.5798 43.6398 48.1142 43.2407L43.6508 39.415Z"
                                                                fill="#797C7F" />
                                                            <defs>
                                                                <filter id="filter0_dd_3397_598" x="0.25" y="0.25" width="87.293"
                                                                    height="87.2931" filterUnits="userSpaceOnUse"
                                                                    color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="8" dy="8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.353065 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                                        result="effect1_dropShadow_3397_598" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="-8" dy="-8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_3397_598"
                                                                        result="effect2_dropShadow_3397_598" />
                                                                    <feBlend mode="normal" in="SourceGraphic"
                                                                        in2="effect2_dropShadow_3397_598" result="shape" />
                                                                </filter>
                                                                <linearGradient id="paint0_linear_3397_598" x1="9.33823"
                                                                    y1="35.5227" x2="35.0817" y2="67.9339"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#41464B" />
                                                                    <stop offset="1" stop-color="#0E1013" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                </div>
                                            </div>
                                            <div class="music-box-wrapper">
                                                <div class="music-b">
                                                    <div class="thumb">
                                                        <img src={sing3Img} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <h5>Naanga Vera Maari...</h5>
                                                        <p>Yuvan Shankar Raja | Anurag...</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_dd_3397_598)">
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966" fill="#1A1C20" />
                                                                <circle cx="43.8966" cy="43.8966" r="14.8966"
                                                                    stroke="url(#paint0_linear_3397_598)" stroke-width="1.5" />
                                                            </g>
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M43.6508 39.415C43.0021 38.859 42 39.3199 42 40.1742V47.8258C42 48.6801 43.0021 49.141 43.6508 48.585L48.1142 44.7593C48.5798 44.3602 48.5798 43.6398 48.1142 43.2407L43.6508 39.415Z"
                                                                fill="#797C7F" />
                                                            <defs>
                                                                <filter id="filter0_dd_3397_598" x="0.25" y="0.25" width="87.293"
                                                                    height="87.2931" filterUnits="userSpaceOnUse"
                                                                    color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="8" dy="8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.353065 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                                                        result="effect1_dropShadow_3397_598" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                        result="hardAlpha" />
                                                                    <feOffset dx="-8" dy="-8" />
                                                                    <feGaussianBlur stdDeviation="10" />
                                                                    <feColorMatrix type="matrix"
                                                                        values="0 0 0 0 0.477462 0 0 0 0 0.525621 0 0 0 0 0.593042 0 0 0 0.101672 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_3397_598"
                                                                        result="effect2_dropShadow_3397_598" />
                                                                    <feBlend mode="normal" in="SourceGraphic"
                                                                        in2="effect2_dropShadow_3397_598" result="shape" />
                                                                </filter>
                                                                <linearGradient id="paint0_linear_3397_598" x1="9.33823"
                                                                    y1="35.5227" x2="35.0817" y2="67.9339"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#41464B" />
                                                                    <stop offset="1" stop-color="#0E1013" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <>
                                        <div class="footer-bar">
                                            <div class="icon-bar active">
                                                <button>
                                                    <svg class="active" width="84" height="82" viewBox="0 0 84 81" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_54_31)">
                                                            <path
                                                                d="M54.5 51.5625C53.8096 51.5625 53.25 51.0029 53.25 50.3125V37.475C53.25 36.7 52.9 35.975 52.2875 35.5C51.3162 34.7419 50.7441 33.5818 50.7341 32.3497L50.725 31.2375C50.725 30.55 50.1625 30 49.475 30H47.3328C45.9585 30 44.6232 29.5427 43.5375 28.7C42.6375 27.9875 41.3625 27.9875 40.4625 28.7L31.7125 35.5C31.1 35.975 30.75 36.7 30.75 37.4625L30.6928 50.375C30.6899 51.0317 30.1567 51.5625 29.5 51.5625C28.9875 51.5625 28.5625 51.9875 28.5625 52.5C28.5625 53.0125 28.9875 53.4375 29.5 53.4375H54.5C55.0125 53.4375 55.4375 53.0125 55.4375 52.5C55.4375 51.9875 55.0125 51.5625 54.5 51.5625ZM45.125 48.4375C45.125 50.1634 43.7259 51.5625 42 51.5625C40.2741 51.5625 38.875 50.1634 38.875 48.4375V48.125C38.875 47.0875 39.7125 46.25 40.75 46.25H43.25C44.2875 46.25 45.125 47.0875 45.125 48.125V48.4375Z"
                                                                fill="#5E6266" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_54_31" x="0.5625" y="0.165649" width="82.875"
                                                                height="81.2719" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_54_31" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_54_31"
                                                                    result="effect2_dropShadow_54_31" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_54_31" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                    <svg class="inactive" width="84" height="82" viewBox="0 0 84 80" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_38_101)">
                                                            <path
                                                                d="M54.5 52.5625V52.5625C53.8096 52.5625 53.25 52.0029 53.25 51.3125V38.475C53.25 37.7 52.9 36.975 52.2875 36.5V36.5C51.3162 35.7419 50.7441 34.5818 50.7341 33.3497L50.725 32.2375C50.725 31.55 50.1625 31 49.475 31H47.3328C45.9585 31 44.6232 30.5427 43.5375 29.7V29.7C42.6375 28.9875 41.3625 28.9875 40.4625 29.7L31.7125 36.5C31.1 36.975 30.75 37.7 30.75 38.4625L30.6928 51.375C30.6899 52.0317 30.1567 52.5625 29.5 52.5625V52.5625C28.9875 52.5625 28.5625 52.9875 28.5625 53.5C28.5625 54.0125 28.9875 54.4375 29.5 54.4375H54.5C55.0125 54.4375 55.4375 54.0125 55.4375 53.5C55.4375 52.9875 55.0125 52.5625 54.5 52.5625ZM45.125 49.4375C45.125 51.1634 43.7259 52.5625 42 52.5625V52.5625C40.2741 52.5625 38.875 51.1634 38.875 49.4375V49.125C38.875 48.0875 39.7125 47.25 40.75 47.25H43.25C44.2875 47.25 45.125 48.0875 45.125 49.125V49.4375Z"
                                                                fill="url(#paint0_linear_38_101)"
                                                                stroke="url(#paint1_linear_38_101)" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_38_101" x="0.0625" y="0.665649" width="83.875"
                                                                height="82.2719" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_38_101" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_38_101"
                                                                    result="effect2_dropShadow_38_101" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_38_101" result="shape" />
                                                            </filter>
                                                            <linearGradient id="paint0_linear_38_101" x1="19.3031" y1="43.4167"
                                                                x2="41.8146" y2="72.0847" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_38_101" x1="20.8608" y1="38.583"
                                                                x2="37.8496" y2="62.1337" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="icon-bar">
                                                <button>
                                                    <svg class="active" width="83" height="82" viewBox="0 0 82 80" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_39_106)">
                                                            <path
                                                                d="M40.375 52.25C46.9334 52.25 52.25 46.9334 52.25 40.375C52.25 33.8166 46.9334 28.5 40.375 28.5C33.8166 28.5 28.5 33.8166 28.5 40.375C28.5 46.9334 33.8166 52.25 40.375 52.25Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M52.6249 53.5C52.3999 53.5 52.1749 53.4125 52.0124 53.25L49.6875 50.925C49.35 50.5875 49.35 50.0375 49.6875 49.6875C50.025 49.35 50.575 49.35 50.925 49.6875L53.2499 52.0125C53.5874 52.35 53.5874 52.9 53.2499 53.25C53.0749 53.4125 52.8499 53.5 52.6249 53.5Z"
                                                                fill="#5E6266" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_39_106" x="0.5" y="0.5" width="81.0032"
                                                                height="81" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_39_106" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_39_106"
                                                                    result="effect2_dropShadow_39_106" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_39_106" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                    <svg class="inactive" width="83" height="82" viewBox="0 0 83 82" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_54_30)">
                                                            <path
                                                                d="M40.375 52.25C46.9334 52.25 52.25 46.9334 52.25 40.375C52.25 33.8166 46.9334 28.5 40.375 28.5C33.8166 28.5 28.5 33.8166 28.5 40.375C28.5 46.9334 33.8166 52.25 40.375 52.25Z"
                                                                fill="url(#paint0_linear_54_30)"
                                                                stroke="url(#paint1_linear_54_30)" />
                                                            <path
                                                                d="M52.6252 53.5C52.4002 53.5 52.1752 53.4125 52.0127 53.25L49.6877 50.925C49.3502 50.5875 49.3502 50.0375 49.6877 49.6875C50.0252 49.35 50.5752 49.35 50.9252 49.6875L53.2502 52.0125C53.5877 52.35 53.5877 52.9 53.2502 53.25C53.0752 53.4125 52.8502 53.5 52.6252 53.5Z"
                                                                fill="url(#paint2_linear_54_30)"
                                                                stroke="url(#paint3_linear_54_30)" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_54_30" x="0" y="0" width="82.0034" height="82"
                                                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_54_30" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_54_30"
                                                                    result="effect2_dropShadow_54_30" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_54_30" result="shape" />
                                                            </filter>
                                                            <linearGradient id="paint0_linear_54_30" x1="20.3172" y1="41.8928"
                                                                x2="41.7453" y2="67.5533" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_54_30" x1="21.6938" y1="37.3502"
                                                                x2="37.9443" y2="58.5337" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_54_30" x1="48.0327" y1="51.727"
                                                                x2="51.7004" y2="56.1225" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint3_linear_54_30" x1="48.2686" y1="50.9494"
                                                                x2="51.0498" y2="54.5777" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="icon-bar">
                                                <button>
                                                    <svg class="active" width="84" height="82" viewBox="0 0 84 82" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_54_32)">
                                                            <path
                                                                d="M54.5 30.6875H29.5C28.9875 30.6875 28.5625 30.2625 28.5625 29.75C28.5625 29.2375 28.9875 28.8125 29.5 28.8125H54.5C55.0125 28.8125 55.4375 29.2375 55.4375 29.75C55.4375 30.2625 55.0125 30.6875 54.5 30.6875Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M40.75 38.1875H29.5C28.9875 38.1875 28.5625 37.7625 28.5625 37.25C28.5625 36.7375 28.9875 36.3125 29.5 36.3125H40.75C41.2625 36.3125 41.6875 36.7375 41.6875 37.25C41.6875 37.7625 41.2625 38.1875 40.75 38.1875Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M37 45.6875H29.5C28.9875 45.6875 28.5625 45.2625 28.5625 44.75C28.5625 44.2375 28.9875 43.8125 29.5 43.8125H37C37.5125 43.8125 37.9375 44.2375 37.9375 44.75C37.9375 45.2625 37.5125 45.6875 37 45.6875Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M34.5 53.1875H29.5C28.9875 53.1875 28.5625 52.7625 28.5625 52.25C28.5625 51.7375 28.9875 51.3125 29.5 51.3125H34.5C35.0125 51.3125 35.4375 51.7375 35.4375 52.25C35.4375 52.7625 35.0125 53.1875 34.5 53.1875Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M54.3252 35.6C53.5877 35.0375 52.5752 34.925 51.3877 35.25L45.9502 36.725C44.4877 37.125 43.5877 38.3125 43.5877 39.8125V43V45.7263C43.5877 46.5612 42.6351 47.1125 41.8002 47.1125C39.7877 47.1125 38.1377 48.75 38.1377 50.775C38.1377 52.7875 39.7752 54.4375 41.8002 54.4375C43.8252 54.4375 45.4627 52.8 45.4627 50.775V46.8046C45.4627 44.9789 46.6843 43.3788 48.4455 42.8978L51.7766 41.9879C52.676 41.7422 53.5627 42.4192 53.5627 43.3516V43.9138C53.5627 44.7487 52.6101 45.3 51.7752 45.3C49.7627 45.3 48.1127 46.9375 48.1127 48.9625C48.1127 50.975 49.7502 52.625 51.7752 52.625C53.8002 52.625 55.4377 50.9875 55.4377 48.9625V40.275V38.3375C55.4377 37.075 55.0627 36.15 54.3252 35.6ZM41.8002 52.5625C40.8127 52.5625 40.0127 51.7625 40.0127 50.775C40.0127 49.7875 40.8127 48.9875 41.8002 48.9875C42.7877 48.9875 43.5877 49.7875 43.5877 50.775C43.5877 51.7625 42.7877 52.5625 41.8002 52.5625ZM51.7752 50.75C50.7877 50.75 49.9877 49.95 49.9877 48.9625C49.9877 47.975 50.7877 47.175 51.7752 47.175C52.7627 47.175 53.5627 47.975 53.5627 48.9625C53.5627 49.95 52.7627 50.75 51.7752 50.75Z"
                                                                fill="#5E6266" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_54_32" x="0.5625" y="0.8125" width="82.875"
                                                                height="81.625" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_54_32" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_54_32"
                                                                    result="effect2_dropShadow_54_32" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_54_32" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                    <svg class="inactive" width="84" height="82" viewBox="0 0 84 82" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_66_3919)">
                                                            <path
                                                                d="M54.5 30.6875H29.5C28.9875 30.6875 28.5625 30.2625 28.5625 29.75C28.5625 29.2375 28.9875 28.8125 29.5 28.8125H54.5C55.0125 28.8125 55.4375 29.2375 55.4375 29.75C55.4375 30.2625 55.0125 30.6875 54.5 30.6875Z"
                                                                fill="url(#paint0_linear_66_3919)"
                                                                stroke="url(#paint1_linear_66_3919)" />
                                                            <path
                                                                d="M40.75 38.1875H29.5C28.9875 38.1875 28.5625 37.7625 28.5625 37.25C28.5625 36.7375 28.9875 36.3125 29.5 36.3125H40.75C41.2625 36.3125 41.6875 36.7375 41.6875 37.25C41.6875 37.7625 41.2625 38.1875 40.75 38.1875Z"
                                                                fill="url(#paint2_linear_66_3919)"
                                                                stroke="url(#paint3_linear_66_3919)" />
                                                            <path
                                                                d="M37 45.6875H29.5C28.9875 45.6875 28.5625 45.2625 28.5625 44.75C28.5625 44.2375 28.9875 43.8125 29.5 43.8125H37C37.5125 43.8125 37.9375 44.2375 37.9375 44.75C37.9375 45.2625 37.5125 45.6875 37 45.6875Z"
                                                                fill="url(#paint4_linear_66_3919)"
                                                                stroke="url(#paint5_linear_66_3919)" />
                                                            <path
                                                                d="M34.5 53.1875H29.5C28.9875 53.1875 28.5625 52.7625 28.5625 52.25C28.5625 51.7375 28.9875 51.3125 29.5 51.3125H34.5C35.0125 51.3125 35.4375 51.7375 35.4375 52.25C35.4375 52.7625 35.0125 53.1875 34.5 53.1875Z"
                                                                fill="url(#paint6_linear_66_3919)"
                                                                stroke="url(#paint7_linear_66_3919)" />
                                                            <path
                                                                d="M54.3252 35.6C53.5877 35.0375 52.5752 34.925 51.3877 35.25L45.9502 36.725C44.4877 37.125 43.5877 38.3125 43.5877 39.8125V43V45.7262C43.5877 46.5611 42.6351 47.1125 41.8002 47.1125C39.7877 47.1125 38.1377 48.75 38.1377 50.775C38.1377 52.7875 39.7752 54.4375 41.8002 54.4375C43.8252 54.4375 45.4627 52.8 45.4627 50.775V46.8046C45.4627 44.9788 46.6843 43.3788 48.4455 42.8977L51.7766 41.9879C52.676 41.7422 53.5627 42.4192 53.5627 43.3515V43.9137C53.5627 44.7486 52.6101 45.3 51.7752 45.3C49.7627 45.3 48.1127 46.9375 48.1127 48.9625C48.1127 50.975 49.7502 52.625 51.7752 52.625C53.8002 52.625 55.4377 50.9875 55.4377 48.9625V40.275V38.3375C55.4377 37.075 55.0627 36.15 54.3252 35.6ZM41.8002 52.5625C40.8127 52.5625 40.0127 51.7625 40.0127 50.775C40.0127 49.7875 40.8127 48.9875 41.8002 48.9875C42.7877 48.9875 43.5877 49.7875 43.5877 50.775C43.5877 51.7625 42.7877 52.5625 41.8002 52.5625ZM51.7752 50.75C50.7877 50.75 49.9877 49.95 49.9877 48.9625C49.9877 47.975 50.7877 47.175 51.7752 47.175C52.7627 47.175 53.5627 47.975 53.5627 48.9625C53.5627 49.95 52.7627 50.75 51.7752 50.75Z"
                                                                fill="url(#paint8_linear_66_3919)"
                                                                stroke="url(#paint9_linear_66_3919)" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_66_3919" x="0.0625" y="0.3125" width="83.875"
                                                                height="82.625" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_66_3919" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_66_3919"
                                                                    result="effect2_dropShadow_66_3919" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_66_3919" result="shape" />
                                                            </filter>
                                                            <linearGradient id="paint0_linear_66_3919" x1="19.3031" y1="29.8698"
                                                                x2="19.5027" y2="33.2967" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_66_3919" x1="20.8608" y1="29.5112"
                                                                x2="21.0026" y2="32.1602" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_66_3919" x1="24.0404" y1="37.3698"
                                                                x2="24.4449" y2="40.7601" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint3_linear_66_3919" x1="24.8012" y1="37.0112"
                                                                x2="25.0889" y2="39.6362" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint4_linear_66_3919" x1="25.3325" y1="44.8698"
                                                                x2="25.8912" y2="48.215" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint5_linear_66_3919" x1="25.8759" y1="44.5112"
                                                                x2="26.2741" y2="47.1067" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint6_linear_66_3919" x1="26.1938" y1="52.3698"
                                                                x2="26.9383" y2="55.6388" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint7_linear_66_3919" x1="26.5923" y1="52.0112"
                                                                x2="27.1248" y2="54.5564" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint8_linear_66_3919" x1="32.1772" y1="45.9913"
                                                                x2="49.8961" y2="64.9444" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint9_linear_66_3919" x1="33.1799" y1="42.2868"
                                                                x2="46.7431" y2="58.0795" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="icon-bar">
                                                <button>
                                                    <svg class="active" width="82" height="83" viewBox="0 0 82 83" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_54_29)">
                                                            <path
                                                                d="M48.5 33.5625H33.5C32.9875 33.5625 32.5625 33.1375 32.5625 32.625C32.5625 32.1125 32.9875 31.6875 33.5 31.6875H48.5C49.0125 31.6875 49.4375 32.1125 49.4375 32.625C49.4375 33.1375 49.0125 33.5625 48.5 33.5625Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M44.75 30.4375H37.25C36.7375 30.4375 36.3125 30.0125 36.3125 29.5C36.3125 28.9875 36.7375 28.5625 37.25 28.5625H44.75C45.2625 28.5625 45.6875 28.9875 45.6875 29.5C45.6875 30.0125 45.2625 30.4375 44.75 30.4375Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M43.3873 47.2625C42.9623 47.2625 42.6123 47.6125 42.6123 48.0375C42.6123 48.4625 42.9623 48.8125 43.3873 48.8125C43.8123 48.8125 44.1623 48.4625 44.1623 48.0375C44.1623 47.6125 43.8123 47.2625 43.3873 47.2625Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M37.8874 49.175C37.8874 48.75 37.5374 48.4125 37.1124 48.4125C36.6874 48.4125 36.3374 48.7625 36.3374 49.1875C36.3374 49.6125 36.6874 49.9625 37.1124 49.9625C37.5374 49.95 37.8874 49.6 37.8874 49.175Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M48.5 35.75H33.5C30.75 35.75 28.5 38 28.5 40.75V49.5C28.5 52.25 30.75 54.5 33.5 54.5H48.5C51.25 54.5 53.5 52.25 53.5 49.5V40.75C53.5 38 51.25 35.75 48.5 35.75ZM46.0375 42.575V48.0375C46.0375 48.0625 46.025 48.075 46.025 48.1C45.9875 49.525 44.825 50.6875 43.3875 50.6875C41.925 50.6875 40.7375 49.5 40.7375 48.0375C40.7375 46.575 41.925 45.3875 43.3875 45.3875V45.3875C43.7802 45.3875 44.1625 45.1173 44.1625 44.7246V44.645C44.1625 44.2194 43.7578 43.9104 43.3473 44.0223L41.3836 44.5579C40.4265 44.8189 39.7625 45.6883 39.7625 46.6804V49.1625V49.175C39.7625 50.6375 38.575 51.825 37.1125 51.825C35.65 51.825 34.4625 50.6375 34.4625 49.175C34.4625 47.7125 35.65 46.525 37.1125 46.525V46.525C37.5052 46.525 37.8875 46.2548 37.8875 45.8621V44.275V42.275C37.8875 41.1625 38.575 40.2625 39.6375 39.9875L43.05 39.05C44.15 38.7625 44.825 39.05 45.2125 39.35C45.5875 39.6375 46.0375 40.225 46.0375 41.3375V42.575Z"
                                                                fill="#5E6266" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_54_29" x="0.5" y="0.5625" width="81"
                                                                height="81.9375" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_54_29" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_54_29"
                                                                    result="effect2_dropShadow_54_29" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_54_29" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                    <svg class="inactive" width="82" height="83" viewBox="0 0 82 83" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g filter="url(#filter0_dd_69_19093)">
                                                            <path
                                                                d="M48.5 33.5625H33.5C32.9875 33.5625 32.5625 33.1375 32.5625 32.625C32.5625 32.1125 32.9875 31.6875 33.5 31.6875H48.5C49.0125 31.6875 49.4375 32.1125 49.4375 32.625C49.4375 33.1375 49.0125 33.5625 48.5 33.5625Z"
                                                                fill="url(#paint0_linear_69_19093)"
                                                                stroke="url(#paint1_linear_69_19093)" />
                                                            <path
                                                                d="M44.75 30.4375H37.25C36.7375 30.4375 36.3125 30.0125 36.3125 29.5C36.3125 28.9875 36.7375 28.5625 37.25 28.5625H44.75C45.2625 28.5625 45.6875 28.9875 45.6875 29.5C45.6875 30.0125 45.2625 30.4375 44.75 30.4375Z"
                                                                fill="url(#paint2_linear_69_19093)"
                                                                stroke="url(#paint3_linear_69_19093)" />
                                                            <path
                                                                d="M43.3873 47.2625C42.9623 47.2625 42.6123 47.6125 42.6123 48.0375C42.6123 48.4625 42.9623 48.8125 43.3873 48.8125C43.8123 48.8125 44.1623 48.4625 44.1623 48.0375C44.1623 47.6125 43.8123 47.2625 43.3873 47.2625Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M37.8874 49.175C37.8874 48.75 37.5374 48.4125 37.1124 48.4125C36.6874 48.4125 36.3374 48.7625 36.3374 49.1875C36.3374 49.6125 36.6874 49.9625 37.1124 49.9625C37.5374 49.95 37.8874 49.6 37.8874 49.175Z"
                                                                fill="#5E6266" />
                                                            <path
                                                                d="M48.5 35.75H33.5C30.75 35.75 28.5 38 28.5 40.75V49.5C28.5 52.25 30.75 54.5 33.5 54.5H48.5C51.25 54.5 53.5 52.25 53.5 49.5V40.75C53.5 38 51.25 35.75 48.5 35.75ZM46.0375 42.575V48.0375C46.0375 48.0625 46.025 48.075 46.025 48.1C45.9875 49.525 44.825 50.6875 43.3875 50.6875C41.925 50.6875 40.7375 49.5 40.7375 48.0375C40.7375 46.575 41.925 45.3875 43.3875 45.3875C43.7802 45.3875 44.1625 45.1173 44.1625 44.7246V44.645C44.1625 44.2194 43.7578 43.9104 43.3473 44.0223L41.3836 44.5579C40.4265 44.8189 39.7625 45.6883 39.7625 46.6804V49.1625V49.175C39.7625 50.6375 38.575 51.825 37.1125 51.825C35.65 51.825 34.4625 50.6375 34.4625 49.175C34.4625 47.7125 35.65 46.525 37.1125 46.525C37.5052 46.525 37.8875 46.2548 37.8875 45.8621V44.275V42.275C37.8875 41.1625 38.575 40.2625 39.6375 39.9875L43.05 39.05C44.15 38.7625 44.825 39.05 45.2125 39.35C45.5875 39.6375 46.0375 40.225 46.0375 41.3375V42.575Z"
                                                                fill="url(#paint4_linear_69_19093)"
                                                                stroke="url(#paint5_linear_69_19093)" />
                                                        </g>
                                                        <defs>
                                                            <filter id="filter0_dd_69_19093" x="0" y="0.0625" width="82"
                                                                height="82.9375" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="8" dy="8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.564931 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix"
                                                                    result="effect1_dropShadow_69_19093" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix"
                                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                    result="hardAlpha" />
                                                                <feOffset dx="-8" dy="-8" />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feColorMatrix type="matrix"
                                                                    values="0 0 0 0 0.478431 0 0 0 0 0.52549 0 0 0 0 0.592157 0 0 0 0.246749 0" />
                                                                <feBlend mode="normal" in2="effect1_dropShadow_69_19093"
                                                                    result="effect2_dropShadow_69_19093" />
                                                                <feBlend mode="normal" in="SourceGraphic"
                                                                    in2="effect2_dropShadow_69_19093" result="shape" />
                                                            </filter>
                                                            <linearGradient id="paint0_linear_69_19093" x1="26.7484" y1="32.7448"
                                                                x2="27.0648" y2="36.154" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_69_19093" x1="27.7265" y1="32.3862"
                                                                x2="27.9513" y2="35.0236" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_69_19093" x1="33.0825" y1="29.6198"
                                                                x2="33.6412" y2="32.965" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint3_linear_69_19093" x1="33.6259" y1="29.2612"
                                                                x2="34.0241" y2="31.8567" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                            <linearGradient id="paint4_linear_69_19093" x1="19.8866" y1="46.3233"
                                                                x2="35.3545" y2="71.0208" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint5_linear_69_19093" x1="21.3356" y1="42.737"
                                                                x2="32.8188" y2="62.6957" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </Fragment>
    );
   
}

export default Songplayer;