import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
// import Logo from "../../assets/images/logo/1.png";
// import Ge from "../../assets/images/icons/langs/ge.png";
// import En from "../../assets/images/icons/langs/en.png";
import { navList } from "./NavList";
import "./Header.css";

const Header = () => {
    const { url, component } = usePage();
    const { pathname, currentLocale } = usePage().props;
    let url_ = new URL(pathname);
    let pathname_ = url_.pathname;
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    // const { pathname } = useLocation();
    let solid = false;
    if (pathname_ === "/" || pathname_ === "/login") {
        solid = true;
    }
    return (
        <div className={solid ? "header solid" : "header"}>
            <div className="wrapper flex">
                <Link href="/">
                    <img src='/assets/images/logo/1.png' alt="" />
                </Link>
                <div className="flex right">
                    <div className={menu ? "navbar open" : "navbar"}>
                        {navList.map((nav, i) => {
                            let drop = nav.dropdown;
                            return (
                                <div
                                    className={
                                        pathname_ === nav.link ? "nav_link active" : "nav_link"
                                    }
                                    key={i}
                                >
                                    <Link
                                        className={drop ? "" : "link"}
                                        href={nav.link}
                                        onClick={drop ? (e) => e.preventDefault() : ""}
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
                    <Link
                        className={pathname_ === "/login" ? "nav_link active" : "nav_link"}
                        href="/login"
                    >
                        <span>კაბინეტი</span>
                    </Link>
                    <div className="languages">
                        <div className="on">
                            <img src='/assets/images/icons/langs/ge.png' alt="" />
                        </div>
                        <div className="drop">
                            <Link to="/">
                                <img src='/assets/images/icons/langs/ge.png' alt="" />
                            </Link>
                        </div>
                    </div>
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
