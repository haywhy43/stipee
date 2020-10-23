import React from "react";
import Chat from "./Chat";

const Icon = ({ name, className }) => {
  switch (name) {
    case "chat":
      return <Chat className={className} />;

    default:
      return;
  }
};

export default Icon;
