import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import { theme } from "@/constants/basetheme";
import Image from "next/image";
import CustomHeading from "@/components/CustomHeading/CustomHeading";
import { CONTACT_US, SOCIAL_ICONS } from "@/constants";

const contactUs = () => {
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
      <Image
        src={"/assets/images/contactUsBanner.png"}
        alt={"About Us"}
        layout={"responsive"}
        objectFit={"cover"}
        width={1920}
        height={1080}
        loading={"eager"}
      />
      <CustomHeading heading="Enquiry Form" />
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* left */}
        <div
          style={{
            flex: 0.7,
            borderRadius: 20,
            border: "1px solid rgba(0, 0, 0, 0.2)",
            height: "100%",
            padding: "40px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontFamily: theme.fonts.lato,
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.8)",
              marginBottom: 35,
            }}
          >
            Get in touch to schedule a visit to your new house. Kindly fill this
            form with your details about your enquiries and we would respond
            your enquiry shortly.
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: theme.fonts.lato,
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.8)",
              marginBottom: 15,
            }}
          >
            Working hours: (Mon - Sat) 10am – 7 pm
          </p>
          {/* form inputs */}
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <input
                type="text"
                style={{
                  flex: 0.48,
                  padding: 15,
                  borderRadius: 15,
                  border: "1px solid rgba(0 , 0, 0, 0.2)",
                  margin: "20px 0px",
                }}
                placeholder={"First Name"}
              />
              <input
                type="text"
                style={{
                  flex: 0.48,
                  padding: 15,
                  borderRadius: 15,
                  border: "1px solid rgba(0 , 0, 0, 0.2)",
                  margin: "20px 0px",
                }}
                placeholder={"Last Name"}
              />
            </div>
            <input
              type="text"
              style={{
                width: "100%",
                padding: 15,
                borderRadius: 15,
                border: "1px solid rgba(0 , 0, 0, 0.2)",
                margin: "20px 0px",
              }}
              placeholder={"Email"}
            />
            <select
              name="cars"
              id="cars"
              style={{
                width: "100%",
                borderRadius: 15,
                padding: 15,
                border: "1px solid rgba(0 , 0, 0, 0.2)",
                margin: "20px 0px",
              }}
            >
              <option value="1">1 BHK Flat / Simplex</option>
              <option value="2">2 BHK Flat / Simplex</option>
              <option value="3">3 BHK Flat / Simplex</option>
              <option value="4">Duplex</option>
              <option value="5">Flats / Residential Property</option>
              <option value="6">Shops / Commercial property</option>
              <option value="7">Clinics / Commercial property</option>
              <option value="8">Showroom / Commercial property</option>
              <option value="9">Commercial property</option>
              <option value="10">
                Developer plots / Non Agricultural Plots
              </option>
              <option value="11">Loan Services</option>
              <option value="12">Vaastu Shastra Consultation</option>
              <option value="13">Location of Property</option>
            </select>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              style={{
                width: "100%",
                borderRadius: 15,
                border: "1px solid rgba(0 , 0, 0, 0.2)",
                margin: "20px 0px",
                padding: "20px",
              }}
              placeholder={"Please write your requirements"}
            ></textarea>
            <button
              type="submit"
              style={{
                borderRadius: 20,
                backgroundColor: "#0173B0",
                border: "none",
                outline: "none",
                padding: "12px 30px",
                color: theme.colors.white,
              }}
            >
              Send
            </button>
          </form>
        </div>
        {/* right */}
        <div
          style={{
            flex: 0.3,
            borderRadius: 20,
            height: "100%",
            marginLeft: 100,
          }}
        >
          <div
            style={{
              width: "100%",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: 15,
              padding: "10px 20px",
              marginBottom: 100,
            }}
          >
            {CONTACT_US?.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    margin: '25px 0px'
                  }}
                >
                  <div
                    style={{
                      height: 15,
                      width: 15,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: '35px',
                      marginTop: '-10px',
                    }}
                  >
                    
                    <item.icon fill="#0173B0" />
                  </div>
                  {/* icon */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: theme.fonts.lato,
                        fontWeight: 400,
                        fontSize: 16,
                        marginBottom: 4,
                      }}
                    >
                      {item.heading}
                    </p>
                    <p
                      style={{
                        fontFamily: theme.fonts.lato,
                        fontWeight: 700,
                        fontSize: 18,
                      }}
                    >
                      {item.info}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              width: "100%",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: 15,
              padding: "10px 20px",
            }}
          >
            {SOCIAL_ICONS?.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    margin: '25px 0px',
                    cursor: "pointer",
                  }}
                  onClick={()=>{
                    if(window && typeof window !== undefined) {
                      window.open(item.link)
                    }
                  }}
                >
                  <div
                    style={{
                      height: 15,
                      width: 15,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: '35px',
                      marginTop: '-10px',
                    }}
                  >
                    
                    <item.icon fill="#0173B0" />
                  </div>
                  {/* icon */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      marginBottom: 4,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: theme.fonts.lato,
                        fontWeight: 400,
                        fontSize: 16,
                      }}
                    >
                      {item.heading}
                    </p>
                    <p
                      style={{
                        fontFamily: theme.fonts.lato,
                        fontWeight: 700,
                        fontSize: 18,
                      }}
                    >
                      {item.info}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default contactUs;
