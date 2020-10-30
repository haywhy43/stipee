import React from "react";
import PageHeader from "../../content/PageHeader";
import styled from "styled-components";

const StyledHeaderText = styled.h1`
  @media (min-width: 641px) {
    font-size: 44px;
  }
`;

export default () => {
  return (
    <PageHeader alternate>
      <div className="h-48 w-full"></div>
      <div className="w-11/12 mx-auto">
        <StyledHeaderText className="text-font font-medium text-3xl animated fadeInUp oskari">
          What we about
        </StyledHeaderText>
        <h2 className="text-font md:text-lg w-11/12 md:w-4/5 lg:w-1/2 mt-4 animated fadeInUp delay-200ms">
          Stipee Enterprises is a company pioneering the use of mobile
          technology to enable parents to fund, control, and protect their kid's
          school stipends. Our mission is to power all financial transactions in
          schools.
        </h2>
      </div>
      <div className="h-32 w-full"></div>
    </PageHeader>
  );
};
