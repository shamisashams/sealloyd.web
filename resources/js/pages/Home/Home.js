import React from "react";
// import Beach from "../../assets/images/home/1.png";
// import Img2 from "../../assets/images/home/2.png";
// import map from "../../assets/images/home/map.png";
import "./Home.css";
// import port1 from "../../assets/images/ports/1.png";
// import port2 from "../../assets/images/ports/2.png";
// import port3 from "../../assets/images/ports/3.png";
// import Down from "../../assets/images/icons/other/down.png";
import Layout from "../../Layouts/Layout";
import { Form } from "../../components/Form/Form";
import { StatorBoxes } from "../../components/StatorBoxes/StatorBoxes";
// import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import PortsMap from "../../components/PortsMap/PortsMap";
const Home = ({ page, seo }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    const { images } = usePage().props;
    console.log(images[0], 'essaaa');
    return (
        <Layout seo={seo}>
            <div className="homePage">
                <div className="hero_section">
                    <img src='/assets/images/home/1.png' alt="" className="beach_bg" />
                    <div className="scroll_down">
                        <p>scroll down for more</p>
                        <img src='/assets/images/icons/other/down.png' alt="" />
                    </div>
                </div>
                <div className="wrapper">
                    <StatorBoxes />
                </div>
                <div className="port_section">
                    <PortsMap />
                    <div className="wrapper">
                        <div className="content">
                            {/* <div className="font45">აღიარებული ინსპექტორები</div> */}
                            <div className="font45">
                                {renderHTML(__('client.home_accepted_inspectors', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </div>
                            {/* <p>
                                ასევე მცირე ტექსტი კომპანიის საქმიანობაზე, კლიენტებზე, ნებისმიერ
                                სიახლესა და პირობაზე რომელიც საინტერესო შეიძლება იყოს
                                ვიზიტორისთვის. ტექსტის შეყვანა და დაედითება შესაძლებელია
                                ადმინპანელიდან.
                            </p> */}
                            <p>
                                {renderHTML(__('client.home_accepted_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </p>
                            <Link to="/" className="flex">
                                <span>დეტალურად</span>
                                <div className="flex centered">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17.164"
                                        height="16.729"
                                        viewBox="0 0 17.164 16.729"
                                    >
                                        <path
                                            id="Icon_awesome-arrow-left"
                                            data-name="Icon awesome-arrow-left"
                                            d="M7.294,18.256l.85.85a.916.916,0,0,0,1.3,0l7.447-7.443a.916.916,0,0,0,0-1.3L9.443,2.917a.916.916,0,0,0-1.3,0l-.85.85A.92.92,0,0,0,7.31,5.082l4.616,4.4H.916A.917.917,0,0,0,0,10.4v1.226a.917.917,0,0,0,.919.919h11.01l-4.616,4.4A.914.914,0,0,0,7.294,18.256Z"
                                            transform="translate(0.004 -2.647)"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="form_section ">

                    <div className="abs_img img">
                        <img src={images[1]} alt="error" />
                    </div>
                    {/* <img src={images[3]} alt='error'></img> */}
                    <div className="wrapper">
                        <Form />
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default Home;
