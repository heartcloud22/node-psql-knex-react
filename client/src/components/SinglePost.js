import React, { useEffect, useState } from "react";
import Axios from "axios";
import TodoCard from "./TodoCard";
import AddTodo from "./AddTodo";

function SinglePost(props) {
  const id = props.match.params.id;
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const getTodo = () => {
    setLoading(true);
    Axios.get(`/api/todo/${id}`).then(res => {
      setTodo(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);

  const onEditing = () => {
    return setEditing(!editing);
  };

  return (
    <div>
      {loading && <p>loading...</p>}
      {editing ? (
        <AddTodo
          editing={editing}
          title={todo.title}
          isDone={todo.is_done}
          key={todo.id}
          id={todo.id}
        />
      ) : (
        <TodoCard
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isDone={todo.is_done}
          onEdit={onEditing}
        />
      )}
    </div>
  );
}

export default SinglePost;
