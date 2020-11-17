import React, { useEffect } from "react";
import styled from "styled-components";
import Ellipses from "../../SVG/ellipses";
import UserCentric from "../../SVG/user-centric";

const StyledContainer = styled.div`
  .user-centric {
    transform: translateX(30%);
  }
`;

const StyledEllipseContainer = styled.div`
  width: 850px;
  transform: translateX(-20%);
`;

const StyledHeaderText = styled.h3`
  @media (min-width: 641px) {
    font-size: 44px;
    line-height: 54px;
  }
`;

export default () => {
  const eventListener = () => {
    const doc = document.querySelector("#user-centric");
    const docPos = doc.getBoundingClientRect();

    doc.style.transform = `translateX(${docPos.top / 20}%)`;
  };

  useEffect(() => {
    document.addEventListener("scroll", eventListener);
    return function cleanup() {
      document.removeEventListener("scroll", eventListener);
    };
  });

  return (
    <StyledContainer className="mt-24 md:mb-0 mb-16 relative overflow-x-hidden w-full">
      <div
        className="user-centric hidden md:block absolute top-0 right-0"
        id="user-centric"
      >
        <div className="animated fadeInLeft">
          <UserCentric />
        </div>
      </div>
      <StyledHeaderText className="w-11/12 mx-auto font-medium text-font animated fadeInLeft oskari text-3xl">
        What makes
        <br /> Stipee different?
      </StyledHeaderText>

      <div className="lg:flex items-center -mt-24 overflow-hidden">
        <div className="lg:w-2/5">
          <StyledEllipseContainer>
            <div className="animated rotate ease-in both infinite slowest">
              <Ellipses />
            </div>
          </StyledEllipseContainer>
        </div>
        <div className=" lg:w-3/5">
          <div className="w-11/12 md:w-10/12 xl:w-9/12 md:pr-3 mx-auto">
            <h4 className="text-font text-3xl">Achieve Objectives</h4>
            <p className="text-font-sub text-lg mt-5">
              Stipee Enterprises is a leading provider of technology solutions
              for schools. We use technology to help schools improve their
              efficiency and offer better education
            </p>
            <p className="text-font-sub text-lg mt-3">
              Our dedicated team of educators, product designers, and developers
              have collectively earned over 7 years of experience in building
              EdTech solutions for the Nigerian market. We understand the
              challenges you face in your business and deliver products and
              services to aid you in achieving your objectives.
            </p>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};
