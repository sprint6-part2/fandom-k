const Plus = ({ width = 24, height = 24, stroke = 'white', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 5V19" stroke="white" strokeWidth={2} strokeLinecap="round" />
    <path
      d="M19 12L5 12"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
export default Plus;
