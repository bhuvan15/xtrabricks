import { WHAT_IS_EXTRABRICS, WHAT_IS_EXTRABRICS_DATA } from "@/constants";
import { theme } from "@/constants/basetheme";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { WhatIsXtraBricWrapper } from "./WhatIsXtraBrick.styles";


const WhatIsXtraBrick = () => {
  return (
    <WhatIsXtraBricWrapper id={'whatIsXtraBrick'}>
      <CustomHeading heading="What Xtrabrick stands for ? " />
      <div className={'dataContainer'}>
        <div className={'textWrapper'}>
          {WHAT_IS_EXTRABRICS_DATA.map((item, index) => {
            return (
              <p
                key={index}
                style={{
                  fontFamily: theme.fonts.lato,
                  fontWeight: 400,
                  color: "#434343",
                  margin: index === 1 ? "30px 0px" : 0,
                  padding: "0 15px",
                }}
                className={'descrption'}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className={'iconWrapper'}>
          {WHAT_IS_EXTRABRICS?.map((item, index) => {
            return (
              <div
                key={index}
                className={'iconContainer'}
                style={{marginTop: '35px'}}
              >
                <div style={{margin: '0 auto', width: '50%'}}>{<item.icon />}</div>
                <p
                  style={{
                    marginTop: 10,
                    fontFamily: theme.fonts.lato,
                    fontWeight: 400,
                    color: '#454545'
                  }}
                  className={'iconDescription'}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </WhatIsXtraBricWrapper>
  );
};

export default WhatIsXtraBrick;
