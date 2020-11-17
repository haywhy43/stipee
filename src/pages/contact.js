import React, { useState } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import ContactForm from "../components/pages/Contact/ContactForm";
import Ellipse from "../components/SVG/ellipses";

const StyledEllipseContainer = styled.div`
  width: 800px;
  margin-top: -6rem;
  margin-right: -5rem;
`;

const StyledContainer = styled.div`
  h1 {
    font-size: 45px;
  }

  .form-container {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #dddde3;
    box-sizing: border-box;
    backdrop-filter: blur(4px);
    border-radius: 20px;
  }
`;

const StyledButton = styled.button`
  background: ${props => (props.active ? "#ffffff" : "transparent")};
  box-shadow: ${props =>
    props.active ? "0px 5px 10px 5px rgba(0, 0, 0, 0.03)" : ""};
  color: ${props => (props.active ? "#0E101B" : "#7A7A7A")};
  font-weight: ${props => (props.active ? "500" : "normal")};
  border-radius: 100px;
`;

export default function () {
  const [active, setActive] = useState("contact");
  return (
    <Layout alt>
      <div className="bg-snow-400 relative overflow-hidden">
        <div className="h-32 md:h-40"></div>
        <div className="w-11/12 md:w-10/12 mx-auto">
          <StyledContainer>
            <h1 className="oskari font-medium text-font">
              {active === "contact" ? "Contact sales" : "Refer stipee"}
            </h1>
            <div className="absolute right-0  top-0 overflow-visible hidden md:block">
              {/* <img
                src={require("../images/stipee-enterprise.png")}
                alt="stipee enterprise"
                className="w-6/12 ml-auto -mt-10"
              /> */}
              <StyledEllipseContainer>
                <Ellipse border="#CAE4FF" largeColor="#DAEBFB" />
              </StyledEllipseContainer>
            </div>
            <div className="form-container px-4 py-8 md:p-10 lg:w-11/12 xl:w-9/12 mt-8">
              <div className="h-16 rounded-full px-2 md:w-7/12 lg:w-1/2 mx-auto flex items-center justify-center border border-snow-300">
                <StyledButton
                  active={active === "contact"}
                  className="w-1/2 flex items-center py-3 justify-center"
                  onClick={() => setActive("contact")}
                >
                  <p>Contact sales</p>
                </StyledButton>
                <StyledButton
                  active={active === "refer"}
                  className="w-1/2 flex items-center py-3 justify-center"
                  onClick={() => setActive("refer")}
                >
                  <p>Refer Stipee</p>
                </StyledButton>
              </div>

              <div className="mt-8 md:px-2">
                <ContactForm />
              </div>
            </div>
          </StyledContainer>
        </div>
        <div className="h-32"></div>
      </div>
    </Layout>
  );
}
