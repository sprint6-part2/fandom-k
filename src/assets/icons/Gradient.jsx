import * as React from 'react';
const Gradient = ({ width = 225, height = 364, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 225 364"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.2} filter="url(#filter0_f_53_9901)">
      <path
        d="M84.899 45.8931C82.683 -28.1392 4.57085 -48.2158 -34.2082 -49C-66.1285 -44.2946 -126.328 -0.220261 -111.766 138.433C-97.2045 277.087 -8.09171 216.596 34.6444 169.019C52.3193 158.824 87.1149 119.925 84.899 45.8931Z"
        fill="#14C3FE"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_53_9901"
        x={-254}
        y={-189}
        width={479}
        height={553}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={70}
          result="effect1_foregroundBlur_53_9901"
        />
      </filter>
    </defs>
  </svg>
);
export default Gradient;
