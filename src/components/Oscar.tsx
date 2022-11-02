import React from "react";

type oscarTypes = {
  children: React.ReactNode;
};

export const Oscar = (props: oscarTypes) => {
  return <div>{props.children}</div>;
};
