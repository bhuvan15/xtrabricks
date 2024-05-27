import { LOCATIONS } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";
import CustomHeading from "../CustomHeading/CustomHeading";
import Image from "next/image";
import { LocationImageContainer } from "./Locations.styles";

const Locations = () => {
  return (
    <LocationImageContainer
      id={"locations"}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: '-10px',
      }}
    >
      <CustomHeading heading="Our Locations" />
      <Marquee speed={75}>
        {LOCATIONS?.map((item, index) => {
          return (
            // <LocationImageContainer  key={index}>
              <Image
                src={item}
                alt={"Locations"}
                key={index}
                height={323}
                width={427}
                style={{ margin: "0px 15px" }}
                loading={"eager"}
                className={'locationImage'}
              />
              
            // </LocationImageContainer>
          );
        })}
      </Marquee>
    </LocationImageContainer>
  );
};

export default Locations;
