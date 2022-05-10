import React from "react";
import { PagePath, SendButton } from "../../components/SmallComps/SmallComps";
// import Img1 from "../../assets/images/ports/6.png";
import "../AboutUs/AboutUs.css";
// import mail from "../../assets/images/icons/contact/mail.svg";
// import pin from "../../assets/images/icons/contact/pin.svg";
// import tel from "../../assets/images/icons/contact/tel.svg";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="aboutPage contactPage servicesPage">
            <div
                className="showcase"
                style={{
                    background: `url('/assets/images/ports/6.png') no-repeat`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="wrapper">
                    <PagePath location2="მთავარი" location3="კონტაქტი" />
                </div>
            </div>

            <div className="wrapper">
                <div className="container content" style={{ margin: "auto" }}>
                    <div className="flex contact_info">
                        <a href="#">
                            <img src='/assets/images/icons/contact/mail.svg' alt="" />
                            <span>stat@geolloyd.com</span>
                        </a>
                        <a href="#">
                            <img src='/assets/images/icons/contact/mail.svg' alt="" />
                            <span>street name #123. Batumi, Georgia</span>
                        </a>
                        <a href="#">
                            <img src='/assets/images/icons/contact/mail.svg' alt="" />
                            <span>+995 032 2 22 22 22</span>
                        </a>
                    </div>
                    <form action="">
                        <input type="text" placeholder="სახელი" />
                        <input type="text" placeholder="გვარი" />
                        <input type="text" placeholder="ელ.ფოსტა" />
                        <input type="tel" placeholder="ტელეფონი" />
                        <textarea placeholder="შეტყობინება"></textarea>
                        <SendButton text="გაგზავნა" onClick={() => console.log()} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
