import React from "react";
import SimpleProps from "../SimpleProps";

export const Extract = (props: React.ComponentProps<typeof SimpleProps>) => {
  return <div>Extract props from other component : {props.name}</div>;
};
