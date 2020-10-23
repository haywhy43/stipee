import React from "react";
import styled from "styled-components";
import PageHeader from "../../content/PageHeader";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Button from "../../UI/button";
import SpiralArrow from "../../SVG/spiral-arrow.js";

const Container = styled.header`
  h1 {
    font-size: 39px;
    line-height: 52px;

    @media (max-width: 640px) {
      font-size: 34px;
      line-height: 48px;
    }
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      hand: file(relativePath: { eq: "hand.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      flutterwave: file(relativePath: { eq: "flutterwave.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      firebase: file(relativePath: { eq: "firebase.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Container>
      <PageHeader>
        <div className="flex mx-auto h-full items-end">
          <div className="md:w-11/12 lg:w-11/12 xl:w-8/12">
            <div className="relative w-11/12 md:w-10/12 mx-auto">
              <div className="">
                <h1 className="text-font font-semibold relative z-50 animated fadeInUp">
                  Stipee is a mobile solution that allows parents to fund,
                  control, and protect their kid’s school stipends
                </h1>
                <div className="md:flex mt-5 md:mt-10 mb-8">
                  <div className="mr-5 animated fadeInUp delay-200ms z-50">
                    <Button
                      borderColor="#FAAA31"
                      text="Contact sales"
                      hoverColor="#FAAA31"
                      hoverTextColor="white"
                    />
                  </div>
                  <div className="animated fadeInUp delay-200ms z-50 mt-5 md:mt-0">
                    <Button icon="arrow-right" text="How it works" />
                  </div>
                  <div className="absolute top-0 md:flex pt-4 animated fadeIn delay-500ms hidden">
                    <div className="w-64"></div>
                    <div className="w-2"></div>
                    <div className="pl-24 pt-40 lg:pt-24">
                      <div>
                        <SpiralArrow />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-12 md:h-40"></div>
              <div className="md:flex items-center my-10">
                <p className="font-semibold text-s">Trusted By:</p>
                <div className="flex ml-0 mt-3 md:mt-0 md:ml-5 items-center">
                  <div className="w-40">
                    <Img fluid={data.flutterwave.childImageSharp.fluid} />
                  </div>
                  <div className="w-40 ">
                    <Img fluid={data.firebase.childImageSharp.fluid} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 absolute bottom-0 right-0 hidden lg:block">
            <div className="w-11/12 ml-auto">
              <Img fluid={data.hand.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </PageHeader>
    </Container>
  );
};
