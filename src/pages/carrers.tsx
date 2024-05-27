import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import { FILTER_DATA, JOBS_DATA } from "@/constants";
import { theme } from "@/constants/basetheme";
import LocationIcon from "../../public/assets/svg/LocationIcon";
import JobIcon from "../../public/assets/svg/JobIcon";
import RupeeIcon from "../../public/assets/svg/RupeeIcon";

const Carrers = () => {
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
        }}
      >
        <Image
          src={"/assets/images/carrerBanner.png"}
          alt={"About Us"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
      </div>
      {/* second fold */}
      <div
        style={{
          display: "flex",
          height: 567,
          width: "100%",
          padding: "40px",
        }}
      >
        {/* left */}
        <div
          style={{
            flex: 0.25,
            backgroundColor: "#F4F4F4",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            padding: "30px 20px 30px",
          }}
        >
          <h2
            style={{
               fontFamily: theme.fonts.lato,
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            Filter By
          </h2>
          {FILTER_DATA.map((item, index) => {
            return (
              <div key={index}>
                <p
                  style={{
                     fontFamily: theme.fonts.lato,
                    fontSize: "20px",
                    fontWeight: 700,
                    margin: "15px 0",
                  }}
                >
                  {item.category}
                </p>
                {item.filters?.map((filter, i) => {
                  return (
                    <p
                      style={{
                         fontFamily: theme.fonts.lato,
                        fontSize: "18px",
                        fontWeight: 400,
                        margin: "15px 0",
                        cursor: "pointer",
                      }}
                      key={i}
                    >
                      {filter}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* right */}
        <div
          style={{
            flex: 0.75,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, auto)",
            gap: "20px",
            overflowY: "auto",
          }}
        >
          {JOBS_DATA.map((job, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: 247,
                  width: 348,
                  borderRadius: 20,
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  justifyContent: "space-evenly",
                  margin: "0 auto",
                  padding: "10px 20px",
                }}
              >
                <h2
                  style={{
                     fontFamily: theme.fonts.lato,
                    fontWeight: 700,
                    fontSize: "22px",
                  }}
                >
                  {job?.position}
                </h2>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',                    
                }}>
                    <LocationIcon height={20} width={15}/>
                  
                  <p
                    style={{
                       fontFamily: theme.fonts.lato,
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#434343",
                      marginLeft: '5px',
                    }}
                  >
                    {job?.location}
                  </p>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',   
                    gap: 5,
                }}>
                  <JobIcon />
                  <p
                    style={{
                       fontFamily: theme.fonts.lato,
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#434343",
                    }}
                  >
                    {job?.experience}
                  </p>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,                    
                }}>
                 <RupeeIcon />
                  <p
                    style={{
                       fontFamily: theme.fonts.lato,
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#434343",
                    
                    }}
                  >
                    {job?.ctc}
                  </p>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p
                      style={{
                         fontFamily: theme.fonts.lato,
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#434343",
                      }}
                    >
                      Poster: {job?.postTime}
                    </p>
                    <p
                      style={{
                         fontFamily: theme.fonts.lato,
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#434343",
                      }}
                    >
                      Openings: {job?.openings}
                    </p>
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                      marginTop: 20,
                      height: 28,
                      borderRadius: 20,
                      width: 117,
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
                      Apply
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src={"/assets/images/footerHeader.png"}
        alt={"Application Email"}
        layout={"responsive"}
        objectFit={"cover"}
        width={1920}
        height={1080}
        loading={"eager"}
        style={{ marginBottom: -55 }}
      />
      <Footer />
    </div>
  );
};

export default Carrers;
