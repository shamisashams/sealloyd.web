import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
// import Logo from "../../assets/images/logo/1.png";
// import Ge from "../../assets/images/icons/langs/ge.png";
// import En from "../../assets/images/icons/langs/en.png";
// import { navList } from "./NavList";
import "./Header.css";
import { Languages } from "../Languages/Languages";

const Header = () => {
    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    const sharedData = usePage().props.localizations;
    let navList = [
        {
            // name: 'მთავარი',
            name: __("client.nav_home", sharedData),
            link: route("client.home.index"),
        },
        {
            name: __("client.nav_aboutus", sharedData),
            link: "",
            dropdown: [
                {
                    name: __("client.nav_purpose", sharedData),
                    link: route("client.aboutus.purpose"),
                },
                {
                    name: __("client.nav_ethics", sharedData),
                    link: route("client.aboutus.ethics"),
                },
                {
                    name: __("client.nav_politics", sharedData),
                    link: route("client.aboutus.politics"),
                },
                {
                    name: __("client.nav_managment", sharedData),
                    link: route("client.aboutus.management"),
                },
                {
                    name: __("client.nav_recognition", sharedData),
                    link: route("client.aboutus.recognition"),
                },
            ],
        },
        {
            name: __("client.nav_services", sharedData),
            link: "",
            dropdown: [
                {
                    name: __("client.nav_clasification", sharedData),
                    link: route("client.services.index"),
                },
                {
                    name: __("client.nav_stators", sharedData),
                    link: route("client.services.stators"),
                },
                {
                    name: __("client.nav_certifications", sharedData),
                    link: route("client.services.certifications"),
                },
                {
                    name: __("client.nav_comprecognition", sharedData),
                    link: route("client.services.comprecognition"),
                },
            ],
        },
        {
            name: __("client.nav_documentation", sharedData),
            link: "",
            dropdown: [
                {
                    name: __("client.nav_ownerapplication", sharedData),
                    link: route("client.services.ownerapplication"),
                },
                {
                    name: __("client.nav_evaluation", sharedData),
                    link: route("client.services.evaluation"),
                },
                {
                    name: __("client.nav_circulars", sharedData),
                    link: route("client.services.circulars"),
                },
            ],
        },
        {
            name: __("client.nav_ourteam", sharedData),
            link: "",
            dropdown: [
                {
                    name: __("client.nav_office", sharedData),
                    link: route("client.services.office"),
                },
                {
                    name: __("client.nav_inspectors", sharedData),
                    link: route("client.services.inspectors"),
                },
                {
                    name: __("client.nav_career", sharedData),
                    link: route("client.services.career"),
                },
            ],
        },
        {
            name: __("client.nav_contact", sharedData),
            link: route("client.contact.index"),
        },
    ];

    const testFunction = () => {
        alert("asd");
    };
    const { url, component } = usePage();

    const { pathname, currentLocale, user } = usePage().props;
    let url_ = new URL(pathname);
    let pathname_ = url_.pathname;
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    // const { pathname } = useLocation();
    let solid = false;
    let base_url = window.location.origin;
    if (
        pathname == `${base_url}/${currentLocale}` ||
        pathname == `${base_url}/${currentLocale}/login` ||
        pathname == `${base_url}/${currentLocale}/inspectors`
    ) {
        solid = true;
    }
    return (
        <div
            className={solid ? "header solid" : "header"}
            style={{ "zIndex": "999999999999999999999999" }}
        >
            <div className="wrapper flex">
                <Link href={route("client.home.index")}>
                    <img src="/assets/images/logo/1.png" alt="" />
                </Link>
                <div className="flex right">
                    <div className={menu ? "navbar open" : "navbar"}>
                        {navList.map((nav, i) => {
                            let drop = nav.dropdown;
                            return (
                                <div
                                    className={
                                        pathname === nav.link
                                            ? "nav_link active"
                                            : "nav_link"
                                    }
                                    key={i}
                                >
                                    <Link
                                        className={drop ? "" : "link"}
                                        href={nav.link}
                                        onClick={
                                            drop
                                                ? (e) => {
                                                    e.preventDefault();
                                                }
                                                : (e) => {
                                                    return "";
                                                }
                                        }
                                    >
                                        <span>{nav.name}</span>
                                    </Link>
                                    {drop ? (
                                        <div className="dropdown">
                                            {drop.map((drop, i) => {
                                                if (drop) {
                                                    return (
                                                        <div
                                                            key={i}
                                                            className="link"
                                                        >
                                                            <Link
                                                                className=" nux"
                                                                href={drop.link}
                                                            >
                                                                {drop.name}
                                                            </Link>
                                                        </div>
                                                    );
                                                }
                                            })}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {user === null ? (
                        <Link
                            className={
                                pathname === route("client.login")
                                    ? "nav_link active"
                                    : "nav_link"
                            }
                            href={route("client.login")}
                        >
                            <span>{__("client.nav_cabinet", sharedData)}</span>
                        </Link>
                    ) : (
                        <Link
                            className={
                                pathname === route("client.cabinet")
                                    ? "nav_link active"
                                    : "nav_link"
                            }
                            href={route("client.cabinet")}
                        >
                            <span>{__("client.nav_cabinet", sharedData)}</span>
                        </Link>
                    )}

                    {/* <div className="languages">
                        <div className="on">
                            <img src='/assets/images/icons/langs/ge.png' alt="" />
                        </div>
                        <div className="drop">
                            <Link to="/">
                                <img src='/assets/images/icons/langs/ge.png' alt="" />
                            </Link>
                        </div>
                    </div>
                   */}

                    {/* language dropdown buttons */}
                    <Languages></Languages>
                    <button
                        onClick={() => toggleMenu()}
                        className={menu ? "menu_btn clicked" : "menu_btn"}
                    >
                        <div className="span"></div>
                        <div className="span"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
