const CreditIcon = ({ width = 17, height = 21, fill = 'white', ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.5 9L6 6.75L7.5 9L6 11.25L4.5 9Z" fill={fill} />
    <g filter="url(#filter0_d_75_7404)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3L10.125 8.9056L6 14.7903L1.875 8.9056L6 3ZM2.77789 8.90483L6 13.5015L9.22211 8.90483L6 4.29186L2.77789 8.90483Z"
        fill="url(#paint0_linear_75_7404)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_75_7404"
        x={-4.125}
        y={-3}
        width={20.25}
        height={23.7905}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_75_7404"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_75_7404"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_75_7404"
        x1={6}
        y1={3}
        x2={6}
        y2={14.7903}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8282" />
        <stop offset={1} stopColor="#F96969" />
      </linearGradient>
    </defs>
  </svg>
);
export default CreditIcon;
