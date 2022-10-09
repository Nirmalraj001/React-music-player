import React, { Component, Fragment, useState, useRef, useEffect, createRef } from "react";
import { useNavigate } from 'react-router';

const Language = (props) => {
    const navigate = useNavigate();

    const [checked, setChecked] = useState([]);

    // Add/Remove checked item from list
    console.log(checked === '' ? "data" : "empty", "checked")
    const handleCheck = (event, data) => {

        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, data._id];
            // updatedList = [...checked, {
            //     language_userid: data._id,
            //     language_name: data.language_name
            // }];

        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
            // setChecked(
            //     updatedList.filter((people) => people.id !== data.id),
            //   );
        }
        setChecked(updatedList);


    };
    console.log(checked, "checked")

    const submitLanguage = async () => {
        const Value = {
            checklang: checked
        }

        console.log(checked ? "data" : "not", "checklang")

        // const getResp = await dispatch(updateLanguage(Value));

        // console.log(getResp, "languagelist123")
        // if (getResp.status === true) {
        //     console.log(getResp.status, "object")
        //     navigate('/home')
        // } else {
        //     navigate.goBack()
        // }
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
                                <div className="full-new-mob home-screen pos-unset p-0">
                                    <div className="artist-main p-3">
                                        <div>
                                            <div>
                                                <div className="skip-btn">
                                                    <button onClick={submitLanguage}>
                                                        Next
                                                    </button>
                                                </div>
                                                <div className="heading text-center pt-4">
                                                    <h3>Select Language</h3>
                                                    <h5>Select your favourite languges</h5>
                                                </div>
                                            </div>
                                            {/* {alllanguageList.map((data, index) => (
                                                <div className="select-lang" onChange={(e) => handleCheck(e, data)}>
                                                    <input type="checkbox" class="checkbox" id={data.language_name} required />
                                                    <h6>{data.language_name}</h6>
                                                </div>

                                            ))} */}
                                            {/* <div className="select-lang">
                                                <div>
                                                    <h6>Albanian</h6>
                                                </div>
                                                <div>
                                                    <h6>Azerbaijani</h6>
                                                </div>
                                                <div>
                                                    <h6>Bengali</h6>
                                                </div>
                                                <div>
                                                    <h6>Croatian </h6>
                                                </div>
                                                <div>
                                                    <h6>German</h6>
                                                </div>
                                                <div className="active">
                                                    <h6>Tamil</h6>
                                                </div>
                                                <div>
                                                    <h6>Telugu</h6>
                                                </div>
                                                <div>
                                                    <h6> Marathi</h6>
                                                </div>
                                                <div>
                                                    <h6>Bengali</h6>
                                                </div>
                                            </div> */}
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

export default Language;