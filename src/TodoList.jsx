import React, { Fragment } from "react";
import { Todo } from "./Todo";

export const TodoList = props => {
  return (
    <Fragment>
      {props.items.map(item => <Todo body={item.body} key={item.id} />)}
    </Fragment>
  );
};
