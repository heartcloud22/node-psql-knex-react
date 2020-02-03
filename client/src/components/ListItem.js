import React from "react";
import { Link } from "react-router-dom";
function ListItem({ title, isDone, id }) {
  return (
    <Link to={`/todo/${id}`}>
      <li
        className={`list-group-item ${
          isDone ? "bg-success" : "bg-danger"
        } text-white d-flex justify-content-center align-items-center`}
      >
        <h3>{title}</h3>
      </li>
    </Link>
  );
}

export default ListItem;
