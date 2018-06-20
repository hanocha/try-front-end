import React, { Fragment } from "react";
import { Todo } from "./Todo";

export const TodoList = props => {
  return (
    <Fragment>
      {props.items.map(item =>
        <Fragment>
          <Todo body={item.body} title={item.title} key={item.id} />
          <hr />
        </Fragment>
      )}
    </Fragment>
  );
};
