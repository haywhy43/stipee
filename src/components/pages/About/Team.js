import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  height: 211px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Orange = styled(Container)`
  background-color: rgba(238, 132, 55, 0.05);
`;

const Blue = styled(Container)`
  background-color: rgba(57, 66, 119, 0.05);
`;

const LightBlue = styled(Container)`
  background-color: rgba(201, 222, 242, 0.3);
`;

const StyledSection = styled.section`
  h3,
  .members {
    animation-name: ${props => (props.intersecting ? "fadeInUp" : "")};
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      kianna: file(relativePath: { eq: "kianna.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      george: file(relativePath: { eq: "george.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      carter: file(relativePath: { eq: "carter.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
      { root: null, threshold: 0.2 }
    );

    observer.observe(document.querySelector("#team"));
  };

  useEffect(() => {
    observeListeners();
  });

  return (
    <StyledSection intersecting={intersecting} id="team">
      <h3 className="animated text-center text-4xl font-semibold text-font opacity-0">
        Meet the team
      </h3>

      <div className="w-10/12 lg:w-8/12 xl:w-6/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
        <div className="col-span-1 animated members opacity-0">
          <Orange className="w-full">
            <div className="w-32">
              <Img
                fluid={data.kianna.childImageSharp.fluid}
                alt="kianna's image"
              />
            </div>
          </Orange>
          <div className="text-center mt-3">
            <p className="text-font font-semibold text-sm">Kianna Philips</p>
            <p className="text-font-sub mt-1 text-sm">
              Senior software developer
            </p>
          </div>
        </div>
        <div className="col-span-1 animated members opacity-0 delay-200ms">
          <Blue className="w-full">
            <div className="w-32">
              <Img
                fluid={data.george.childImageSharp.fluid}
                alt="george's image"
              />
            </div>
          </Blue>
          <div className="text-center mt-3">
            <p className="text-font font-semibold text-sm">Martin George</p>
            <p className="text-font-sub mt-1 text-sm">
              User experience designer
            </p>
          </div>
        </div>

        <div className="col-span-1 animated members opacity-0 delay-500ms">
          <LightBlue className="w-full">
            <div className="w-40">
              <Img
                fluid={data.carter.childImageSharp.fluid}
                alt="george's image"
              />
            </div>
          </LightBlue>
          <div className="text-center mt-3 delay-700ms">
            <p className="text-font font-semibold text-sm">Carter Stanton</p>
            <p className="text-font-sub mt-1 text-sm">Senior product manager</p>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};
