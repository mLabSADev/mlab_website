import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, navigate } from "gatsby";
import { graphql, StaticQuery } from "gatsby";
import { Icons } from "../Icons";
// import Typography from "../Typography/Typography";
import {
  AppBar,
  Box,
  IconButton,
  ListItemButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import MUIProvider, { ANTDTheme } from "../ThemeProvider";
import {
  CloseRounded,
  DashboardOutlined,
  DragHandleRounded,
  HomeRounded,
  MailOutlined,
  OpenInNew,
  OpenInNewRounded,
  SettingsOutlined,
} from "@mui/icons-material";
import { Button, ConfigProvider, Drawer, Menu, Skeleton } from "antd";
const slugify = require("slugify");
//  - { label: "Author", name: "author", widget: "string" }
const GeneratePath = (path) => {
  const link = slugify(path, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
  return link;
};

const AIHack = () => {
  return <></>;
  return (
    <Link
      href="https://codetribe.mlab.co.za/"
      target="_blank"
      rel="noreferrer"
      to="/aimashup"
      className="aihack"
    >
      <Typography
        style={{
          fontFamily: "Segoe_Bold",
          textTransform: "capitalize",
          color: "white",
        }}
        variant="s2"
        color="white"
      >
        AI Mashup
      </Typography>
      <div class="system">
        <div class="system__orbit system__orbit--sun">
          <img
            src="https://www.dropbox.com/s/g02pto204mz1ywi/sun.png?raw=1"
            alt="Sun"
            class="system__icon system__icon--sun"
          />
        </div>

        <div class="system__orbit system__orbit--mercury">
          <div class="system__planet system__planet--mercury">
            <img
              src="https://www.dropbox.com/s/2o38602cmwhhdi1/mercury.png?raw=1"
              alt="Mercury"
            />
          </div>
        </div>
        <div class="system__orbit system__orbit--venus">
          <div class="system__planet system__planet--venus">
            <img
              src="https://www.dropbox.com/s/wvictuysutiirho/venus.png?raw=1"
              alt="Venus"
            />
          </div>
        </div>
        <div class="system__orbit system__orbit--earth">
          <div class="system__planet system__planet--earth">
            <img
              src="https://www.dropbox.com/s/ropzlyhb1v19l5t/earth.png?raw=1"
              alt="Earth"
            />
          </div>
        </div>
        <div class="system__orbit system__orbit--mars">
          <div class="system__planet system__planet--mars">
            <img
              src="https://www.dropbox.com/s/fa9biyj617n1q30/mars.png?raw=1"
              alt="Mars"
            />
          </div>
        </div>
        <div class="system__orbit system__orbit--jupiter">
          <div class="system__planet system__planet--jupiter">
            <img
              src="https://www.dropbox.com/s/d28oxi2c74zcoqk/jupiter.png?raw=1"
              alt="Jupiter"
            />
          </div>
        </div>
        <div class="system__orbit system__orbit--saturn">
          <div class="system__planet system__planet--saturn">
            <img
              src="https://www.dropbox.com/s/h8pj72v6mmaa0yq/saturn.png?raw=1"
              alt="Saturn"
            />
          </div>
        </div>
        <div class="system__orbit system__orbit--uranus">
          <div class="system__planet system__planet--uranus">
            <img
              src="https://www.dropbox.com/s/du6znsmfos2r4ry/uranus.png?raw=1"
              alt="Uranus"
            />
          </div>
        </div>
        <div class="system__orbit system__orbit--neptune">
          <div class="system__planet system__planet--neptune">
            <img
              src="https://www.dropbox.com/s/170sr7xl6gxpona/neptune.png?raw=1"
              alt="Neptune"
            />
          </div>
        </div>
        <div class="system__orbit system__orbit--pluto">
          <div class="system__planet system__planet--pluto">
            <img
              src="https://www.dropbox.com/s/z7axkafhs887t9b/pluto.png?raw=1"
              alt="Pluto"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
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
      <Icons.ArrowDown className="ionicon" />
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
    key: "home",
    label: "Home",
    url: "/",
    items: [],
  },
  {
    key: "who-we-are",
    label: "Who we are",
    url: "/who-we-are",
    items: [],
  },
  {
    key: "what-we-do",
    label: "What we do",
    url: "/what-we-do",
    children: [
      {
        key: "what-we-do",
        label: "What we do",
        url: "/what-we-do/tech-ecosystems",
      },
      {
        type: "group",
        label: "mLab Pillers",
        onTitleClick: (e) => {
          console.log(e);
        },
        children: [
          {
            key: "tech-ecosystems",
            label: "Tech Ecosystems",
            url: "/what-we-do/tech-ecosystems",
          },
          {
            key: "tech-skills",
            label: "Tech Skills",
            url: "/what-we-do/tech-skills",
          },
          {
            key: "tech-start-ups",
            label: "Tech Start-ups",
            url: "/what-we-do/tech-start-ups",
          },
          {
            key: "tech-solutions",
            label: "Tech Solutions",
            url: "/what-we-do/tech-solutions",
          },
        ],
      },
    ],
  },
  {
    key: "partners",
    label: "Partners",
    url: "/partners",
    items: [],
  },
  {
    key: "news",
    label: "News",
    url: "/news",
    items: [],
  },
  {
    key: "resources",
    label: "Resources",
    url: "/resources",
    items: [],
  },
  {
    key: "contact",
    label: "Contact Us",
    url: "/contact",
    items: [],
  },
];
const CodeTribeLink = () => {
  return (
    <ConfigProvider theme={ANTDTheme}>
      <Button type="primary">CodeTribe</Button>
    </ConfigProvider>
  );
  return (
    <a
      href="https://codetribelanding.netlify.app/"
      target="_blank"
      rel="noreferrer"
      className="codetribe-link"
    >
      <Typography variant="s2" color="light">
        codetribe&nbsp;&nbsp;
        <Icons.Link />
      </Typography>
    </a>
  );
};
const Navigation = ({ title, route }) => {
  const [dropdownItems, setDropdownItems] = useState([]);
  const [menu, setMenu] = useState(false);
  const [openDropdown, setDropdown] = useState("");
  const [pillers, setPillers] = useState([]);
  const [current, setCurrent] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openTribe, setOpenTribe] = useState(false);
  const [loadedCtImage, setLoadedCtImage] = useState(false);
  const MUITheme = useTheme();
  const logoColors = {
    m: "#8cc051",
    lab: "#073f4e",
  };
  const onClick = (e) => {
    const { key, keyPath } = e;
    if (keyPath.length > 1) {
      setCurrent(keyPath[1]);
      if (keyPath[1] === "what-we-do") {
        navigate(`/${keyPath[1]}`);
      } else {
        navigate(`/${keyPath[1]}/${keyPath[0]}`);
      }
    } else {
      if (key === "home") {
        navigate(`/`);
      } else if (key === "codetribe") {
      } else {
        setCurrent(key);
        navigate(`/${key}`);
      }
    }
  };
  const pageLinks = [
    ...links,
    {
      key: "codetribe",
      label: (
        <Stack
          px={1}
          className="button-86"
          bgcolor={colors.grey[100]}
          borderRadius={2}
        >
          <a href="https://codetribelanding.netlify.app/" target="_blank">
            <Button
              onMouseEnter={() => {
                setOpenTribe(true);
              }}
              onMouseLeave={() => {
                // setOpenTribe(false);
              }}
              style={{ width: "100%" }}
              type="primary"
            >
              CodeTribe
            </Button>
          </a>
        </Stack>
      ),
    },
  ];
  useEffect(() => {
    setCurrent(route);
  }, []);
  return (
    <MUIProvider>
      <AppBar variant="outlined" sx={{ background: "white" }}>
        <Drawer
          anchor="right"
          open={openTribe}
          onClose={() => setOpenTribe(false)}
        >
          <Stack spacing={5}>
            {!loadedCtImage && (
              <Skeleton.Image
                active={true}
                style={{ height: 270, width: "100%" }}
              />
            )}

            <img
              onLoad={() => {
                setLoadedCtImage(true);
              }}
              src="https://codetribelanding.netlify.app/static/32e04a5069a842ec53dbb79fbede4e9d/a02f6/login-illustration.webp"
            />
            <Typography variant="h4">
              Learn how to build Android & iOS Apps
            </Typography>
            <Typography variant="h6">
              We have an amazing team that is willing to train, guide and mentor
              you on your journey.
            </Typography>
            <Typography>
              CodeTribe is a dedicated programme for developing the next
              generation of software developers. While established startups are
              welcome to have members participate in their own time and at own
              expense, they do not qualify for bursaries as full time students.
              Startups and their staff or members are advised to apply for
              incubation and acceleration support through Maxum Business
              Incubator and mLab.
            </Typography>
          </Stack>
        </Drawer>
        <Toolbar>
          <Box sx={{ height: 40 }}>
            <Link to="/">
              <svg
                style={{ height: 30 }}
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
          </Box>
          <Stack flex={1} alignItems={"center"}></Stack>
          <Stack
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <ConfigProvider theme={ANTDTheme}>
              <Menu
                disabledOverflow={true}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={pageLinks}
              />
            </ConfigProvider>
          </Stack>
          <Stack
            sx={{
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
            }}
          >
            <Drawer
              open={openDrawer}
              onClose={() => {
                setOpenDrawer(false);
              }}
            >
              <Stack flex={1}>
                <Stack flex={1}>
                  <ConfigProvider theme={ANTDTheme}>
                    <Menu
                      mode="inline"
                      disabledOverflow={true}
                      onClick={onClick}
                      selectedKeys={[current]}
                      items={pageLinks}
                    />
                  </ConfigProvider>
                </Stack>
              </Stack>
            </Drawer>
            <IconButton
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
            >
              {openDrawer ? <CloseRounded /> : <DragHandleRounded />}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </MUIProvider>
  );
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
          <AIHack />
          <CodeTribeLink />
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
        <AIHack />
        <CodeTribeLink />
      </div>
    </div>
  );
};

export default Navigation;
