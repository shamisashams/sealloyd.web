import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import "../../AboutUs/AboutUs.css";

const Stator5 = () => {
  return (
    <div className="servicesPage">
      <div className="aboutPage wrapper statorPage">
        <div className="container">
          <div className="font45 blue">ISPS Code</div>
          <PagePath
            location1="მთავარი"
            location2="სერვისი"
            location3="სტატუტორი"
          />
          <div className="content">
            <p>
              The main objective of ISPS Code is to detect security threats and
              implement security measures. To establish roles and
              responsibilities concerning maritime security for governments,
              local administrations, ship and port industries at the national
              and international level.
            </p>
            <p>
              The ISPS Code was adopted by one of the resolutions that was
              adopted on 12 December 2002 by the Conference of Contracting
              Governments to the SOLAS, 1974. The ISPS Code entered into force
              on July 01, 2004 for both ships and ports. In case that the ISPS
              Code applies to your ship, it must have an International Ship
              Security Certificate (ISSC) in order to operate.
            </p>
            <p>
              Maritime Lloyd As a Recognized Organization can carry out security
              plan approvals and verification audits, leading to the issue of an
              ISSC for vessels. Our Company is authorized to carry out initial /
              renewal / interim / additional audits on flag administrations
              behalf.
            </p>
          </div>
        </div>
        <StatorBoxes />
      </div>
    </div>
  );
};

export default Stator5;
