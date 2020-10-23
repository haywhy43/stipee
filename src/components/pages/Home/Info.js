import React, { useEffect, useState } from "react";
import Stones from "../../SVG/stones";
import styled from "styled-components";

const StyledParagraph = styled.p`
  line-height: 30px;

  animation-name: ${props => (props.animate ? "fadeInUp" : "")};
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
          <h2 className="text-3xl md:text-4xl text-font font-semibold pt-3 pl-6 md:pl-12">
            What can Stipee do?
          </h2>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 pl-6 md:pl-12 lg:pl-0">
          <StyledParagraph
            animate={intersecting}
            className="w-11/12 md:w-10/12 md:text-lg text-font-sub animated opacity-0"
          >
            Tempus ornare odio id pharetra, venenatis, sit quis in. Dui congue
            fermentum duis nascetur maecenas faucibus diam. Nulla mattis nulla
            accumsan libero. Adipiscing et faucibus in sit. Pretium, faucibus
            massa ligula est sit orci placerat. Sagittis sit hendrerit nunc id
            augue velit.
            <br />
            STIPEE eliminates the need for students to handle cash at school:
            keeping their money safe yet readily available, & protecting them
            from contracting COVID-19.
          </StyledParagraph>
        </div>
      </div>
    </section>
  );
};
