import React from "react";
// import { Link } from "react-router-dom";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import "./StatorBoxes.css";
// import Bg from "../../assets/images/stators/bg.png";

export const StatorBoxes = () => {
    const stators = [
        "Solas",
        "Marpol",
        "ISM code",
        "Ballast Water management",
        "ISPS Code",
        "ILO MLC, 2006",
        "Energy efficiency",
        "HazMat",
    ];
    return (
        <div className="stator_grid">
            <div className="first_box" data-aos="zoom-in">
                <h6>სტატუტორი</h6>
                <p>
                    Founded in Norway in 1861, Wilhelmsen is now a comprehensive global
                    maritime group providing essential products and services to
                </p>
            </div>
            {stators.map((stator, index) => {
                return (
                    <Link href={`/stators/${index + 1}`} key={index}>
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
        </div>
    );
};
