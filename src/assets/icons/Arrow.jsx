// eslint-disable-next-line object-curly-newline
const ArrowIcon = ({ width = 13, height = 24, stroke = 'white', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 2.3335L2.17851 11.155C1.52764 11.8059 1.52764 12.8611 2.17851 13.512L11 22.3335"
        stroke={stroke}
        strokeWidth={3.33333}
        strokeLinecap="round"
      />
    </svg>
  );
};
export default ArrowIcon;
