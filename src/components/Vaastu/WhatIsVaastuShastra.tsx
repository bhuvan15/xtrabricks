import { WHAT_IS_VAASTU_SHASTRA } from "@/constants";
import Image from "next/image";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { theme } from "@/constants/basetheme";


const WhatIsVaastuShastra = () => {
  return (
    <>
      <CustomHeading heading="What is Vaastu Shastra" />
      <div
        style={{
          width: "100%",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={"/assets/images/vaastuDescription.png"}
          alt={"Vaastu Details"}
          height={439}
          width={586}
          loading={"eager"}
        />
        <div style={{ display: "flex", flexDirection: "column", height: '439px', justifyContent: 'space-between', width: '50%', marginLeft: 75 }}>
          {WHAT_IS_VAASTU_SHASTRA?.map((item, index) => {
            return <p key={index} style={{fontSize: 20, fontFamily: theme.fonts.lato,}}>{item}</p>;
          })}
          <div
            style={{
              cursor: "pointer",
              height: 47,
              borderRadius: 20,
              width: 193,
              backgroundColor: "#0173B0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: theme.fonts.lato,
                fontWeight: 400,
                fontSize: 16,
                color: theme.colors.white,
              }}
            >
              Book a Consultation
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsVaastuShastra;
