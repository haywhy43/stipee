import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  h3,
  .value {
    animation-name: ${props => (props.intersecting ? "fadeInUp" : "")};
  }
`;

const StyledContainer = styled.div`
  animation-delay: ${props => (props.idx ? `${props.idx * 200}ms` : "")};
`;

const StyledHeaderText = styled.h3`
  @media (min-width: 641px) {
    font-size: 44px;
  }
`;

const values = [
  "We promote honesty, integrity, and openness in all we do.",
  "We are in business to serve and satisfy our customers.",
  "Our products are accessible and meet the needs of our customers.",
  "We encourage innovation to address challenges.",
  "We are leaders in our industry and our communities.",
];

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
      { root: null, threshold: 0.3 }
    );

    observer.observe(document.querySelector("#values"));
  };

  useEffect(() => {
    observeListeners();
  });
  return (
    <StyledSection intersecting={intersecting} className="mt-32 mb-48" id="values">
      <StyledHeaderText className="animated text-center text-3xl oskari font-mrdium text-font opacity-0">
        Our Value Statement
      </StyledHeaderText>

      <div className="mt-6 md:mt-12 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 xl:gap-10">
        {values.map((value, i) => (
          <StyledContainer
            idx={i + 1}
            className="col-span-1 py-6 px-8 border border-snow-300 rounded-lg value opacity-0 animated"
            key={value}
          >
            <p className="text-font-sub text-center">{value}</p>
          </StyledContainer>
        ))}
      </div>
    </StyledSection>
  );
};
