import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import { usePage, Head } from "@inertiajs/inertia-react";
import { navList } from "../Header/NavList";
import "../Header/Header.css";
import "./Footer.css";

const Footer = () => {
    const { url, component } = usePage();
    const { pathname, currentLocale } = usePage().props;
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    let url_ = new URL(pathname);
    let pathname_ = url_.pathname;
    // const { pathname } = useLocation();
    return (
        <div className="footer">
            <div className="wrapper flex">
                {navList.map((nav, i) => {
                    let drop = nav.dropdown;

                    return (
                        <div
                            className={pathname_ === nav.link ? "nav_link active" : "nav_link"}
                            key={i}
                        >
                            <Link
                                className={drop ? "" : "link"}
                                href={nav.link}
                                onClick={drop ? (e) => e.preventDefault() : (e) => { return "" }}
                            >
                                <span>{nav.name}</span>
                            </Link>
                            {drop ? (
                                <div className="dropdown">
                                    {drop.map((drop, i) => {
                                        if (drop) {
                                            return (
                                                <div key={i} className="link">
                                                    <Link className=" nux" href={drop.link}>
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
        </div>
    );
};

export default Footer;
