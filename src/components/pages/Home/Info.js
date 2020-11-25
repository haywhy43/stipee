import React, { useEffect, useState } from "react";
import Stones from "../../SVG/stones";
import styled from "styled-components";

const StyledParagraph = styled.p`
  line-height: 30px;

  animation-name: ${props => (props.animate ? "fadeInUp" : "")};
`;

const StyledHeaderText = styled.h2`
  @media (min-width: 641px) {
    font-size: 45px;
  }
`;

export default () => {
  const [intersecting, setIntersecting] = useState(false);

  const observeListeners = () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIntersecting(true);
          }
        });
      },
      {
        threshold: 0.2,
        root: null,
      }
    );

    observer.observe(document.querySelector("#info"));
  };

  useEffect(() => {
    observeListeners();
  });
  return (
    <section id="info">
      <div className="lg:flex px- md:px-8 mx-auto my-20 md:my-24">
        <div className="relative lg:w-1/2">
          <div className="absolute">
            <Stones animate={intersecting} />
          </div>
          <StyledHeaderText className="text-3xl text-font font-medium pt-3 pl-6 md:pl-12 oskari">
            What can Stipee do?
          </StyledHeaderText>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 pl-6 md:pl-12 lg:pl-0">
          <StyledParagraph
            animate={intersecting}
            className="w-11/12 md:w-10/12 md:text-lg text-font-sub animated opacity-0"
          >
            Stipee is an innovative technological product that exposes students
            early to digital finance, instill the savings culture in them, and
            improve the efficiency of schools.
            <br />
            <span className="pt-3">
              STIPEE eliminates the need for students to handle cash at school:
              keeping their money safe yet readily available, & protecting them
              from contracting COVID-19.
            </span>
          </StyledParagraph>
        </div>
      </div>
    </section>
  );
};
