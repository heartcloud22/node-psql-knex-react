import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { withRouter } from "react-router-dom";

function TodoCard({ id, title, isDone, history, onEdit }) {
  const runDelete = () => {
    Axios.delete(`/api/todo/${id}`).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className={`${isDone ? "text-success" : "text-danger"}`}>
            {isDone ? "Completed" : "Not Completed"}
          </h6>
          <button className="btn btn-success" onClick={onEdit}>
            Edit
          </button>
          <button onClick={() => runDelete()} className="btn btn-danger mx-3">
            Delete
          </button>
          <Link to="/" className="btn card-link">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(TodoCard);
