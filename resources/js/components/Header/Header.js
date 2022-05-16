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
    const sharedData = usePage().props.localizations;
    let navList = [
        {
            // name: 'მთავარი',
            name: __('client.nav_home', sharedData),
            link: route('client.home.index'),
        },
        {
            name: __('client.nav_aboutus', sharedData),
            link: "",
            dropdown: [
                {
                    name: __('client.nav_purpose', sharedData),
                    link: route('client.aboutus.purpose'),
                },
                {
                    name: "ეთიკის კოდექსი",
                    link: route('client.aboutus.ethics'),
                },
                {
                    name: "პოლიტიკა",
                    link: route('client.aboutus.politics'),
                },
                {
                    name: "ხარისხის მენეჯმენტის სისტემა",
                    link: route('client.aboutus.management'),
                },
                {
                    name: "დროშის აღიარებები",
                    link: route('client.aboutus.recognition'),
                },
            ],
        },
        {
            name: "სერვისი",
            link: "",
            dropdown: [
                {
                    name: "გემების კლასიფიკაცია",
                    link: route("client.services.index"),
                },
                {
                    name: "სტატუტორი",
                    link: route("client.services.stators"),
                },
                {
                    name: "მანუალების დამოწმება",
                    link: route("client.services.certifications"),
                },
                {
                    name: "კომპანიების აღიარება",
                    link: route("client.services.comprecognition"),
                },
            ],
        },
        {
            name: "დოკუმენტაცია",
            link: "",
            dropdown: [
                {
                    name: "გემთმფლობელის აპლიკაცია",
                    link: route('client.services.ownerapplication'),
                },
                {
                    name: "მომსახურების შეფასება",
                    link: route('client.services.evaluation'),
                },
                {
                    name: "ცირკულარები",
                    link: route('client.services.circulars'),
                },
            ],
        },
        {
            name: "ჩვენი გუნდი",
            link: "",
            dropdown: [
                {
                    name: "ბათუმის სათაო ოფისი",
                    link: route('client.services.office'),
                },
                {
                    name: "აღიარებული ინსპექტორები",
                    link: route('client.services.inspectors'),
                },
                {
                    name: "კარიერა",
                    link: route('client.services.career'),
                },
            ],
        },
        {
            name: "კონტაქტი",
            link: route('client.contact.index'),
        },
    ]

    const testFunction = () => {
        alert('asd')
    }
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
    if (pathname == route('client.home.index')) {
        solid = true;
    }
    return (
        // <div className={solid ? "header solid" : "header"}>
        <div className={"header solid"}>
            <div className="wrapper flex">
                <Link href={route('client.home.index')}>
                    <img src='/assets/images/logo/1.png' alt="" />
                </Link>
                <div className="flex right">
                    <div className={menu ? "navbar open" : "navbar"}>
                        {navList.map((nav, i) => {
                            let drop = nav.dropdown;
                            return (
                                <div
                                    className={
                                        pathname === nav.link ? "nav_link active" : "nav_link"
                                    }
                                    key={i}
                                >
                                    <Link
                                        className={drop ? "" : "link"}
                                        href={nav.link}
                                        onClick={drop ? (e) => { e.preventDefault() } : (e) => { return "" }}
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
                        className={pathname === route('client.login') ? "nav_link active" : "nav_link"}
                        href={route('client.login')}
                    >
                        <span>კაბინეტი</span>
                    </Link>
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
                    <button
                        // onClick={() => toggleMenu()}
                        onClick={testFunction}
                        className={menu ? "menu_btn clicked" : "menu_btn"}
                    >
                        <div className="span"></div>
                        <div className="span"></div>
                    </button> */}
                    <Languages></Languages>
                </div>
            </div>
        </div>
    );
};

export default Header;
