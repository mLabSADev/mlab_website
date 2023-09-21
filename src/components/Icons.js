import React from "react";
export const Icons = {
  Link: (props) => (
    <svg
      {...props}
      fill="#fff"
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.21 1.5H10v1.25h3.08L7.9 7.21l.82 1 5.53-4.77V7h1.25V2.79a1.29 1.29 0 0 0-1.29-1.29z" />
      <path d="M12.25 13.25H1.75v-8.5H7.5V3.5h-6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h-1.25z" />
    </svg>
  ),
  Star: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="53"
      viewBox="0 0 54 53"
      fill="none"
    >
      <g filter="url(#filter0_f_198_2813)">
        <path
          d="M17.0311 37.234L20.6212 35.1178C22.6794 33.9036 25.1309 33.3355 27.7136 33.4743C30.2963 33.6131 32.9131 34.4535 35.2841 35.9057L39.4194 38.4371L36.6484 34.4376C35.0587 32.1446 34.0585 29.5647 33.7546 26.9738C33.4506 24.3828 33.8544 21.8784 34.9228 19.7282L36.7846 15.9777L33.1945 18.0939C31.1369 19.308 28.6861 19.8763 26.1041 19.7381C23.522 19.5999 20.9058 18.7603 18.535 17.3092L14.3964 14.7747L17.1707 18.7773C18.7593 21.0701 19.7586 23.6496 20.062 26.2399C20.3653 28.8302 19.9613 31.3339 18.893 33.4835L17.0311 37.234Z"
          fill="url(#paint0_linear_198_2813)"
        />
      </g>
      <path
        d="M23.2046 30.5912L24.5452 29.7923C25.3138 29.3339 26.2263 29.1144 27.1853 29.1575C28.1444 29.2006 29.1138 29.5045 29.9898 30.0367L31.5179 30.9645L30.5014 29.4862C29.9184 28.6387 29.5552 27.6824 29.4507 26.7198C29.3462 25.7572 29.5044 24.8244 29.9083 24.0211L30.6121 22.6201L29.2715 23.4191C28.5032 23.8775 27.5909 24.0969 26.6321 24.0541C25.6733 24.0112 24.7042 23.7076 23.8281 23.1757L22.2988 22.2468L23.3165 23.7263C23.8992 24.5738 24.2621 25.5298 24.3663 26.4922C24.4706 27.4546 24.3123 28.3872 23.9085 29.1901L23.2046 30.5912Z"
        fill="#E3FFFF"
      />
      <defs>
        <filter
          id="filter0_f_198_2813"
          x="0.396362"
          y="0.774658"
          width="53.0231"
          height="51.6624"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7"
            result="effect1_foregroundBlur_198_2813"
          />
        </filter>
        <linearGradient
          id="paint0_linear_198_2813"
          x1="39.0899"
          y1="31.9816"
          x2="24.6633"
          y2="18.3272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2835FF" />
          <stop offset="1" stop-color="#B793FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  ArrowDown: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
  ),
};
