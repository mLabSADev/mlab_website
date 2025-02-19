import React from "react";
import Typography from "../Typography/Typography";
import { graphql, Link, useStaticQuery } from "gatsby";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Item, links } from "../Navigation";
const Logo = () => {
  const logoColors = {
    m: "#8cc051",
    lab: "#fefefe",
  };
  return (
    <svg
      className="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4291.96 1503.06"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill={logoColors.m}
            className="cls-1"
            d="M1202.45,1483.66V833q0-204.59-183.28-204.61-54.31,0-104.73,32t-70.79,73.7v749.59H601.22V795.17q0-76.6-47.51-121.7t-133.82-45.1q-45.6,0-99.4,33.94T242.43,737v746.68H0V445.1H166.79l49.46,91.15Q317.1,425.7,477.1,425.7q206.55,0,311.28,112.49,45.57-51.39,127-81.94t162.91-30.55q173.58,0,270.07,99.4t96.48,273v685.59Z"
          />
          <path
            fill={logoColors.lab}
            className="cls-2"
            d="M1748.39,58.18,1990.82,0V1167.54q0,192,114.43,228.85-56.25,106.68-192,106.67-164.87,0-164.86-228.85Z"
          />
          <path
            fill={logoColors.lab}
            className="cls-2"
            d="M2870.35,1379.9q-33,54.33-114.91,88.73a437.77,437.77,0,0,1-171.15,34.43q-167.77,0-263.77-83.89t-96-238.06q0-180.36,135.27-282.18T2744.29,797.1q42.66,0,100.85,14.55,0-183.27-231.76-183.28-136.74,0-228.86,45.58l-52.36-188.13q125.1-60.1,297.71-60.12,237.57,0,348.12,108.13t110.55,409.7v222.06q0,207.53,83.39,260.86-30.06,52.36-66.91,64.49t-84.36,12.12q-52.36,0-94.06-38.79T2870.35,1379.9Zm-23.27-385Q2785,982.33,2754,982.32q-287.05,0-287,188.13,0,139.62,161.94,139.63,218.19,0,218.19-218.18Z"
          />
          <path
            fill={logoColors.lab}
            className="cls-2"
            d="M3522,1426.45l-54.3,76.61H3331V58.18L3573.39,0V484.86q97-59.14,211.4-59.16,227.88,0,367.52,144t139.65,369q0,260.86-140.61,412.62t-381.1,151.76Q3625.74,1503.06,3522,1426.45Zm51.39-734.08v542.08q53.33,63,144.5,63,175.49,0,248.72-83.4t73.21-266.67q0-316.12-302.55-316.13Q3629.65,631.28,3573.39,692.37Z"
          />
        </g>
      </g>
    </svg>
  );
};
const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          facebook
          instagram
          linkedin
          twitter
          youtube
        }
      }
    }
  `);
  const { facebook, linkedin, twitter, youtube, description } =
    data.site.siteMetadata;
  return (
    <div className="footer-f">
      <div className="sections-f">
        <div className="logo-w">
          <Logo />
          <br />
          <br />
          <Typography color="light" variant="b2">
            {description}
          </Typography>
          <div className="links-f">
            <a className="social-link" href={`${youtube}`} target="_blank">
              <FontAwesomeIcon
                alt="Our Youtube"
                icon={faYoutube}
              ></FontAwesomeIcon>
            </a>
            <a className="social-link" href={`${linkedin}`} target="_blank">
              <FontAwesomeIcon
                alt="Our Linkedin"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>

            <a className="social-link" href={`${facebook}`} target="_blank">
              <FontAwesomeIcon
                alt="Our Facebook"
                icon={faFacebook}
              ></FontAwesomeIcon>
            </a>

            <a className="social-link" href={`${twitter}`} target="_blank">
              <FontAwesomeIcon
                alt="Our Twitter"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="links-w">
          <Typography variant="s1" color="light">
            Explore
          </Typography>
          <br />
          {links.map((item, i) => {
            if (item.url) {
              return <Item key={i} label={item.label} url={item.url} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className="address-w">
          <Typography variant="s1" color="light">
            Contact us
          </Typography>
          <br />
          <Typography color="light" variant="h5">
            The Innovation Hub, Enterprise Building, 8, Pretoria, 0020
            <iframe
              title="google-map"
              className="map-f"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14374.649209465259!2d28.2671317!3d-25.7486789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb180e978338dcefd!2smLab%20Southern%20Africa!5e0!3m2!1sen!2sza!4v1658504510523!5m2!1sen!2sza"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
