import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import "../../AboutUs/AboutUs.css";

const Stator3 = () => {
  return (
    <div className="servicesPage">
      <div className="aboutPage wrapper statorPage">
        <div className="container">
          <div className="font45 blue">ISM code</div>
          <PagePath
            location1="მთავარი"
            location2="სერვისი"
            location3="სტატუტორი"
          />
          <div className="content">
            <p>
              was adopted by the IMO through Resolution A.741 (18) on the 4th of
              November 1993. The ISM Code has been enforced for all types of
              ships of 500 gross tonnage. The aim of ISM Code is to provide
              international standards for the safe management and operation of
              ships and pollution prevention.
            </p>
            <p>
              Maritime Lloyd can provide highly qualified auditors to certify
              Company and Ship for compliance with the ISM Code. According to
              the ISM Code, a Document of Compliance (DoC) is issued to
              Companies in case of management system satisfies requirements of
              ISM Code. Correspondingly, a Safety Management Certificate (SMC)
              is issued to a ship which prove that, its shipboard management
              operates in accordance with the approved Safety Management System.
            </p>
          </div>
        </div>
        <StatorBoxes />
      </div>
    </div>
  );
};

export default Stator3;
