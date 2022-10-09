import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import Icon from '../../../../../../assets/images/samp.png'
import { useCustomizeContext } from "../../../../../../contexts/CustomizeContext";
import { AppInfo } from "../../../../../../redux/features/createapp";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import '../../App.css'

const About = (props) => {

    const { appid } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let hasToken = localStorage.getItem("demoPreviewToken");
        if (hasToken)
            navigate('/home')
        // else
        //     navigate('/')
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
            navigate('/login')
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
            <div class="new-mob">
                <div id="note8" class="silver main-body">
                    <div class="marvel-device note8">
                        <div class="inner"></div>
                        <div class="overflow">
                            <div class="shadow"></div>
                        </div>
                        <div class="speaker"></div>
                        <div class="sensors"></div>
                        <div class="more-sensors"></div>
                        <div class="sleep"></div>
                        <div class="volume"></div>
                        <div class="camera"></div>
                        <div class="screen">
                            <div class="full-new-mob fullscreen_mob">
                                <div class="orderhistroy-pagemain">
                                    <div class="header-main">
                                        <div class="header">
                                            <div class="headerleft-cnt">
                                                <a href="">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path opacity="0.4" d="M20.4999 12H3.66992" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="headtxt">
                                                <h5>Order navigate</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="page_main">
                                        <div class="orderhistroy-main">
                                            <div class="orderhistroy-tabul">
                                                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link active" id="pills-home-tab" data-toggle="pill" data-target="#food-order" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Food Order</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#booking-order" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Booking Order</button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="orderhistroy-tabcnt oh-scroll">
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane fade show active" id="food-order" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        <div class="foodorder-tabcnt">
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/chees-pizza.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button class="btn" data-toggle="modal" data-target="#partytable">Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/veg.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/snacks.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/chees-pizza.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/chees-pizza.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button class="btn" data-toggle="modal" data-target="#partytable">Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/veg.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/snacks.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/chees-pizza.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/chees-pizza.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button class="btn" data-toggle="modal" data-target="#partytable">Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/veg.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/snacks.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/chees-pizza.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/chees-pizza.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button class="btn" data-toggle="modal" data-target="#partytable">Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/veg.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/snacks.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                            <div class="foodorder-maincnt">
                                                                <div class="foodorder-left">
                                                                    <div>
                                                                        <img src="./assets/images/chees-pizza.png" alt="" class="img-fluid" />
                                                                    </div>
                                                                    <div class="flcnt">
                                                                        <h3>Cheese Piza Coak</h3>
                                                                        <p>Jul 20, 2022</p>
                                                                        <button>Reorder</button>
                                                                    </div>
                                                                </div>
                                                                <div class="foodorder-right">
                                                                    <h5>$20.00</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="booking-order" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                        <div class="bookingorder-tabcnt">
                                                            <div class="bookingtbl cmn-tblbnr">
                                                                <img src="./assets/images/family-tbl.svg" alt="" class="img-fluid" />
                                                                <div class="tblcnt">
                                                                    <h5>Family Table</h5>
                                                                    <p>Jul 28, 2022</p>
                                                                </div>
                                                            </div>
                                                            <div class="bookingtbl cmn-tblbnr">
                                                                <img src="./assets/images/party-tbl.svg" alt="" class="img-fluid" />
                                                                <div class="tblcnt">
                                                                    <h5>Friends Table</h5>
                                                                    <p>Jul 28, 2022</p>
                                                                </div>
                                                            </div>
                                                            <div class="bookingtbl cmn-tblbnr">
                                                                <img src="./assets/images/friends-tbl.svg" alt="" class="img-fluid" />
                                                                <div class="tblcnt">
                                                                    <h5>Party Table</h5>
                                                                    <p>Jul 28, 2022</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade party-modal cmn-modal" id="partytable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                            <div class="cus-modalcenter">
                                <div class="modal-dialog">
                                    <div class="modal-content cmn-modalcnt">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Party Table</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 1L1 13" stroke="#B8B8B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M1 1L13 13" stroke="#B8B8B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="partymodal-body">
                                                <div class="partymodal-cnt">
                                                    <div>Reference ID</div>
                                                    <div>#32165</div>
                                                </div>
                                                <div class="partymodal-cnt">
                                                    <div>Booking Date</div>
                                                    <div>Jul 28, 2022</div>
                                                </div>
                                                <div class="partymodal-cnt">
                                                    <div>Non-Veg</div>
                                                    <div>4</div>
                                                </div>
                                                <div class="partymodal-cnt">
                                                    <div>Veg</div>
                                                    <div>2</div>
                                                </div>
                                                <div class="partymodal-cnt">
                                                    <div>Infant</div>
                                                    <div>0</div>
                                                </div>
                                                <div class="partymodal-cnt">
                                                    <div>Type</div>
                                                    <div>AC</div>
                                                </div>
                                            </div>
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

export default About;