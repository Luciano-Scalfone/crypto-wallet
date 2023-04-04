export interface HeaderCarrouselItemsTypes {
  code: string;
  varBid: number;
  exchange: string;
}

export interface ButtonTypes {
  type: "primary" | "secondary" | 'text-only';
  content: string;
  callback?: () => void;
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

export interface InputTypes<T> {
  type: string;
  placeholder: string;
  callback: (value: T) => void;
  icons?: {
    left?: JSX.Element;
    right?: JSX.Element;
  },
}

export interface UserTypes {
  email: string;
  password: string;
}
