import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react";
import { usePage, Head } from "@inertiajs/inertia-react";
import "../Header/Header.css";
import "./Footer.css";

const Footer = () => {
    const { url, component } = usePage();
    const sharedData = usePage().props.localizations;

    const { pathname, currentLocale } = usePage().props;
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    let url_ = new URL(pathname);
    let pathname_ = url_.pathname;
    // const { pathname } = useLocation();
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
                    name: __('client.nav_ethics', sharedData),
                    link: route('client.aboutus.ethics'),
                },
                {
                    name: __('client.nav_politics', sharedData),
                    link: route('client.aboutus.politics'),
                },
                {
                    name: __('client.nav_managment', sharedData),
                    link: route('client.aboutus.management'),
                },
                {
                    name: __('client.nav_recognition', sharedData),
                    link: route('client.aboutus.recognition'),
                },
            ],
        },
        {
            name: __('client.nav_services', sharedData),
            link: "",
            dropdown: [
                {
                    name: __('client.nav_clasification', sharedData),
                    link: route("client.services.index"),
                },
                {
                    name: __('client.nav_stators', sharedData),
                    link: route("client.services.stators"),
                },
                {
                    name: __('client.nav_certifications', sharedData),
                    link: route("client.services.certifications"),
                },
                {
                    name: __('client.nav_comprecognition', sharedData),
                    link: route("client.services.comprecognition"),
                },
            ],
        },
        {
            name: __('client.nav_documentation', sharedData),
            link: "",
            dropdown: [
                {
                    name: __('client.nav_ownerapplication', sharedData),
                    link: route('client.services.ownerapplication'),
                },
                {
                    name: __('client.nav_evaluation', sharedData),
                    link: route('client.services.evaluation'),
                },
                {
                    name: __('client.nav_circulars', sharedData),
                    link: route('client.services.circulars'),
                },
            ],
        },
        {
            name: __('client.nav_ourteam', sharedData),
            link: "",
            dropdown: [
                {
                    name: __('client.nav_office', sharedData),
                    link: route('client.services.office'),
                },
                {
                    name: __('client.nav_inspectors', sharedData),
                    link: route('client.services.inspectors'),
                },
                {
                    name: __('client.nav_career', sharedData),
                    link: route('client.services.career'),
                },
            ],
        },
        {
            name: __('client.nav_contact', sharedData),
            link: route('client.contact.index'),
        },
    ]

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
