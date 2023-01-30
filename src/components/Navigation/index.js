import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "gatsby";
import Typography from "../Typography/Typography";
import { graphql, StaticQuery } from "gatsby";

export const Item = ({ label, url }) => {
  return (
    <Link
      to={url === "undefined" ? "" : url}
      activeClassName="active"
      className="item"
    >
      <Typography color="light" variant="overline">
        {label}
      </Typography>
      <div className="line"></div>
    </Link>
  );
};
const MenuToggle = (props) => {
  return (
    <div {...props} className="menuToggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Menu</title>
        <path
          fill="white"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="48"
          d="M88 152h336M88 256h336M88 360h336"
        />
      </svg>
    </div>
  );
};
const Dropdown = ({ label, items, url }) => {
  return (
    <div className="dropdown">
      <Link className="dropdown--label" activeClassName="active" to={url}>
        <Typography variant="overline">{label}</Typography>
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="dropdown-icon"
        viewBox="0 0 512 512"
      >
        <title>Caret Down</title>
        <path
          fill="#fff"
          d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
        />
      </svg>
      <div className="dropdown--items">
        {items.map((item, i) => {
          return <Item key={i} label={item.label} url={item.url}></Item>;
        })}
      </div>
    </div>
  );
};
const MobileDropdown = ({ label, items, open, onClick }) => {
  return (
    <div className="m-dropdown">
      <button onClick={onClick} className="m-label">
        <Typography variant="overline">{label}</Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`dropdown-icon  ${open ? "rotate-icon" : null}`}
          viewBox="0 0 512 512"
        >
          <title>Caret Down</title>
          <path
            fill="#fff"
            d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"
          />
        </svg>
      </button>
      <div className={`links ${open ? "l-open" : "l-close"}`}>
        {items.map((item, i) => {
          return <Item key={i} label={item.label} url={item.url}></Item>;
        })}
      </div>
    </div>
  );
};
export const links = [
  {
    label: "Home",
    url: "/",
    items: [],
  },
  {
    label: "Who we are",
    url: "/who-we-are",
    items: [],
  },
  {
    label: "What we do",
    url: "/what-we-do",
    items: [
      { label: "Tech Ecosystems", url: "/what-we-do/Tech-Ecosystems" },
      { label: "Tech Skills", url: "/what-we-do/Tech-Skills" },
      { label: "Tech Start-ups", url: "/what-we-do/Tech-Start-Ups" },
      { label: "Tech Solutions", url: "/what-we-do/Tech-Solutions" },
    ],
  },
  {
    label: "Partners",
    url: "/partners",
    items: [],
  },
  {
    label: "News",
    url: "/news",
    items: [],
  },
  {
    label: "Resources",
    url: "/resources",
    items: [],
  },
  {
    label: "Contact Us",
    url: "/contact",
    items: [],
  },
];
const Navigation = ({ title, route }) => {
  const [dropdownItems, setDropdownItems] = useState([]);
  const [menu, setMenu] = useState(false);
  const [openDropdown, setDropdown] = useState("");
  const [pillers, setPillers] = useState([]);
  const logoColors = {
    m: "#8cc051",
    lab: "#fefefe",
  };
  return (
    // Main
    <div className="navigation---">
      <div className="linksWrapper">
        {/* Logo */}
        <Link className="logo-n-w" to="/">
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
        </Link>

        {/* web links */}

        <div className="links---">
          {links.map((item, i) => {
            if (item.items.length === 0) {
              return <Item key={i} label={item.label} url={item.url}></Item>;
            } else {
              return (
                <Dropdown
                  url={item.url}
                  key={i}
                  label={item.label}
                  items={item.items}
                ></Dropdown>
              );
            }
          })}
          <a
            href="https://codetribe.mlab.co.za/"
            target="_blank"
            rel="noreferrer"
            className="codetribe-link"
          >
            <Typography variant="s2" color="light">
              codetribe
            </Typography>
          </a>
        </div>
        <MenuToggle
          onClick={() => {
            setMenu(!menu);
          }}
        />
      </div>
      {/* mobile menu */}
      <div className={`expandingMenu ${menu ? "ex-open" : "ex-close"}`}>
        {links.map((item, i) => {
          if (item.items.length === 0) {
            return <Item key={i} label={item.label} url={item.url}></Item>;
          } else {
            return (
              <MobileDropdown
                onClick={() => {
                  if (openDropdown === item.label) {
                    setDropdown("");
                  } else {
                    setDropdown(item.label);
                  }
                }}
                open={openDropdown === item.label ? true : false}
                key={i}
                label={item.label}
                items={item.items}
              ></MobileDropdown>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Navigation;
