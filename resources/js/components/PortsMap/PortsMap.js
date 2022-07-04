import React from "react";
// import circle from "../../assets/images/icons/other/circle.png";
// import map from "../../assets/images/bgs/map.png";
import "./PortsMap.css";
// import Flag1 from "../../assets/images/icons/flags/6.png";
// import Flag2 from "../../assets/images/icons/flags/7.png";
// import Flag3 from "../../assets/images/icons/flags/7.png";
// import Flag4 from "../../assets/images/icons/flags/9.png";
// import Flag5 from "../../assets/images/icons/flags/10.png";
// import Flag6 from "../../assets/images/icons/flags/11.png";

const PortsMap = ({ img }) => {
    const ports = [
        {
            flag: '/assets/images/icons/flags/6.png',
            name: "Ukraine",
        },
        {
            flag: '/assets/images/icons/flags/7.png',
            name: "Romania",
        },
        {
            flag: '/assets/images/icons/flags/8.png',
            name: "Georgia",
        },
        {
            flag: '/assets/images/icons/flags/9.png',
            name: "Turkey",
        },
        {
            flag: '/assets/images/icons/flags/10.png',
            name: "Egypt",
        },
        {
            flag: '/assets/images/icons/flags/11.png',
            name: "UAE",
        },
    ];
    return (
        <div className="ports_map">


            {img ? <img src={img[1]} alt="error" className="the_map" alt="" /> : <img src='/assets/images/bgs/map.png' className="the_map" alt="" />}

            <div className="ports">
                {ports.map((port, index) => {
                    return (
                        <div className="port_box " key={index} data-aos="zoom-in">
                            <div className="flex centered circle">
                                <img src='/assets/images/icons/other/circle.png' alt="" />
                            </div>
                            <img src={ports[index].flag} alt="" />
                            <div className="det">
                                <h5>{port.name}</h5>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PortsMap;
