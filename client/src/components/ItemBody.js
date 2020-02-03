import React, { useEffect, useState, Fragment } from "react";
import ListItems from "./ListItems";
import ListItem from "./ListItem";
import Axios from "axios";
import _ from "lodash";

function ItemBody() {
  const [state, setState] = useState({
    todos: {},
    loading: false
  });
  const { todos, loading } = state;
  const getTodos = () => {
    setState({
      ...state,
      loading: true
    });
    Axios.get("/api/todo").then(res => {
      //   console.log(res.data);
      setState({
        ...state,
        todos: res.data,
        loading: false
      });
    });
  };

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  const renderTodos = () => {
    return _.map(todos, todo => (
      <ListItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        isDone={todo.is_done}
      />
    ));
  };

  return (
    <Fragment>
      {loading ? <p>loading...</p> : <ListItems>{renderTodos()}</ListItems>}
    </Fragment>
  );
}

export default ItemBody;
