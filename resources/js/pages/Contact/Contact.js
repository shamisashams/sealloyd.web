import React from "react";
import { PagePath, SendButton } from "../../components/SmallComps/SmallComps";
// import Img1 from "../../assets/images/ports/6.png";
import "../AboutUs/AboutUs.css";
// import mail from "../../assets/images/icons/contact/mail.svg";
// import pin from "../../assets/images/icons/contact/pin.svg";
// import tel from "../../assets/images/icons/contact/tel.svg";
import "./Contact.css";
import Layout from "../../Layouts/Layout";
import {useForm, usePage} from '@inertiajs/inertia-react'

const Contact = ({ info ,page, seo, images }) => {
    console.log(info)
    const sharedData = usePage().props.localizations;
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
            <div className="aboutPage contactPage servicesPage" >
                <div
                    className="showcase"
                    style={{
                        background: `url('`+ images[0] +`') no-repeat`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="wrapper">
                        <PagePath location2={__('client.nav_home',sharedData)} location3={__('client.nav_contact',sharedData)} />
                    </div>
                </div>

                <div className="wrapper">
                    <div className="container content" style={{ margin: "auto" }}>
                        <div className="flex contact_info">
                            <a href="#">
                                <img src='/assets/images/icons/contact/mail.svg' alt="" />
                                <span>{info.email.value}</span>
                            </a>
                            <a href="#">
                                <img src='/assets/images/icons/contact/pin.svg' alt="" />
                                <span>{info.address.value}</span>
                            </a>
                            <a href="#">
                                <img src='/assets/images/icons/contact/tel.svg' alt="" />
                                <span>{info.phone.value}</span>
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

                                <input placeholder={__('client.contact_form_name',sharedData)} type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                                <input placeholder={__('client.contact_form_surname',sharedData)} type="text" value={data.lastname} onChange={e => setData('lastname', e.target.value)} />
                                <input placeholder={__('client.contact_form_email',sharedData)} type="mail" value={data.mail} onChange={e => setData('mail', e.target.value)} />
                                <input placeholder={__('client.contact_form_phone',sharedData)} type="number" value={data.phone} onChange={e => setData('phone', e.target.value)} />
                                <textarea placeholder={__('client.contact_form_message',sharedData)} value={data.message} onChange={e => setData('message', e.target.value)}></textarea>
                                <SendButton text={__('client.contact_form_send',sharedData)} onClick={() => console.log()} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
