import React from "react";
// import { Link } from "react-router-dom";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import "./StatorBoxes.css";
// import Bg from "../../assets/images/stators/bg.png";

export const StatorBoxes = () => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;

    let baseUrl = window.location.origin;
    let link = window.location.pathname;
    let a = link.split('/');
    const stators = [
        __('client.statorbox_solas', sharedData),
        __('client.statorbox_marpol', sharedData),
        __('client.statorbox_ismcode', sharedData),
        __('client.statorbox_Ballastwater', sharedData),
        __('client.statorbox_ispscode', sharedData),
        __('client.statorbox_ilomlc', sharedData),
        __('client.statorbox_energyefficiency', sharedData),
        __('client.statorbox_hazmat', sharedData),
    ];
    return (
        <div className="stator_grid">
            <div className="first_box" data-aos="zoom-in">
                <h6> {__('client.statorbox_stator', sharedData)}</h6>
                {/* <p>
                    Founded in Norway in 1861, Wilhelmsen is now a comprehensive global
                    maritime group providing essential products and services to
                </p> */}
                <p>
                    {renderHTML(__('client.staturboxes_main_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                </p>
            </div>
            {stators.map((stator, index) => {
                return (
                    <Link href={`${baseUrl}/${a[1]}/stators/${++index}`} key={index} >
                        <div className="stator_box" data-aos="flip-right">
                            <div className="bg img">
                                <img src='/assets/images/stators/bg.png' alt="" />
                            </div>
                            <div className="stator_name">{stator}</div>
                            <div className="more">click for more</div>
                        </div>
                    </Link>
                );
            })}
        </div >
    );
};
