import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import {
  AMENITIES_PROVIDED,
  COMMERCIAL_PROPERTIES,
  COMMERCIAL_PROPERTIES_WIDGET,
  DEVELOPER_PLOTS,
  DEVELOPER_PROPERTIES,
  LOCATION_BENEFITS,
  PROPERTIES_NAVIGATOR,
  RESIDENTIAL_PROPERTIES,
} from "@/constants";
import CustomHeading from "@/components/CustomHeading/CustomHeading";
import VaastuDetailsContainer from "@/components/Vaastu/VaastuDetailsContainer";
import SkyScrapperIcon from "../../public/assets/svg/SkyScrapperIcon";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";
import ResidentialPropertiesCarousel from "@/components/ResidentialPropertiesCarousel/ResidentialPropertiesCarousel";
import Link from "next/link";
import { theme } from "@/constants/basetheme";

const Properties = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(0, 0,0,0.2)",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <Image
          src={"/assets/images/propertiesBanner.png"}
          alt={"Properties"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            justifyContent: "space-between",
            margin: "30px auto",
          }}
        >
          {PROPERTIES_NAVIGATOR.map((item, index) => {
            return (
              <Link  key={index} href={item.link} scroll={false} passHref>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: theme.fonts.lato,
                  cursor: "pointer",
                }}
              >
                {item.name}
              </p>
              </Link>
            );
          })}
        </div>
      </div>

      <CustomHeading heading="How to book a Property with Xtrabrick" />
      <div
        style={{
          width: "88%",
          margin: "0px auto",
        }}
        id={'/properties/#howToBuy'}
      >
        <Image
          src={"/assets/images/propertiesProcessBanner.png"}
          alt={"Buy Properties Banner"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
      </div>
      <CustomHeading heading="Residential Properties"  id={'residentialProperties'}  />
      <ResidentialPropertiesCarousel />

      <CustomHeading heading="Amenities Provided" />
      <div
        style={{
          width: "90%",
          padding: "40px 40px 0px",
          borderRadius: "20px",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "20px",
          marginBottom: '50px',
        }}
      >
        {AMENITIES_PROVIDED.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: 40,
              }}
            >
              <item.icon />
              <p
                style={{
                  fontSize: 18,
                  fontFamily: theme.fonts.lato,
                  fontWeight: 400,
                  marginTop: 14,
                }}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Residential Carousel */}
      <PromotionalBanner data={RESIDENTIAL_PROPERTIES}  />

      <CustomHeading heading="Commercial Properties" id={'commercialProperties'}/>
      <div
        style={{
          width: "90%",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          display: "flex",
          minHeight: 300,
          marginBottom: '65px',
        }}
      >
        <div
          style={{
            minHeight: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SkyScrapperIcon />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {COMMERCIAL_PROPERTIES_WIDGET.map((item, index) => {
            return (
              <p
                key={index}
                style={{
                  fontSize: 24,
                  fontFamily: theme.fonts.lato,
                  fontWeight: "lighter",
                  marginLeft: 50,
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      {/* Commercial Properties Carousel */}
      <PromotionalBanner data={COMMERCIAL_PROPERTIES} />

      <CustomHeading heading="Developer / Non- Agricultural  Plots" id="developerPlots"/>
      <VaastuDetailsContainer data={DEVELOPER_PLOTS} />

      <PromotionalBanner data={DEVELOPER_PROPERTIES} id={'developerUnits'}/>
      {/* Developer carousel */}
      <CustomHeading heading="Location Benefits" id={'locationBenfits'}/>
      <div
        style={{
          width: "90%",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          display: "flex",
          minHeight: 200,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            marginBottom: 50,
            fontSize: 22,
            fontFamily: theme.fonts.lato,
            fontWeight: 400,
          }}
        >
          Pune, Maharashtra
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            minHeight: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          id={'locationBenefits'}
        >
          {LOCATION_BENEFITS.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <item.icon />
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: theme.fonts.lato,
                    fontWeight: 400,
                    color: "#434343",
                    marginBottom: 25,
                    marginTop: 15,
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: theme.fonts.lato,
                    fontWeight: 700,
                    color: "#909090",
                  }}
                >
                  {item.time}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
