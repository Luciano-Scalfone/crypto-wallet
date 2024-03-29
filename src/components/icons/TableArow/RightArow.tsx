import { SVGIconsSize } from "../../../interfaces/IconsTypes";

const TableArow: React.FC<SVGIconsSize> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height || 'auto'}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.63 9.29385C15.1367 9.79088 14.3369 9.79088 13.8437 9.29385L8 3.40593L2.15635 9.29385C1.66305 9.79088 0.863264 9.79089 0.369972 9.29385C-0.123322 8.79682 -0.123322 7.99098 0.369972 7.49395L7.10681 0.706066C7.60011 0.209035 8.39989 0.209035 8.89319 0.706066L15.63 7.49394C16.1233 7.99098 16.1233 8.79682 15.63 9.29385Z"
        fill="#FFCD82"
      />
    </svg>
  );
};

export default TableArow;
