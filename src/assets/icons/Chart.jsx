const Chart = ({ width = 24, height = 25, stroke = 'white', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 10.5L8 16.5"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12.5V16.5"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8.5V16.5"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={3}
      y={4.5}
      width={18}
      height={16}
      rx={2}
      stroke={stroke}
      strokeWidth={2}
    />
  </svg>
);
export default Chart;
