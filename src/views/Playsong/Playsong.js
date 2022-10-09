import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, ButtonGroup} from 'reactstrap';

import sing4Img from '../../assets/images/sing4.png';
import sing5Img from '../../assets/images/sing5.png';
import sing6Img from '../../assets/images/sing6.png';
import sing7Img from '../../assets/images/sing7.png';
import sing8Img from '../../assets/images/sing8.png';
import bannerImg from '../../assets/images/banner.png';
import profileImg from '../../assets/images/profile.jpg';

const Playsong = (props) => {
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
                                                    <h1>Playlist</h1>
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
                                    <main class="pad-top pad-btm">
                                        <div class="music-banner">
                                            <div class="cover-thumb">
                                                <img src={bannerImg} alt="" />
                                            </div>
                                        </div>
                                        <div class="play-details">
                                            <div class="play-heading">
                                                <h4>My Playlist 1</h4>
                                                <div>
                                                    <button>
                                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M17.9499 1.33333C8.74987 1.33333 1.2832 8.8 1.2832 18C1.2832 27.2 8.74987 34.6667 17.9499 34.6667C27.1499 34.6667 34.6165 27.2 34.6165 18C34.6165 8.8 27.1665 1.33333 17.9499 1.33333ZM22.9499 21.7167L18.1165 24.5C17.5165 24.85 16.8499 25.0167 16.1999 25.0167C15.5332 25.0167 14.8832 24.85 14.2832 24.5C13.0832 23.8 12.3665 22.5667 12.3665 21.1667V15.5833C12.3665 14.2 13.0832 12.95 14.2832 12.25C15.4832 11.55 16.9165 11.55 18.1332 12.25L22.9665 15.0333C24.1665 15.7333 24.8832 16.9667 24.8832 18.3667C24.8832 19.7667 24.1665 21.0167 22.9499 21.7167Z"
                                                                fill="url(#paint0_linear_80_22842)"
                                                                stroke="url(#paint1_linear_80_22842)" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_80_22842" x1="-10.2014"
                                                                    y1="20.1303" x2="19.8731" y2="56.1451"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#48EC0E" />
                                                                    <stop offset="1" stop-color="#0F4206" />
                                                                </linearGradient>
                                                                <linearGradient id="paint1_linear_80_22842" x1="-8.26932"
                                                                    y1="13.7547" x2="14.5384" y2="43.4859"
                                                                    gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#84DF59" />
                                                                    <stop offset="1" stop-color="#1E701C" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                    <button>
                                                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle r="2" transform="matrix(1 0 0 -1 2 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 9 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 16 2)" fill="#797C7F" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <p>Sed ut perspiciatis unde omnis iste natus
                                                error sit voluptatem accusantium dolorem.</p>
                                        </div>
                                        <div class="playlist-wrapper">
                                            <div class="profile">
                                                <div class="thumb">
                                                    <img src={profileImg} alt="" />
                                                </div>
                                                <div class="details">
                                                    <h6>John Deo</h6>
                                                    <p> 3 min 48 sec | 10 songs</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.19 1H6.81C3.17 1 1 3.17 1 6.81V15.18C1 18.83 3.17 21 6.81 21H15.18C18.82 21 20.99 18.83 20.99 15.19V6.81C21 3.17 18.83 1 15.19 1ZM15 11.75V11.75C13.2051 11.75 11.75 13.2051 11.75 15V15C11.75 15.41 11.41 15.75 11 15.75C10.59 15.75 10.25 15.41 10.25 15V15C10.25 13.2051 8.79493 11.75 7 11.75V11.75C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25V10.25C8.79493 10.25 10.25 8.79493 10.25 7V7C10.25 6.59 10.59 6.25 11 6.25C11.41 6.25 11.75 6.59 11.75 7V7C11.75 8.79493 13.2051 10.25 15 10.25V10.25C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z"
                                                            fill="url(#paint0_linear_3353_110)"
                                                            stroke="url(#paint1_linear_3353_110)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_3353_110" x1="-5.88731" y1="12.2782"
                                                                x2="12.159" y2="33.8782" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#48EC0E" />
                                                                <stop offset="1" stop-color="#0F4206" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_3353_110" x1="-4.72866" y1="8.45279"
                                                                x2="8.95775" y2="26.2849" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#84DF59" />
                                                                <stop offset="1" stop-color="#1E701C" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="music-box-wrapper ">
                                                <div class="w-100">
                                                    <div class="music-play">
                                                        <div class="music-b">
                                                            <div class="thumb">
                                                                <img src={sing4Img} alt="" />
                                                            </div>
                                                            <div class="details">
                                                                <h5>Naanga Vera Maari...</h5>
                                                                <p>Yuvan Shankar Raja | Anurag...</p>
                                                            </div>
                                                        </div>
                                                        <div class="play-btn">
                                                            <button>
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.99886 0.416702C4.70886 0.416702 0.415527 4.71003 0.415527 10C0.415527 15.29 4.70886 19.5834 9.99886 19.5834C15.2889 19.5834 19.5822 15.29 19.5822 10C19.5822 4.71003 15.2889 0.416702 9.99886 0.416702ZM4.96761 12.0509C4.96761 12.4438 4.64178 12.7696 4.24886 12.7696C3.85594 12.7696 3.53011 12.4438 3.53011 12.0509V7.9492C3.53011 7.55628 3.85594 7.23045 4.24886 7.23045C4.64178 7.23045 4.96761 7.55628 4.96761 7.9492V12.0509ZM7.84261 13.4213C7.84261 13.8142 7.51678 14.14 7.12386 14.14C6.73094 14.14 6.40511 13.8142 6.40511 13.4213V6.57878C6.40511 6.18587 6.73094 5.86003 7.12386 5.86003C7.51678 5.86003 7.84261 6.18587 7.84261 6.57878V13.4213ZM10.7176 14.7917C10.7176 15.1846 10.3918 15.5104 9.99886 15.5104C9.60594 15.5104 9.28011 15.1846 9.28011 14.7917V5.20837C9.28011 4.81545 9.60594 4.48962 9.99886 4.48962C10.3918 4.48962 10.7176 4.81545 10.7176 5.20837V14.7917ZM13.5926 13.4213C13.5926 13.8142 13.2668 14.14 12.8739 14.14C12.4809 14.14 12.1551 13.8142 12.1551 13.4213V6.57878C12.1551 6.18587 12.4809 5.86003 12.8739 5.86003C13.2668 5.86003 13.5926 6.18587 13.5926 6.57878V13.4213ZM16.4676 12.0509C16.4676 12.4438 16.1418 12.7696 15.7489 12.7696C15.3559 12.7696 15.0301 12.4438 15.0301 12.0509V7.9492C15.0301 7.55628 15.3559 7.23045 15.7489 7.23045C16.1418 7.23045 16.4676 7.55628 16.4676 7.9492V12.0509Z"
                                                                        fill="url(#paint0_linear_93_11711)" />
                                                                    <defs>
                                                                        <linearGradient id="paint0_linear_93_11711" x1="-6.1881"
                                                                            y1="11.2249" x2="11.1047" y2="31.9334"
                                                                            gradientUnits="userSpaceOnUse">
                                                                            <stop stop-color="#48EC0E" />
                                                                            <stop offset="1" stop-color="#0F4206" />
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>
                                                            </button>
                                                            <button>
                                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M10.4816 1.3373C5.41893 1.3373 1.31006 5.44617 1.31006 10.5089C1.31006 15.5716 5.41893 19.6805 10.4816 19.6805C15.5444 19.6805 19.6532 15.5716 19.6532 10.5089C19.6532 5.44617 15.5535 1.3373 10.4816 1.3373ZM9.33061 13.2879C9.33314 13.2879 9.3352 13.29 9.33519 13.2925C9.33389 13.7293 9.15011 13.9024 8.68401 13.9024H7.49171C7.02396 13.9024 6.84052 13.7281 6.84052 13.2879V7.72989C6.84052 7.28965 7.02396 7.11539 7.49171 7.11539H8.67484C9.14259 7.11539 9.32602 7.28965 9.32602 7.72989V13.2833C9.32602 13.2858 9.32808 13.2879 9.33061 13.2879V13.2879ZM14.1778 13.2879C14.1778 13.7281 13.9944 13.9024 13.5266 13.9024H12.3435C11.8757 13.9024 11.6923 13.7281 11.6923 13.2879V7.72989C11.6923 7.28965 11.8757 7.11539 12.3435 7.11539H13.5266C13.9944 7.11539 14.1778 7.28965 14.1778 7.72989V13.2879Z"
                                                                        fill="url(#paint0_linear_91_11697)"
                                                                        stroke="url(#paint1_linear_91_11697)" />
                                                                    <defs>
                                                                        <linearGradient id="paint0_linear_91_11697" x1="-5.00985"
                                                                            y1="11.6812" x2="11.54" y2="31.4999"
                                                                            gradientUnits="userSpaceOnUse">
                                                                            <stop stop-color="#48EC0E" />
                                                                            <stop offset="1" stop-color="#0F4206" />
                                                                        </linearGradient>
                                                                        <linearGradient id="paint1_linear_91_11697" x1="-3.94665"
                                                                            y1="8.17269" x2="8.60434" y2="24.5336"
                                                                            gradientUnits="userSpaceOnUse">
                                                                            <stop stop-color="#84DF59" />
                                                                            <stop offset="1" stop-color="#1E701C" />
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="progress-g">
                                                        <h5>00:48</h5>
                                                        <div class="progress-details">
                                                            <div class="progress">
                                                                <div class="progress-bar" role="progressbar" aria-valuenow="60"
                                                                    aria-valuemin="0" aria-valuemax="100" style={{width:"68%"}}>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h5>03:54</h5>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            </div>
                                        <div>
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
                                                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle r="2" transform="matrix(1 0 0 -1 2 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 9 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 16 2)" fill="#797C7F" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
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
                                                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle r="2" transform="matrix(1 0 0 -1 2 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 9 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 16 2)" fill="#797C7F" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
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
                                                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle r="2" transform="matrix(1 0 0 -1 2 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 9 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 16 2)" fill="#797C7F" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="music-box-wrapper">
                                                <div class="music-b">
                                                    <div class="thumb">
                                                        <img src={sing8Img} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <h5>Naanga Vera Maari...</h5>
                                                        <p>Yuvan Shankar Raja | Anurag...</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle r="2" transform="matrix(1 0 0 -1 2 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 9 2)" fill="#797C7F" />
                                                            <circle r="2" transform="matrix(1 0 0 -1 16 2)" fill="#797C7F" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
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

export default Playsong;