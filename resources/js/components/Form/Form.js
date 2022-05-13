import React, { useState } from 'react';
// import Arrow from "../../assets/images/icons/other/arr.svg";
import "./Form.css";
import { useForm } from '@inertiajs/inertia-react'
import { Link, usePage } from "@inertiajs/inertia-react";

export const Form = () => {
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

    const inputs = [
        {
            type: "text",
            placeholder: "სახელი",
            data: 'name'
        },
        {
            type: "text",
            placeholder: "გვარი",
            data: 'lastname',
        },
        {
            type: "text",
            placeholder: "ელ.ფოსტა",
            data: "mail"
        },
        {
            type: "tel",
            placeholder: "ტელეფონი",
            data: "phone"
        },
    ];
    return (
        <div className="form">
            <h5 data-aos="fade-right">კითხვების შემთხვევაში მოგვწერეთ</h5>
            <form onSubmit={submit}>
                {/* {inputs.map((input, index) => {
                    return (
                        <input
                            key={index}
                            type={input.type}
                            placeholder={input.placeholder}
                        />
                    );
                })} */}
                <input placeholder="სახელი" type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                <input placeholder="გვარი" type="text" value={data.lastname} onChange={e => setData('lastname', e.target.value)} />
                <input placeholder="ელ.ფოსტა" type="mail" value={data.mail} onChange={e => setData('mail', e.target.value)} />
                <input placeholder="ტელეფონი" type="number" value={data.phone} onChange={e => setData('phone', e.target.value)} />
                <textarea placeholder="შეტყობინება" value={data.message} onChange={e => setData('message', e.target.value)}></textarea>
                <button type='submit' className="flex">
                    <span>გაგზავნა</span>
                    <div className="flex centered">
                        <img src='/assets/images/icons/other/arr.svg' alt="" />
                    </div>
                </button>
            </form>
        </div>
    );
};
