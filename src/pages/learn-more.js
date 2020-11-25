import React from "react";
import Layout from "../components/layout";
import Header from "../components/pages/LearnMore/header";
import Item from "../components/pages/HowItWorks/Item";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledHeaderText = styled.h4`
  @media (min-width: 500px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export default function () {
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
      telephone: file(relativePath: { eq: "telephone.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Header />
      <Item number="one" alternate>
        <div className="w-11/12 ">
          <div className="w-12">
            <Img fluid={data.smiley.childImageSharp.fluid} alt="smiley face" />
          </div>
          <StyledHeaderText className="oskari text-font font-medium mt-3 text-2xl">
            Fund stipends with ease
          </StyledHeaderText>
          <p className="text-sm md:text-lg text-font-sub mt-2">
            Manage your children's school stipend in separate schools from one
            app. Using the Stipee mobile app for Android or IOS, parents prefund
            their kids' daily school stipend with ease and at a reduced cost.
            Parents fund their app using a debit card, bank account, internet
            banking, or USSD for a frictionless transaction.
          </p>
        </div>
      </Item>
      <Item number="two">
        <div className="w-11/12 ">
          <div className="w-12">
            <Img fluid={data.money.childImageSharp.fluid} alt="smiley face" />
          </div>
          <StyledHeaderText className="oskari text-font font-medium mt-3 text-3xl">
            Control child's spending
          </StyledHeaderText>
          <p className="text-sm md:text-lg text-font-sub mt-2">
            Set a daily spending limit for your children. Don’t worry about the
            child spending past his daily allocation. Gain insight into your
            children's spending habits, which is a useful tool for moulding them
            to become more financially intelligent adults.
          </p>
        </div>
      </Item>
      <Item number="three" alternate>
        <div className="w-11/12">
          <div className="w-12">
            <Img fluid={data.card.childImageSharp.fluid} alt="smiley face" />
          </div>
          <StyledHeaderText className="oskari text-font font-medium mt-3 text-3xl">
            Personalized Stipee card for seamless and secured spending
          </StyledHeaderText>
          <p className="text-sm md:text-lg text-font-sub mt-2">
            Kid’s get a personalized Stipee card for seamless and secured
            spending at school. The card eradicates the need for the child to
            carry or handle cash in school, which further ensures the safety of
            the child and the money.
            <br />
            <span className="mt-2">
              It supports TAP (tap and pay) technology eliminating queues often
              suffered by students in school shops and the problem of change.
              With password and fingerprint layers of security, Stipee card is
              theft-proof.
            </span>
          </p>
        </div>
      </Item>
      <Item number="four">
        <div className="w-11/12">
          <div className="w-12">
            <Img fluid={data.laptop.childImageSharp.fluid} alt="smiley face" />
          </div>
          <StyledHeaderText className="oskari text-font font-medium mt-3 text-3xl">
            Database of students for schools
          </StyledHeaderText>
          <p className="text-sm md:text-lg text-font-sub mt-2">
            Stipee provides schools with a complete and updated electronic
            database of their students for free. Schools can use this valuable
            data to plan, budget, and make other informed decisions that will
            improve their business.
          </p>
        </div>
      </Item>
      <Item number="five" alternate>
        <div className="w-11/12">
          <div className="w-12">
            <Img fluid={data.card.childImageSharp.fluid} alt="smiley face" />
          </div>
          <StyledHeaderText className="oskari text-font font-medium mt-5 text-3xl">
            Merchant track daily sales
          </StyledHeaderText>
          <p className="text-sm md:text-lg text-font-sub mt-2">
            Our customer representatives are ever-ready to serve you. We are
            just a click away on all our platforms.
          </p>
        </div>
      </Item>
      <Item number="six">
        <div className="w-11/12">
          <div className="w-12">
            <Img
              fluid={data.telephone.childImageSharp.fluid}
              alt="smiley face"
            />
          </div>
          <StyledHeaderText className="oskari text-font font-medium mt-5 text-3xl">
            Merchant track daily sales
          </StyledHeaderText>
          <p className="text-sm md:text-lg text-font-sub mt-2">
            Stipee merchants are not left out. We equip school merchants with
            STIPEE POS terminal to receive payment, drastically cut payment
            time, track sales, and run periodic sales reports.
          </p>
        </div>
      </Item>
      <div className="h-10 md:h-20"></div>
    </Layout>
  );
}
