import React from "react";
import styled from "styled-components";
import Cross from "../../SVG/cross";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Button from "../../UI/button";

const StyledContainer = styled.div`
  height: 320px;

  .cross-container {
    position: absolute;
    right: 5%;
    top: -35%;

    @media(max-width: 640px){
      top: -60%;
    }
  }
`;

const StyledCard = styled.div`
  background: #ffffff;
  border: 1px solid #dddde3;
  box-shadow: 0px 20px 30px 5px rgba(0, 0, 0, 0.03);
  border-radius: 10px;

  p {
    line-height: 30px;

    @media (max-width: 640px) {
      line-height: 26px;
    }
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      teacher: file(relativePath: { eq: "teacher.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      man: file(relativePath: { eq: "man.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      <StyledContainer className="mt-20 bg-snow-100 relative">
        <div className="cross-container ">
          <Cross />
        </div>
        <div className="w-11/12 mx-auto py-10 px-2 md:px-4 z-50">
          <h3 className="text-font font-semibold text-3xl md:text-4xl">
            See what’s next with Stipee
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mt-6">
            <StyledCard className="py-6 px-8 col-span-1">
              <div className="bg-snow-200 h-16 w-16 rounded-full flex items-center justify-center">
                <div className="w-8">
                  <Img
                    fluid={data.teacher.childImageSharp.fluid}
                    alt={"teacher"}
                  />
                </div>
              </div>
              <p className="text-base text-font-sub mt-3">
                A school owner, a principal, or a teacher? and you want the
                Stipee solution implemented in your school, please drop us a
                message. We'd love to welcome you onboard!
              </p>
              <div className="mt-5">
                <Button
                  backgroundColor="#F4F4F6"
                  borderColor="#DDDDE3"
                  text="Contact sales"
                />
              </div>
            </StyledCard>
            <StyledCard className="py-6 px-8 col-span-1">
              <div className="bg-snow-200 h-16 w-16 rounded-full flex items-center justify-center">
                <div className="w-8">
                  <Img
                    fluid={data.man.childImageSharp.fluid}
                    alt={"teacher"}
                  />
                </div>
              </div>
              <p className="text-base text-font-sub mt-3">
                A parent or guardian? and you want to introduce Stipee to your
                child’s school, please drop us a message. You get an amazing
                reward for sharing the Stipee experience!
              </p>
              <div className="mt-5">
                <Button
                  backgroundColor="#FAAA31"
                  borderColor="#FAAA31"
                  text="Refer us"
                  textColor="white"
                />
              </div>
            </StyledCard>
          </div>
        </div>
      </StyledContainer>
    </div>
  );
};
