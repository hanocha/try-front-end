import React from "react";

export const Todo = props => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  );
};
