import React, { useState, Fragment } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const AddTodo = ({ editing, history, title, isDone, id }) => {
  const [todo, setTodo] = useState({
    title: title || "",
    is_done: isDone || false
  });

  const onChange = e => {
    editing
      ? setTodo({
          ...todo,
          [e.target.name]: e.target.value
        })
      : setTodo({
          ...todo,
          title: e.target.value
        });
  };

  const onSubmit = e => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    editing
      ? Axios.put(`/api/todo/${id}`, todo, config).then(() => history.push("/"))
      : Axios.post("/api/todo", todo, config).then(() => history.push("/"));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Todo title</label>
        <input
          type="text"
          name="title"
          onChange={onChange}
          value={todo.title}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Todo title</label>
        {editing ? (
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Have You Done it ?</label>
            </div>
            <select
              name="is_done"
              onChange={onChange}
              className="custom-select"
              id="inputGroupSelect01"
            >
              {isDone ? (
                <Fragment>
                  <option value="true">Done</option>
                  <option value="false">Not done</option>
                </Fragment>
              ) : (
                <Fragment>
                  <option value="false">Not done</option>
                  <option value="true">Done</option>
                </Fragment>
              )}
            </select>
          </div>
        ) : (
          <input
            type="boolean"
            name="is_done"
            value={todo.is_done}
            disabled
            className="form-control"
          />
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default withRouter(AddTodo);
