import React from "react";
import { PagePath, SendButton } from "../../components/SmallComps/SmallComps";
import "./Documents.css";

const Evaluation = () => {
  const scale = [1, 2, 3, 4, 5];
  const satisfaction = ["Excellent", "Very Good", "Good", "Fair", "Poor"];

  return (
    <div className="documents teamPage careerPage evaluation">
      <div className="wrapper">
        <div className="font45 blue">მომსახურების შეფასება</div>
        <PagePath
          location1="მთავარი"
          location2="დოკუმენტაცია"
          location3="მომსახურების შეფასება"
        />
        <div className="content">
          <p className="op05 margin_bottom">
            We hope you are pleased with the service that you have already
            received from MARITIME LLOYD. It is our aim to provide the most
            helpful and comprehensive service possible. To help us, please would
            you complete this short questionnaire?
          </p>
          <input type="text" placeholder="Organization/Company name" />
          <input type="date" className="margin_bottom" />
          <p>
            On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and
            5 represents "Extremely Satisfied," how would you rate your level of
            overall satisfaction with Maritime Lloyd as a service supplier?
          </p>
          <div className="flex rating scale margin_bottom">
            {scale.map((item, index) => {
              return (
                <div key={index} className="radio num">
                  <label className="op05" htmlFor={`rate_1_${index}`}>
                    {item}
                  </label>
                  <input type="radio" name="rate_1" id={`rate_1_${index}`} />
                </div>
              );
            })}
          </div>
          <p>
            Why do you say that? What specifically are you satisfied or
            dissatisfied with Maritime Lloyd?
          </p>
          <input
            type="text"
            placeholder="Enter response here"
            className="margin_bottom"
          />
          <p>
            How likely are you to recommend Maritime Lloyd to your business
            partners/other ship owners? Would you say the chances are …
          </p>
          <div className=" rating satis margin_bottom">
            {satisfaction.map((item, index) => {
              return (
                <div key={index} className="radio num">
                  <input type="radio" name="rate_2" id={`rate_2_${index}`} />
                  <label className="op05" htmlFor={`rate_2_${index}`}>
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <p>
            How likely are you to repurchase services from Maritime Lloyd? Would
            you say the chances are …
          </p>
          <div className=" rating satis margin_bottom">
            {satisfaction.map((item, index) => {
              return (
                <div key={index} className="radio num">
                  <input type="radio" name="rate_3" id={`rate_3_${index}`} />
                  <label className="op05" htmlFor={`rate_3_${index}`}>
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <p>
            How would you rate the overall quality of your relationship with
            Maritime Lloyd, considering all of your experiences with them? Would
            you say it is
          </p>
          <div className=" rating satis margin_bottom">
            {satisfaction.map((item, index) => {
              return (
                <div key={index} className="radio num">
                  <input type="radio" name="rate_4" id={`rate_4_${index}`} />
                  <label className="op05" htmlFor={`rate_4_${index}`}>
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <p>
            On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and
            5 represents "Extremely Satisfied," how would you rate your level of
            satisfaction with Maritime Lloyd in regards to customer service?
          </p>
          <div className="flex rating scale margin_bottom">
            {scale.map((item, index) => {
              return (
                <div key={index} className="radio num">
                  <label className="op05" htmlFor={`rate_5_${index}`}>
                    {item}
                  </label>
                  <input type="radio" name="rate_5" id={`rate_5_${index}`} />
                </div>
              );
            })}
          </div>
          <p>
            On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and
            5 represents "Extremely Satisfied," how would you rate your level of
            satisfaction with Maritime Lloyd in regards to price?
          </p>
          <div className="flex rating scale margin_bottom">
            {scale.map((item, index) => {
              return (
                <div key={index} className="radio num">
                  <label className="op05" htmlFor={`rate_6_${index}`}>
                    {item}
                  </label>
                  <input type="radio" name="rate_6" id={`rate_6_${index}`} />
                </div>
              );
            })}
          </div>
          <p>
            On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and
            5 represents "Extremely Satisfied," how would you rate your level of
            satisfaction with Maritime Lloyd in regards to value?
          </p>
          <div className="flex rating scale margin_bottom">
            {scale.map((item, index) => {
              return (
                <div key={index} className="radio num">
                  <label className="op05" htmlFor={`rate_7_${index}`}>
                    {item}
                  </label>
                  <input type="radio" name="rate_7" id={`rate_7_${index}`} />
                </div>
              );
            })}
          </div>
          <div className="uppercase">
            THANK YOU FOR TAKING THE TIME TO COMPLETE THIS QUESTIONNAIRE.
          </div>
          <p className="op05 margin_bottom">
            Your Comments Will Be Treated as Fully Confidential.
          </p>
          <SendButton text="Send Answers Now" />
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
