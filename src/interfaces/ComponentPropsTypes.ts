import { SetStateAction } from "react";

export interface HeaderCarrouselItemsTypes {
  code: string;
  varBid: number;
  exchange: string;
}

export interface ButtonTypes {
  type: "primary" | "secondary" | 'text-only';
  content: string;
  callback: () => any;
  size?: {
    width?: string;
    height?: string;
  };
  disabled?: boolean;
  icon?: JSX.Element;
}

export interface CardItemTypes {
  icon: JSX.Element;
  label: string;
  title: string;
  content: string;
  index: number;
}

export interface InputTypes {
  type: string;
  placeholder: string;
  callback?: SetStateAction<any>;
  icons?: {
    left?: JSX.Element;
    right?: JSX.Element;
  },
}
