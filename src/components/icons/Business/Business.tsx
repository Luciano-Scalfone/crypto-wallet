import React from "react";
import { SVGIconsSize } from "../../../interfaces/IconsTypes";

const Business = ({ width, height }: SVGIconsSize): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0.5C2.82843 0.5 3.5 1.17157 3.5 2V44.6667C3.5 46.7849 5.21509 48.5 7.33333 48.5H50C50.8284 48.5 51.5 49.1716 51.5 50C51.5 50.8284 50.8284 51.5 50 51.5H7.33333C3.55824 51.5 0.5 48.4418 0.5 44.6667V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
        fill="#FBAB34"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.9602 8.84763C51.5967 9.37796 51.6827 10.3238 51.1524 10.9602L38.891 25.6749C37.8665 26.9036 36.2322 27.4372 34.6798 27.0501L34.6786 27.0498L27.2602 25.1939C26.8265 25.0855 26.3677 25.2346 26.0803 25.579V25.579L13.819 40.2936C13.2887 40.93 12.3429 41.016 11.7064 40.4857C11.07 39.9554 10.984 39.0095 11.5143 38.3731L23.7756 23.6584C24.8003 22.4297 26.4376 21.8959 27.9878 22.2835L35.4056 24.1392V24.1392C35.8423 24.248 36.299 24.0987 36.5864 23.7544V23.7544L48.8476 9.03976C49.378 8.40333 50.3238 8.31731 50.9602 8.84763Z"
        fill="#FBAB34"
      />
    </svg>
  );
};

export default Business;
