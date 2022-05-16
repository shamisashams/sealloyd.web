import React, { useState } from 'react';
// import Arrow from "../../assets/images/icons/other/arr.svg";
import "./Form.css";
import { useForm } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import { Link, usePage } from "@inertiajs/inertia-react";

export const Form = () => {
    // const { data, setData, post, processing, errors } = useForm({
    //     name: '',
    //     lastname: '',
    //     mail: '',
    //     phone: '',
    //     message: '',
    // })

    // function submit(e) {
    //     e.preventDefault()
    //     post(route('client.contact.mail'))
    // }

    // const inputs = [
    //     {
    //         type: "text",
    //         placeholder: "სახელი",
    //         data: 'name'
    //     },
    //     {
    //         type: "text",
    //         placeholder: "გვარი",
    //         data: 'lastname',
    //     },
    //     {
    //         type: "text",
    //         placeholder: "ელ.ფოსტა",
    //         data: "mail"
    //     },
    //     {
    //         type: "tel",
    //         placeholder: "ტელეფონი",
    //         data: "phone"
    //     },
    // ];
    const { errors } = usePage().props
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        mail: '',
        phone: '',
        message: '',
    })

    function handleChange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route('client.contact.mail'), values)
    }
    return (
        <div className="form">
            <h5 data-aos="fade-right">კითხვების შემთხვევაში მოგვწერეთ</h5>
            <form onSubmit={handleSubmit}>
                {/* {inputs.map((input, index) => {
                    return (
                        <input
                            key={index}
                            type={input.type}
                            placeholder={input.placeholder}
                        />
                    );
                })} */}
                <input placeholder="სახელი" id="name" type="text" onChange={handleChange} />
                {errors.name && <div className='alert-danger'>{errors.name}</div>}
                <input id="lastname" placeholder="გვარი" type="text" onChange={handleChange} />
                {errors.lastname && <div className='alert-danger'>{errors.lastname}</div>}
                <input id="mail" placeholder="ელ.ფოსტა" type="mail" onChange={handleChange} />
                {/* {errors.mail && <div>{errors.mail}</div>} */}
                <input id="phone" placeholder="ტელეფონი" type="number" onChange={handleChange} />
                {/* {errors.phone && <div>{errors.phone}</div>} */}
                <textarea id="message" placeholder="შეტყობინება" onChange={handleChange}></textarea>
                {/* {errors.messege && <div>{errors.messege}</div>} */}
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
