import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import Icon from '../../../../../../assets/images/samp.png'
import { useCustomizeContext } from "../../../../../../contexts/CustomizeContext";
import { AppInfo } from "../../../../../../redux/features/createapp";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import styled from "styled-components";

const About = (props) => {

    const { appid } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        appIcon: {
            appIconBackgroundColor,
            appIconColor,
            appIconText,
            appIconFontFamily,
            appIconFontSize,
            appbackgroundImage,
            fileList,
            App_Logo_toggle

        },
    } = useCustomizeContext();

    const AppIconText = styled.p`
    color: ${appIconColor};
    font-family: ${appIconFontFamily};
    font-size: ${appIconFontSize}px;
    margin-top: 11px;
    font-weight: bold;
  `;

    const [show, setShow] = useState(false);

    const { appinfo } = useSelector(state => state.createapp)
    console.log(appinfo, "createapp")

    const splash = () => {
        console.log(show, "show")
        setTimeout(() => {
            setShow(false);
            // navigate('/login')
            // navigate('/home')
        }, 1000);
        setShow(true);
    };
    console.log(show, "show")

    const openApp = () => {
        console.log("object123")
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
                            <div className="screen1 innerpages profile-pg">
                                <div className="app-click">
                                    {/* {show === true ? (
                                        <img
                                            src={appDetail.splashScreen ? appDetail.splashScreen : Icon}
                                            className="img-fluid"
                                            alt="nothing"
                                            style={{ height: "100%" }}
                                        />
                                    ) : (
                                        <>
                                            <div className="image-back-size">
                                                <img src={appDetail.appicon ? appDetail.appicon : appinfo?.app_details?.App_Icon} onClick={appDetail.splashScreen === "" ? null : splash} />
                                            </div>
                                            <p>{appDetail.appName ? appDetail.appName : appinfo?.app_details?.App_Name}</p>
                                        </>
                                    )} */}

                                    {
                                        App_Logo_toggle ?

                                            <div className="image-back-size">
                                                <img src={fileList.appicon ? fileList[0].appicon : fileList} />
                                            </div>

                                            :
                                            appIconBackgroundColor ?
                                                // <AppIconText>{appIconText}</AppIconText>
                                                <div className="image-back-size" style={{ backgroundColor: appIconBackgroundColor }}>
                                                    <div style={{ color: appIconColor, fontSize: `${appIconFontSize}px`, fontFamily: appIconFontFamily, padding: "12px" }}>{appIconText}</div>
                                                </div>
                                                :
                                                <div className="image-back-size" style={{ backgroundColor: "white" }}>
                                                    {/* <img src={fileList.appicon ? fileList[0].appicon : fileList} /> */}
                                                </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default About;