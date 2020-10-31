import React, { useEffect } from "react";
import Button from "../../UI/button";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import Stipee from "../../SVG/stipee";

const StyledCard = styled.div`
  background: #ffffff;
  border: 1px solid #dddde3;
  box-shadow: 0px 20px 30px 5px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  p {
    line-height: 30px;

    @media (max-width: 640px) {
      line-height: 26px;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 10%;
    height: 100%;
    transform: rotate(-45deg);
    background-color: #ffffff;
    opacity: 0.9;
    transition: all ease 1s;
  }

  &:hover:before {
    left: 150%;
  }
`;

const StyledHeaderText = styled.h3`
  @media (min-width: 641px) {
    font-size: 44px;
    line-height: 55px;
  }
`;

const features = [
  {
    img: "smiley",
    alt: "smiley face",
    title: "Fund stipends with ease",
    body:
      "With stipee parents can monitor their children's stipend in different schools. Prefund stipends with ease using stipee.",
  },
  {
    img: "money",
    alt: "dollars with wings emoji",
    title: "Control child's spending",
    body:
      "Manage spending by setting limits, which would yield more insight into spending habits increasing financial intelligence.",
  },
  {
    img: "card",
    alt: "personalized card",
    title: "Personalized Stipee card",
    body:
      "Kids can enjoy cashless and secured spending at school, eliminating queues with our Tap to pay personalized cards.",
  },
  {
    img: "laptop",
    alt: "laptop",
    title: "Database of students for schools",
    body:
      "For free, a comprehensive electronic database of students would be provided to plan, budget and grow a business.",
  },
];

export default () => {
  const data = useStaticQuery(graphql`
    query {
      smiley: file(relativePath: { eq: "smiley.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      money: file(relativePath: { eq: "money.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card: file(relativePath: { eq: "card.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laptop: file(relativePath: { eq: "laptop.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const eventListener = () => {
    const doc = document.querySelector("#stipee");
    const docPos = doc.getBoundingClientRect();

    doc.style.transform = `translateX(-${(docPos.width / docPos.top) * 15}px)`;
  };

  useEffect(() => {
    document.addEventListener("scroll", eventListener);
    return function cleanup() {
      document.removeEventListener("scroll", eventListener);
    };
  });

  return (
    <section>
      <div className="lg:flex w-11/12 md:w-10/12 lg:w-11/12 px-2 md:px-4 mx-auto relative">
        <div className="xl:w-6/12 w-8/12">
          <StyledHeaderText className="text-3xl text-font font-medium oskari">
            Some of our <br /> features
          </StyledHeaderText>
          <div className="mt-4">
            <Button
              text="Learn more"
              icon="arrow-right"
              animationType="bounceLeft"
            />
          </div>
        </div>
        <div className="mt-8 lg:mt-0 z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 lg:w-11/12 ml-auto">
            {features.map(feat => (
              <StyledCard className="py-10 px-8 col-span-1" key={feat.title}>
                <div className="w-12">
                  <Img
                    fluid={data[feat.img].childImageSharp.fluid}
                    alt={feat.alt}
                  />
                </div>
                <h4 className="text-xl font-medium text-font mt-5 oskari">
                  {feat.title}
                </h4>
                <p className="text-base text-font-sub mt-3">{feat.body}</p>
              </StyledCard>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 pb-8 duration-500" id="stipee">
          <div className="hidden lg:block">
            <Stipee />
          </div>
        </div>
      </div>
      <div className="h-32 w-full"></div>
    </section>
  );
};
