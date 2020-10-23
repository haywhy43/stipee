import React from "react";
import Chat from "./Chat";
import ArrowRight from "./ArrowRight";

const Icon = ({ name, className }) => {
  switch (name) {
    case "chat":
      return <Chat className={className} />;
    case "arrow-right":
      return <ArrowRight className={className} />;
    default:
      return;
  }
};

export default Icon;
