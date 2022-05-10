import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import "../../AboutUs/AboutUs.css";

const Stator7 = () => {
  return (
    <div className="servicesPage">
      <div className="aboutPage wrapper statorPage">
        <div className="container">
          <div className="font45 blue">Energy efficiency</div>
          <PagePath
            location1="მთავარი"
            location2="სერვისი"
            location3="სტატუტორი"
          />
          <div className="content">
            <p>
              On 17 June 2021, the IMO adopted amendments to MARPOL Annex VI at
              MEPC 76, introducing regulations 23 and 25 - the Efficiency
              Existing Ship Index (EEXI) and regulation 28 - the requirement to
              reduce Operational Carbon Intensity through the Carbon Intensity
              Indicator (CII).
            </p>
            <p>
              Vessels impacted by EEXI must demonstrate compliance by their next
              survey – annual, intermediate or renewal – for the International
              Air Pollution Prevention Certificate (IAPPC), or the initial
              survey before the ship enters service for the International Energy
              Efficiency Certificate (IEEC) to be issued, whichever is the first
              on or after 1 January 2023. Entry into force will be 01 November
              2022.
            </p>
          </div>
        </div>
        <StatorBoxes />
      </div>
    </div>
  );
};

export default Stator7;
