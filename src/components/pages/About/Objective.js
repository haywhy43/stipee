import React from "react";
import styled from "styled-components";
import Ellipses from "../../SVG/ellipses";
import UserCentric from "../../SVG/user-centric";

const StyledContainer = styled.div`
  h3 {
    font-size: 36px;

    @media (max-width: 640px) {
      font-size: 28px;
    }
  }

  .user-centric {
    position: absolute;
    top: 0;
    right: 0%;
  }
`;

export default () => {
  return (
    <StyledContainer className="my-24 relative overflow-x-hidden w-full">
      <div className="user-centric animated fadeInRight hidden md:block">
        <UserCentric />
      </div>
      <h3 className="w-11/12 mx-auto font-semibold text-font animated fadeInLeft">
        What makes
        <br /> Stipee different?
      </h3>

      <div className="lg:flex items-center mt-10">
        <div className="lg:w-2/5 overflow-hidden">
          <Ellipses />
        </div>
        <div className="mt-6 lg:mt-0 lg:w-3/5">
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
