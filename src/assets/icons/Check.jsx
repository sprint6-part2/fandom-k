const CheckIcon = ({ width = 36, height = 27, fill = 'white', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5153 1.49231C35.3204 2.28195 35.333 3.57475 34.5433 4.37987L13.7159 25.6157C13.3343 26.0047 12.813 26.2251 12.268 26.2278C11.7231 26.2304 11.1997 26.0151 10.8143 25.6297L0.604774 15.4202C-0.192639 14.6228 -0.192639 13.33 0.604774 12.5325C1.40219 11.7351 2.69505 11.7351 3.49246 12.5325L12.244 21.2841L31.6278 1.52035C32.4174 0.715232 33.7102 0.70268 34.5153 1.49231Z"
        fill={fill}
      />
    </svg>
  );
};
export default CheckIcon;
