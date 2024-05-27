import { WHO_ARE_WE_DATA } from "@/constants";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { IconTextContainer, DataContainer, ItemContainer, WhoAreWeContainer } from "./WhoAreWe.styles";
import { theme } from "@/constants/basetheme";


const WhoAreWe = () => {
  return (
    <WhoAreWeContainer id={"whoAreWe"}>
      <CustomHeading heading="Who are we?" />

      {WHO_ARE_WE_DATA.map((item, index) => (
        <ItemContainer key={index}>
          <IconTextContainer>
            {<item.icon />}
            <p
              style={{
                marginTop: 5,
                fontFamily: theme.fonts.lato,
                fontWeight: 400,
                textAlign: "center",
                color: '#454545',
              
              }}
              className={'iconDescription'}
            >
              {item.name}
            </p>
          </IconTextContainer>
          <DataContainer font={theme.fonts.lato}>
            {item?.data?.map((para, index) => (
              <p
                key={index}
              
              >
                {para}
              </p>
            ))}
          </DataContainer>
        </ItemContainer>
      ))}
    </WhoAreWeContainer>
  );
};

export default WhoAreWe;
