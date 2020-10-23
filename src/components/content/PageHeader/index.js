import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;

  .background {
    height: 100vh;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 100;
  }

  .slower {
    animation-duration: 10s;
  }

  .green {
    position: absolute;
    top: 0;
    right: 0;
  }

  .orange {
    position: absolute;
    bottom: 0;
    right: 5%;
  }

  .blue {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default function PageHeader({ children }) {
  return (
    <StyledContainer>
      <div className="background">{children}</div>
      <div className="blue animated zoomInOut infinite slower">
        <img
          src={require("../../../images/blue-bg.svg")}
          alt="blue background"
        />
      </div>
      <div className="green animated zoomInOut infinite slower">
        <img
          src={require("../../../images/green-bg.svg")}
          alt="green background"
        />
      </div>
      <div className="orange animated zoomInOut infinite slower">
        <img
          src={require("../../../images/orange-bg.svg")}
          alt="orange background"
        />
      </div>
    </StyledContainer>
  );
}
