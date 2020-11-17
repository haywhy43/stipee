import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const StyledHeaderText = styled.h4`
  @media (min-width: 641px) {
    font-size: 43px;
  }

  @media (max-width:640px){
    font-size: 28px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.alter ? "row-reverse" : "row")};
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }

  h4,
  .body {
    animation-name: ${props => (props.intersecting ? "fadeInUp" : "")};
  }
`;

export default ({ alternate, children, number, text }) => {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "01.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "02.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "03.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      four: file(relativePath: { eq: "04.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      five: file(relativePath: { eq: "05.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      six: file(relativePath: { eq: "06.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const [intersecting, setIntersecting] = useState(false);

  const observeListener = () => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIntersecting(true);
          }
        });
      },
      { root: null, threshold: 0.3 }
    );

    observer.observe(document.querySelector(`#${number}`));
  };

  useEffect(() => {
    observeListener();
  });

  return (
    <StyledContainer
      alter={alternate}
      id={number}
      className="mt-24 w-11/12 mx-auto"
      intersecting={intersecting}
    >
      <div
        className={`relative md:w-1/2 w-full flex items-start ${
          alternate && text ? "flex-row-reverse mr-16" : "justify-center"
        }`}
      >
        <div className={text ? "" : "flex md:justify-center w-full"}>
          <div
            className={`${
              text === "" || text === undefined
                ? "w-32 md:40 xl:w-48 mx-auto"
                : "w-16 md:w-16 xl:w-24"
            }`}
          >
            <Img fluid={data[number].childImageSharp.fluid} alt={number} />
          </div>
        </div>
        <div
          className={`h-full items-center flex  ${
            text ? "w-full pl-4" : ""
          } z-50`}
        >
          <StyledHeaderText
            className={`text-font font-medium text-3xl animated opacity-0 oskari  ${
              alternate ? "text-right ml-auto mr-4 w-9/12" : "md:w-8/12"
            }`}
          >
            {text}
          </StyledHeaderText>
        </div>
      </div>

      <div className=" mt-10 md:mt-0 md:ml-10 xl:ml-0 md:w-1/2 body animated delay-200ms opacity-0">
        {children}
      </div>
    </StyledContainer>
  );
};
