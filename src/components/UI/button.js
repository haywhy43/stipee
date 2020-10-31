import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon";

const StyledButton = styled.button`
  border: ${props =>
    props.borderColor ? `1px solid ${props.borderColor}` : "transparent"};

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};

  font-size: 13px;
  border-radius: 6px;
  height: 40px;
  transition: 500ms;
  font-weight: 500;
  color: ${props => (props.textColor ? props.textColor : "")};

  &:hover {
    background-color: ${props => (props.hoverColor ? props.hoverColor : "")};
    color: ${props => (props.hoverTextColor ? props.hoverTextColor : "")};
    border-color: ${props =>
      props.hoverBorderColor ? props.hoverBorderColor : ""};
  }

  .text-container:before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 80%;
    height: 100%;
    transform: rotate(48deg);
    background-color: #ffffff;
    opacity: 0.2;
    transition: all ease 700ms;
  }

  .text-container:hover:before {
    left: 100%;
  }

  .icon-wrapper {
    animation-name: ${props =>
      props.animated
        ? props.animationType
          ? props.animationType
          : "bounce"
        : ""};
  }
`;

export default function Button({
  type,
  icon,
  backgroundColor,
  borderColor,
  hoverColor,
  text,
  iconClass = "",
  hoverTextColor,
  textColor,
  hoverBorderColor,
  animationType,
}) {
  const [animated, setAnimated] = useState(false);
  return (
    <StyledButton
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      hoverTextColor={hoverTextColor}
      hoverBorderColor={hoverBorderColor}
      type={type || "button"}
      textColor={textColor}
      animationType={animationType}
      animated={animated}
      onMouseEnter={() => setAnimated(true)}
      onMouseLeave={() => setAnimated(false)}
    >
      {!icon ? (
        <span className="mx-10">{text}</span>
      ) : (
        <div className="flex h-full">
          <div className="col-span-3 bg-blue-dark text-white px-5 h-full rounded-tl-sm rounded-bl-sm flex items-center justify-center relative text-container overflow-hidden">
            {text}
          </div>
          <div className="bg-blue-faded flex justify-center items-center h-full rounded-tr-sm rounded-br-sm px-4">
            <div className="icon-wrapper animated">
              <Icon name={icon} className={iconClass} />
            </div>
          </div>
        </div>
      )}
    </StyledButton>
  );
}
