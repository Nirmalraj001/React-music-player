import React, { Component, Fragment, useState, useRef, useEffect, createRef  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Input, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledCollapse, TabContent, TabPane, Nav, NavItem, NavLink, ButtonGroup} from 'reactstrap';

import bylayerImg from '../../assets/images/bg-layer.png';
import tamilImg from '../../assets/images/tamil.png';
import englishimg from '../../assets/images/english.png';
import malayalamImg from '../../assets/images/malayalam.png';
import teluguImg from '../../assets/images/telugu.png';
import kannadaImg from '../../assets/images/kannada.png';
import hindhiimg from '../../assets/images/hindi.png';
import punjabiImg from '../../assets/images/punjabi.png';
import marathiImg from '../../assets/images/marathi.png';

const Chooselanguage = (props) => {
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
                                <div className="choose_lang page_main">
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
                                    <div className="lang_cnt">
                                    <div className="">
                                        <h2 className="graywhite_txt">Choose <span>Language</span> </h2>
                                    </div>
                                    <div className="lang_main">
                                        <div className="lang_sub">
                                            <div className="form-group">
                                                <input type="checkbox" className="form-control" id="hindi-lang" />
                                                <label for="hindi-lang">
                                                <img src={hindhiimg} alt="" className="img-fluid" />
                                                <span></span>
                                                <h5>Hindi</h5>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="lang_sub">
                                            <div className="form-group">
                                                <input type="checkbox" className="form-control" id="tamil-lang" />
                                                <label for="tamil-lang">
                                                <img src={tamilImg} alt="" className="img-fluid" />
                                                <span></span>
                                                <h5>Tamil</h5>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="lang_sub">
                                            <div className="form-group">
                                                <input type="checkbox" className="form-control" id="telugu-lang" />
                                                <label for="telugu-lang">
                                                <img src={teluguImg} alt="" className="img-fluid" />
                                                <span></span>
                                                <h5>Telugu</h5>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="lang_sub">
                                            <div className="form-group">
                                                <input type="checkbox" className="form-control" id="malayalam-lang" />
                                                <label for="malayalam-lang">
                                                <img src={malayalamImg} alt="" className="img-fluid" />
                                                <span></span>
                                                <h5>Malayalam</h5>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="lang_sub">
                                            <div className="form-group">
                                                <input type="checkbox" className="form-control" id="kannada-lang" />
                                                <label for="kannada-lang">
                                                <img src={kannadaImg} alt="" className="img-fluid" />
                                                <span></span>
                                                <h5>Kannada</h5>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="lang_sub">
                                            <div className="form-group">
                                                <input type="checkbox" className="form-control" id="marathi-lang" />
                                                <label for="marathi-lang">
                                                <img src={marathiImg} alt="" className="img-fluid" />
                                                <span></span>
                                                <h5>Marathi</h5>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="lang_sub">
                                            <div className="form-group">
                                                <input type="checkbox" className="form-control" id="punjab-lang" />
                                                <label for="punjab-lang">
                                                <img src={punjabiImg} alt="" className="img-fluid" />
                                                <span></span>
                                                <h5>Punjabi</h5>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="lang_sub">
                                            <div className="form-group">
                                                <input type="checkbox" className="form-control" id="english-lang" />
                                                <label for="english-lang">
                                                <img src={englishimg} alt="" className="img-fluid" />
                                                <span></span>
                                                <h5>English</h5>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="music-layer">
                                            <img src={bylayerImg} alt="" className="img-fluid" />
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

export default Chooselanguage;