import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import Icon from '../../../../../../assets/images/samp.png'
import { useCustomizeContext } from "../../../../../../contexts/CustomizeContext";
import { AppInfo } from "../../../../../../redux/features/createapp";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';

const About = (props) => {

    const { appid } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const path = window.location.pathname.split("/");


    useEffect(() => {
        let hasToken = localStorage.getItem("demoPreviewToken");

        if (path[3] === "preview") {
            if (hasToken) {
                navigate('/home')
            } else {
                navigate('/')
            }
        }
    }, [])

    const { appDetail } = useCustomizeContext()

    const [show, setShow] = useState(false);

    const { appinfo } = useSelector(state => state.createapp)
    const app = { app_id: appid };

    useEffect(() => {
        const path = window.location.pathname.split("/")
        console.log(path[3], "path1")
        if (path[3] === "preview") {
            const app = { app_id: path[1] }
            dispatch(AppInfo(app))
        }
        // dispatch(AppInfo(app))
    }, [dispatch])

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




    console.log(appDetail.splashScreen, "appDetail12")

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
                                    {show === true ? (
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
                                    )}
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