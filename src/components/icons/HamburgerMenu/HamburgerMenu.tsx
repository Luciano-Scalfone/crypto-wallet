import React from "react";
import { SVGIconsSize } from "../../../interfaces/IconsTypes";

const HamburgerMenu: React.FC<SVGIconsSize> = ({ width, height }) => {
  return (
    <svg
      id="hamburger-menu"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.25 12H16.75"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.25 15.25H16.75"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.25 8.75H16.75"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HamburgerMenu;
