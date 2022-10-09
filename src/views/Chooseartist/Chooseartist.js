import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, ButtonGroup} from 'reactstrap';

import artarImg from '../../assets/images/artist-ar.png';
import artrajaImg from '../../assets/images/artist-raja.png';
import artyuvanImg from '../../assets/images/artist-yuvan.png';
import artdevaImg from '../../assets/images/artist-deva.png';
import artaniImg from '../../assets/images/artist-ani.png';
import arthjImg from '../../assets/images/artist-hj.png';
import artimmanImg from '../../assets/images/artist-imman.png';
import artgvImg from '../../assets/images/artist-gv.png';
import arthiphopImg from '../../assets/images/artist-hiphop.png';
import artmsvImg from '../../assets/images/artist-msv.png';
import artghipronImg from '../../assets/images/artist-gibran.png';
import artdhamanImg from '../../assets/images/artist-dhaman.png';
import artdspImg from '../../assets/images/artist-dsp.png';
import artsamImg from '../../assets/images/artist-sam.png';

const Chooseartist = (props) => {
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
                                <div className="full-new-mob fullscreen_mob">
                                    <div className="choose_artist page_main">
                                        <div className="music_head">
                                        <div className="music_subhead">
                                            <a href="">
                                                <div className="left_circle">
                                                    <svg width="10" height="10" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 1L1 9L9 17" stroke="#797C7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="" className="heade_next">
                                            Next
                                            </a>
                                        </div>
                                        </div>
                                        <div className="artist_cnt">
                                        <div className="">
                                            <h2 className="graywhite_txt">Choose <span>Artists</span> </h2>
                                        </div>
                                        <div className="artist_main">
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-ar" />
                                                    <label for="artist-ar">
                                                    <img src={artarImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-lraja" />
                                                    <label for="artist-lraja">
                                                    <img src={artrajaImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-yuvan" />
                                                    <label for="artist-yuvan">
                                                    <img src={artyuvanImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-deva" />
                                                    <label for="artist-deva">
                                                    <img src={artdevaImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-anirudh" />
                                                    <label for="artist-anirudh">
                                                    <img src={artaniImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-hj" />
                                                    <label for="artist-hj">
                                                    <img src={arthjImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-imman" />
                                                    <label for="artist-imman">
                                                    <img src={artimmanImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-gv" />
                                                    <label for="artist-gv">
                                                    <img src={artgvImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-hiphop" />
                                                    <label for="artist-hiphop">
                                                    <img src={arthiphopImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-msv" />
                                                    <label for="artist-msv">
                                                    <img src={artmsvImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-dhaman" />
                                                    <label for="artist-dhaman">
                                                    <img src={artdhamanImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-gibran" />
                                                    <label for="artist-gibran">
                                                    <img src={artghipronImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-dsp" />
                                                    <label for="artist-dsp">
                                                    <img src={artdspImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="artist_sub">
                                                <div className="form-group">
                                                    <input type="checkbox" name="" id="artist-sam" />
                                                    <label for="artist-sam">
                                                    <img src={artsamImg} alt="" className="img-fluid" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="music-layer">
                                        <img src="./assets/images/bg-layer.png" alt="" className="img-fluid" />
                                        </div>
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

export default Chooseartist;