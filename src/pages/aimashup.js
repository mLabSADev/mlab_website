import React, { useEffect, useState } from "react";
import "./aihack.scss";
import Layout from "../components/ChatBot/ChatBot";
import Typography from "../components/Typography/Typography";
import Section from "../components/Section/Section";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Button, Modal, Image, Statistic, Space } from "antd";
import { SwapRightOutlined } from "@ant-design/icons";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
  Virtual,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import AIVideo from "../images/aihack/bgVideo.mp4";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import { Icons } from "../components/Icons";
import { graphql } from "gatsby";
const { Countdown } = Statistic;

const deadline = new Date("03 November 2023"); // Dayjs is also OK

const AiCard = ({ children }) => {
  return (
    <div className="aiCard">
      <svg
        className="cornerDeco"
        width="78"
        height="69"
        viewBox="0 0 78 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.6667 0H77.5L74.9167 4.83333H18.6689L4.83333 18.6689L4.83334 66.4166L3.68633e-06 68.9999L0 16.6669V16.6666H0.000299454L16.6667 0.000243817V0Z"
          fill="#FFBD36"
        />
      </svg>
      {children}
      <StaticImage
        objectFit="contain"
        className="techBlob"
        src="../images/aihack/techBlob.png"
        alt=""
      />
    </div>
  );
};
const Slides = () => {
  const swiper = useSwiper();
  return (
    <Swiper
      className="sliderss"
      ref={(ref) => {
        swiper = ref;
      }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      // install Swiper modules
      modules={[Pagination, Autoplay, EffectCreative]}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{ height: "100%" }}>
        <div className="slideImageCont">
          <div className="slideImageText">
            <Typography style={{ fontFamily: "Segoe" }} variant="h4">
              Breaking Boundaries &amp; Redefining Possibilities
            </Typography>
          </div>
          <StaticImage
            style={{ height: "100%" }}
            className="slideImage"
            alt=""
            src="../images/aihack/images/1.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ height: "100%" }}>
        <div className="slideImageCont">
          <div className="slideImageText">
            <Typography style={{ fontFamily: "Segoe" }} variant="h4">
              Connect, Create &amp; Corroborate
            </Typography>
          </div>
          <StaticImage
            style={{ height: "100%" }}
            className="slideImage"
            alt=""
            src="../images/aihack/images/2.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slideImageCont">
          <div className="slideImageText">
            <Typography style={{ fontFamily: "Segoe" }} variant="h4">
              Embrace the AI revolution and be at the forefront of innovation.
            </Typography>
          </div>
          <StaticImage
            style={{ height: "100%" }}
            className="slideImage"
            alt=""
            src="../images/aihack/images/3.jpg"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ height: "100%" }}>
        <div className="slideImageCont">
          <div className="slideImageText">
            <Typography style={{ fontFamily: "Segoe" }} variant="h4">
              Unleash Innovation, Transform Tomorrow
            </Typography>
          </div>
          <StaticImage
            style={{ height: "100%" }}
            className="slideImage"
            alt=""
            src="../images/aihack/images/4.jpg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const AiMashup = ({ data }) => {
  const [showPackage, setShowPackage] = useState(false);
  const [scaleStep, setScaleStep] = useState(0.5);
  const swiper = useSwiper();
  const webinars = data.webinars.edges;
  const Main = () => {
    return (
      <div className="main">
        <StaticImage
          className="circlecircuit"
          src="../images/aihack/circlecircuit.png"
          alt=""
        />
        <div className="welcome">
          <div className="main-wel">
            <div className="cont-wel">
              <div className="text-wel">
                <div>
                  <Typography style={{ fontFamily: "Segoe_Bold" }} variant="h3">
                    Sustainable{" "}
                  </Typography>
                  <Typography
                    style={{ fontFamily: "Segoe_Bold" }}
                    variant="h3 "
                    gradient={true}
                  >
                    Artificial Intelligence
                  </Typography>
                  <Typography style={{ fontFamily: "Segoe_Bold" }} variant="h4">
                    themed webinars, hackathon and <br />
                    post-hack incubation
                  </Typography>
                </div>

                <Typography style={{ fontFamily: "Segoe_Bold" }} variant="h6">
                  Unleash Innovation, Transform Tomorrow
                </Typography>
                <div className="buttons">
                  <a
                    // href="https://forms.office.com/r/EQ2urXxqfQ"
                    target="_blank"
                    className="registerbtn"
                  >
                    <Icons.Star className="star1" />
                    <Icons.Star className="star2" />
                    <Icons.Star className="star3" />
                    <Typography variant="button">
                      Registrations Closed
                    </Typography>
                  </a>
                  <a
                    className="partnerbtn"
                    href="https://forms.office.com/r/C7ZN7Zpjqx"
                    target="_blank"
                  >
                    <Typography variant="button">Partner with Us</Typography>
                  </a>
                </div>
              </div>
              <div className="images-wel">
                <StaticImage src="../images/aihack/newlogo.png" alt="" />
                {/* <Logo /> */}
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        <Image
          width={200}
          style={{ display: "none" }}
          src="https://firebasestorage.googleapis.com/v0/b/mlab-22bb9.appspot.com/o/aihack%2FAIpackage.png?alt=media&token=e4975705-8fcf-4bed-b893-f97e19dacbeb"
          preview={{
            visible: showPackage,
            scaleStep,
            src: "https://firebasestorage.googleapis.com/v0/b/mlab-22bb9.appspot.com/o/aihack%2FAIpackage.png?alt=media&token=e4975705-8fcf-4bed-b893-f97e19dacbeb",
            onVisibleChange: (value) => {
              setShowPackage(false);
            },
          }}
        />
        <div className="aiAbout">
          <div className="headerText">
            <Typography style={{ fontFamily: "Segoe" }} variant="h3">
              About AI MashUp
            </Typography>
          </div>
          <AiCard>
            <Typography style={{ fontFamily: "Segoe" }} variant="h6">
              The AI Mashup is more than just an artificial intelligence-themed
              Hackathon. It is a combination of virtual and in person events,
              hosted simultaneously in multiple locations. This year we are
              starting with multiple provincial locations across South Africa
              and have plans to expand into other Sub Saharan African countries
              next year.
            </Typography>
            <Typography style={{ fontFamily: "Segoe" }} variant="h6">
              The AI Mashup offers virtual and in-person activities, skills
              training, and post-event support. Participants are encouraged to
              leverage AI capabilities to create unique solutions for provided
              challenge statements or demonstrate enhanced functionality to
              existing solutions through the use of AI.
            </Typography>
            <Typography style={{ fontFamily: "Segoe" }} variant="h6">
              Partners and participants who dare to approach challenges
              differently are encouraged to register.
            </Typography>
          </AiCard>
          <div className="cardsContainer">
            {/* Cards */}
            <AiCard>
              <Typography variant="h5" style={{ fontFamily: "Segoe_Bold" }}>
                The Mashup
              </Typography>
              <Typography style={{ fontFamily: "Segoe" }} variant="b2">
                The AI Mashup will be hosted under the theme of Sustainable
                Artificial Intelligence.
              </Typography>
              <div>
                <Typography>
                  It will focus on teams that can develop solutions under the
                  following themes, which have been identified as having a
                  significant impact on the social and economic landscape of
                  Africa:
                </Typography>

                <ul>
                  <li>
                    <Typography style={{ fontFamily: "Segoe" }}>
                      Fintech
                    </Typography>
                  </li>
                  <li>
                    <Typography style={{ fontFamily: "Segoe" }}>
                      Healthtech
                    </Typography>
                  </li>
                  <li>
                    <Typography style={{ fontFamily: "Segoe" }}>
                      Edutech
                    </Typography>
                  </li>
                  <li>
                    <Typography style={{ fontFamily: "Segoe" }}>
                      Agritech
                    </Typography>
                  </li>
                </ul>
              </div>
            </AiCard>
            <AiCard>
              <Typography variant="h5" style={{ fontFamily: "Segoe_Bold" }}>
                Apply to participate
              </Typography>
              <Typography style={{ fontFamily: "Segoe" }}>
                Participants get to increase their AI knowledge as well as build
                and showcase an AI solution to industry leaders. In addition,
                winning teams will receive cash prizes as well as post-event
                support opportunities. Participants will also receive:
              </Typography>
              <ul>
                <li>
                  <Typography style={{ fontFamily: "Segoe" }}>
                    Mentors
                  </Typography>
                </li>
                <li>
                  <Typography style={{ fontFamily: "Segoe" }}>
                    Meals &amp; drinks
                  </Typography>
                </li>
                <li>
                  <Typography style={{ fontFamily: "Segoe" }}>
                    Toiletry bags
                  </Typography>
                </li>
                <li>
                  <Typography style={{ fontFamily: "Segoe" }}>
                    Corporate gifts
                  </Typography>
                </li>
              </ul>
            </AiCard>
            <AiCard>
              <Typography variant="h5" style={{ fontFamily: "Segoe_Bold" }}>
                Become a Partner
              </Typography>
              <Typography style={{ fontFamily: "Segoe" }}>
                Register to be part of our partner briefing session - where you
                will find out more about the Partnership Packages and available
                benefits for your organisation. The AI Mashup is a combination
                of specific ecosystem building activities that are designed to
                address local challenges, foster innovation, and nurture local
                talent. Partner with us to:
              </Typography>
              <ul>
                <li>
                  <Typography style={{ fontFamily: "Segoe" }}>
                    Share thought leadership
                  </Typography>
                </li>
                <li>
                  <Typography style={{ fontFamily: "Segoe" }}>
                    Crowdsource solutions &amp; data insights
                  </Typography>
                </li>
                <li>
                  <Typography style={{ fontFamily: "Segoe" }}>
                    Identify tech talent
                  </Typography>
                </li>
                <li>
                  <Typography style={{ fontFamily: "Segoe" }}>
                    Make an impact
                  </Typography>
                </li>
              </ul>
            </AiCard>
          </div>
        </div>
        <StaticImage
          objectFit="contain"
          src="../images/aihack/timeline.png"
          alt=""
        />

        {/* details */}
        <div className="details">
          <div className="details-slides">
            <Slides />
          </div>
          <div className="details-content">
            <AiCard>
              <div className="centerContent">
                <Typography variant="s2" style={{ fontFamily: "Segoe" }}>
                  Countdown to the Event
                </Typography>
                <Countdown
                  style={{ color: "white" }}
                  value={deadline}
                  format=" 📆D ⏳H : m : s"
                />
                <Typography variant="s2" style={{ fontFamily: "Segoe" }}>
                  Starting {deadline.toDateString()}
                </Typography>
                <StaticImage
                  className="coutdownGraphic"
                  src="../images/aihack/coutdowngraphic.png"
                  alt=""
                />
              </div>
            </AiCard>
            <AiCard>
              <div className="centerContent">
                <div>
                  <Typography variant="s1" style={{ fontFamily: "Segoe" }}>
                    2023 Hackathon
                  </Typography>
                  <br />
                  <Typography variant="s2" style={{ fontFamily: "Segoe" }}>
                    👩‍💻Theme
                  </Typography>
                  <Typography variant="h5" style={{ fontFamily: "Segoe" }}>
                    Sustainable AI
                  </Typography>
                  <hr />
                  <Typography variant="s2" style={{ fontFamily: "Segoe" }}>
                    📅Date
                  </Typography>
                  <Typography variant="h5" style={{ fontFamily: "Segoe" }}>
                    03 - 05 Nov
                  </Typography>
                  <hr />
                  <Typography variant="s2" style={{ fontFamily: "Segoe" }}>
                    ⏰Time
                  </Typography>
                  <Typography variant="h6" style={{ fontFamily: "Segoe" }}>
                    {" "}
                    3pm Fri - 3pm Sun{" "}
                  </Typography>
                  <hr />
                  <Typography variant="s2" style={{ fontFamily: "Segoe" }}>
                    📍Locations
                  </Typography>
                  <Typography variant="h6" style={{ fontFamily: "Segoe" }}>
                    Johannesburg, Kimberley, Polokwane, Pietermaritzburg
                  </Typography>
                </div>
              </div>
            </AiCard>
          </div>
        </div>
        {/* Exhisting Partners */}
        <div className="exhisting-partners">
          <Typography style={{ fontFamily: "Segoe_Bold", textAlign: "center" }}>
            Existing Partners
          </Typography>

          <div className="partnerList">
            <div className="partner-logo-cont">
              <StaticImage
                objectFit="contain"
                className="logo"
                src="../images/logo/logo.png"
                alt="partnerLogo"
              />
            </div>

            <div className="partner-logo-cont">
              <StaticImage
                objectFit="contain"
                className="logo"
                src="../images/aihack/partners/microsoft.png"
                alt="partnerLogo"
              />
            </div>

            <div className="partner-logo-cont">
              <StaticImage
                objectFit="contain"
                className="logo"
                src="../images/aihack/partners/aiexpo.png"
                alt="partnerLogo"
              />
            </div>
          </div>
        </div>
        {/* Partner & Participate */}
        <div className="partners_participate">
          {/* Partner */}
          <AiCard>
            <div className="centerContent fillContent">
              <Typography variant="h4" style={{ fontFamily: "Segoe_Bold" }}>
                Register for Partnership Briefing Session
              </Typography>
              <a
                className="partnerbtn"
                href="https://forms.office.com/r/C7ZN7Zpjqx"
                target="_blank"
              >
                <Typography variant="button" style={{ fontFamily: "Segoe" }}>
                  Partner with us
                </Typography>
              </a>
            </div>
            <a
              className="partnershipPackages centerContent"
              href="https://firebasestorage.googleapis.com/v0/b/mlab-22bb9.appspot.com/o/aihack%2FAI%20Mashup%20-%20Partnership%20Packages%20823.pdf?alt=media&token=e0e8f6bb-444d-4947-828e-2a7d2bd1120f"
              target="_blank"
            >
              <Typography variant="h6" style={{ fontFamily: "Segoe_Bold" }}>
                View Partnership Packages
              </Typography>
            </a>
          </AiCard>
          <AiCard>
            <div className="partnerheader">
              <Typography variant="h4" style={{ fontFamily: "Segoe_bold" }}>
                Participate
              </Typography>
            </div>
            <div className="centerContent">
              <StaticImage
                width={500}
                objectFit="contain"
                src="../images/aihack/locationsMap.png"
                alt=""
              />
              <a
                // href="https://forms.office.com/r/EQ2urXxqfQ"
                target="_blank"
                className="registerbtn"
              >
                <Icons.Star className="star1" />
                <Icons.Star className="star2" />
                <Icons.Star className="star3" />
                <Typography variant="button">Registrations Closed</Typography>
              </a>
            </div>
          </AiCard>
          {/* Participate */}
        </div>
        {/* Participate */}

        <div className="deco1">
          <StaticImage
            className="img"
            src="../images/aihack/images/deco1.png"
            alt=""
          />
        </div>

        {/* webinars */}
        <div className="webinars">
          <div className="web-header">
            <Typography variant="h3">Webinars</Typography>
            <Typography variant="b1">
              By registering to participate in the AI Mashup you will be advised
              on Webinar dates and times. Below is a sample of some of the
              sessions that will be held in October 2023. If you are not a
              participant and would like to participate in the webinar series,
              please contact us for assistance.
            </Typography>
          </div>
          <div className="thumbnails">
            {webinars.map((webinar, index) => {
              const { image, link, title } = webinar.node.frontmatter;
              const img = getImage(image);
              console.log(img);
              if (title) {
                return (
                  <AiCard>
                    <GatsbyImage
                      objectFit="contain"
                      // style={{ width: "100%", height: 300 }}
                      image={img}
                      alt={title}
                    />
                  </AiCard>
                );
              }
            })}
          </div>
        </div>
        {/* Brought */}
        <div className="brought">
          <Typography style={{ fontFamily: "Segoe_Bold" }} variant="s2">
            Brought to you by
          </Typography>
          <div className="logos">
            <div className="logo mlab">
              <a
                href="https://mlab.co.za/who-we-are"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <StaticImage src={"../images/logo/mlab.png"} alt="mlab" />
              </a>
            </div>
            <div className="logo mic">
              <StaticImage src="../images/logo/microsoft.png" alt="microsoft" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const imageslides = [1, 2, 3, 4, 5, 6];

  return (
    <Layout>
      <video className="bgVideo" muted autoPlay loop style={{ width: `100%` }}>
        <source src={AIVideo} type="video/mp4" />
      </video>
      <Space direction="horizontal">
        <Space style={{}}>
          <Typography variant="h1">AiMashup Winners</Typography>{" "}
        </Space>
        <Space></Space>
      </Space>
    </Layout>
  );
};

export default AiMashup;
export const query = graphql`
  query AIMashupQuery {
    webinars: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(webinars)/" } }
    ) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100, width: 1920)
              }
            }
            title
            link
          }
        }
      }
    }
  }
`;
