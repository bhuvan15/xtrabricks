import React from "react";
import Image from "next/image";
import { AboutUsContainer, LogoContainer, RightWrapper, AboutUsHeading, XtraBrickRealtors, ExperienceText, AddressText, BackgroundImage } from "./AboutUs.styles";

const AboutUs: React.FC = () => {
  return (
    <AboutUsContainer id="aboutUs">
      <BackgroundImage>
        <Image
          src="/assets/images/aboutUsBg.png"
          alt="About Us"
          layout="responsive"
          width={1920}
          height={1080}
          loading="eager"
          className="backgroundImage"
        />
      </BackgroundImage>
      <LogoContainer>
        <Image
          alt="XTRABRICK"
          src="/assets/images/Logo.png"
          height={98}
          width={174}
          className="logo"
        />
      </LogoContainer>
      <RightWrapper>
        <div>
          <AboutUsHeading >About Us</AboutUsHeading>
          <XtraBrickRealtors >XTRABRICK REALTORS</XtraBrickRealtors>
          <ExperienceText color="#20B2FF">20 +</ExperienceText>
          <ExperienceText color="#ffffff" isBold>Years of Experience</ExperienceText>
        </div>
        <AddressText>
          Office No. 45, Vision One Mall, Bhumkar Chowk, <br />Wakad - 411033,
          Pune, Maharashtra, India
        </AddressText>
      </RightWrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
