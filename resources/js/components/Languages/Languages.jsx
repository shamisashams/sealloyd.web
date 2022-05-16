import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import "../Header/Header.css";
export const Languages = () => {
    const { locales, currentLocale, locale_urls } = usePage().props;

    const toggleMenu = () => {
        setMenu(!menu);
    };


    let maps = [
        '/assets/images/icons/langs/ge.png', '/assets/images/icons/langs/en.png', '/assets/images/icons/langs/ru.png'
    ]

    return (
        <div className="languages">
            <div className="on">
                {Object.keys(locales).map((name, index) => {
                    if (locales[name] === currentLocale) {
                        return <div key={name + "locale"}> <img src={maps[index]} alt="" />
                        </div>;
                    }
                })}
            </div>
            <div className="drop">
                {Object.keys(locales).map((name, index) => {
                    if (locales[name] !== currentLocale) {
                        return (

                            <Link href={locale_urls[name]} key={name + "locale"}>
                                <img src={maps[index]} alt="" />
                            </Link>
                        );
                    }
                })}
            </div>
        </div>

    );
};
