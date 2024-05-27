import { OUR_TEAM_DATA } from "@/constants";
import Image from "next/image";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { OurTeamContainer, TeamMemberWrapper, TeamMembersWrapper, TeamMemberImage, TeamMemberName, TeamMemberPosition, TeamMemberCompany } from "./OurTeam.styles";

const OurTeam = () => {
  return (
    <OurTeamContainer id="ourTeam">
      <CustomHeading heading="Our Team" />
      <TeamMembersWrapper>
        {OUR_TEAM_DATA.map((item, index) => (
          <TeamMemberWrapper key={index}>
            <TeamMemberImage
              src={item.image}
              alt={item.name}
              width={352}
              height={390}
              loading="eager"
            />
            <TeamMemberName>{item.name}</TeamMemberName>
            <TeamMemberPosition>{item.position}</TeamMemberPosition>
            <TeamMemberCompany>{item.company}</TeamMemberCompany>
          </TeamMemberWrapper>
        ))}
      </TeamMembersWrapper>
    </OurTeamContainer>
  );
};

export default OurTeam;
