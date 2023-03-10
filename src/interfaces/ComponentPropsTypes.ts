export interface HeaderCarrouselItemsTypes {
  code: string;
  varBid: number;
  exchange: string;
}

export interface ButtonTypes {
  type: "primary" | "secondary";
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
