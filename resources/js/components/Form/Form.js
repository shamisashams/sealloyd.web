import React from "react";
// import Arrow from "../../assets/images/icons/other/arr.svg";
import "./Form.css";

export const Form = () => {
    const inputs = [
        {
            type: "text",
            placeholder: "სახელი",
        },
        {
            type: "text",
            placeholder: "გვარი",
        },
        {
            type: "text",
            placeholder: "ელ.ფოსტა",
        },
        {
            type: "tel",
            placeholder: "ტელეფონი",
        },
    ];
    return (
        <div className="form">
            <h5 data-aos="fade-right">კითხვების შემთხვევაში მოგვწერეთ</h5>
            <form action="" data-aos="fade-up">
                {inputs.map((input, index) => {
                    return (
                        <input
                            key={index}
                            type={input.type}
                            placeholder={input.placeholder}
                        />
                    );
                })}
                <textarea placeholder="შეტყობინება"></textarea>
                <button className="flex">
                    <span>გაგზავნა</span>
                    <div className="flex centered">
                        <img src='/assets/images/icons/other/arr.svg' alt="" />
                    </div>
                </button>
            </form>
        </div>
    );
};
