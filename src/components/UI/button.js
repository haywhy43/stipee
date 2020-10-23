import React from "react";
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

  &:hover {
    background-color: ${props => (props.hoverColor ? props.hoverColor : "")};
    color: ${props => (props.hoverTextColor ? props.hoverTextColor : "")};
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
}) {
  return (
    <StyledButton
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      hoverTextColor={hoverTextColor}
      type={type || "button"}
    >
      {!icon ? (
        <span className="mx-10">{text}</span>
      ) : (
        <div className="flex h-full">
          <div className="col-span-3 bg-blue-dark text-white px-5 h-full rounded-tl-sm rounded-bl-sm flex items-center justify-center">
            {text}
          </div>
          <div className="bg-blue-faded flex justify-center items-center h-full rounded-tr-sm rounded-br-sm px-4">
            <Icon name={icon} className={iconClass} />
          </div>
        </div>
      )}
    </StyledButton>
  );
}
