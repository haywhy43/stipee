import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;

  .background {
    background: rgba(239, 245, 251, 0.3);
    position: relative;
  }

  .slower {
    animation-duration: 10s;
  }
`;

export default function PageHeader({ children, alternate }) {
  return (
    <StyledContainer alternate={alternate}>
      <div className="background">{children}</div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          width="1440"
          height="600"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.45" width="1440" height="600" fill="#EFF5FB" />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="600"
          >
            <rect width="1440" height="600" fill="#EFF5FB" />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M80.5004 727.5C80.7726 528.083 243.856 366.5 445 366.5C646.144 366.5 809.227 528.083 809.5 727.5L80.5004 727.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M94.6162 720.5C94.8884 528.815 251.652 373.5 445 373.5C638.347 373.5 795.111 528.815 795.383 720.5L94.6162 720.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M109.741 713.5C110.012 529.545 260.006 380.5 445 380.5C629.994 380.5 779.988 529.545 780.259 713.5L109.741 713.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M123.857 705.5C124.13 530.385 267.8 388.5 445 388.5C622.199 388.5 765.87 530.385 766.143 705.5L123.857 705.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M138.981 698.5C139.253 531.115 276.155 395.5 445 395.5C613.846 395.5 750.747 531.115 751.019 698.5L138.981 698.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M153.097 691.5C153.369 531.847 283.95 402.5 445 402.5C606.05 402.5 736.631 531.847 736.903 691.5L153.097 691.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M168.222 684.5C168.493 532.578 292.305 409.5 445 409.5C597.696 409.5 721.508 532.578 721.779 684.5L168.222 684.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M182.338 676.5C182.611 533.418 300.098 417.5 445 417.5C589.902 417.5 707.389 533.418 707.663 676.5L182.338 676.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M197.462 669.5C197.734 534.148 308.453 424.5 445 424.5C581.548 424.5 692.266 534.148 692.539 669.5L197.462 669.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M211.578 662.5C211.85 534.88 316.249 431.5 445 431.5C573.752 431.5 678.15 534.88 678.422 662.5L211.578 662.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M226.703 655.5C226.973 535.61 324.603 438.5 445 438.5C565.398 438.5 663.027 535.61 663.298 655.5L226.703 655.5Z"
              stroke="#CAE4FF"
            />
            <path
              d="M226.703 655.5C226.973 535.61 324.603 438.5 445 438.5C565.398 438.5 663.027 535.61 663.298 655.5L226.703 655.5Z"
              fill="#EFF5FB"
              stroke="#CAE4FF"
            />
          </g>
        </svg>
      </div>
    </StyledContainer>
  );
}
