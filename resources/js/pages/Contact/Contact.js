import React from "react";
import { PagePath, SendButton } from "../../components/SmallComps/SmallComps";
// import Img1 from "../../assets/images/ports/6.png";
import "../AboutUs/AboutUs.css";
// import mail from "../../assets/images/icons/contact/mail.svg";
// import pin from "../../assets/images/icons/contact/pin.svg";
// import tel from "../../assets/images/icons/contact/tel.svg";
import "./Contact.css";
import Layout from "../../Layouts/Layout";
import { useForm } from '@inertiajs/inertia-react'

const Contact = ({ seo }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        lastname: '',
        mail: '',
        phone: '',
        message: '',
    })

    function submit(e) {
        e.preventDefault()
        post(route('client.contact.mail'))
    }
    return (
        <Layout seo={seo}>
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
                        {/* <form action="">
                            <input type="text" placeholder="სახელი" />
                            <input type="text" placeholder="გვარი" />
                            <input type="text" placeholder="ელ.ფოსტა" />
                            <input type="tel" placeholder="ტელეფონი" />
                            <textarea placeholder="შეტყობინება"></textarea>
                            <SendButton text="გაგზავნა" onClick={() => console.log()} />
                        </form> */}
                        <div className="form">
                            <form onSubmit={submit}>

                                <input placeholder="სახელი" type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                                <input placeholder="გვარი" type="text" value={data.lastname} onChange={e => setData('lastname', e.target.value)} />
                                <input placeholder="ელ.ფოსტა" type="mail" value={data.mail} onChange={e => setData('mail', e.target.value)} />
                                <input placeholder="ტელეფონი" type="number" value={data.phone} onChange={e => setData('phone', e.target.value)} />
                                <textarea placeholder="შეტყობინება" value={data.message} onChange={e => setData('message', e.target.value)}></textarea>
                                <SendButton text="გაგზავნა" onClick={() => console.log()} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
