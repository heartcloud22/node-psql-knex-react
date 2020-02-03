import React from "react";
import Navbar from "./components/Navbar";
import ItemBody from "./components/ItemBody";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={ItemBody} />
          <Route path="/todo/add" exact component={AddTodo} />
          <Route path="/todo/:id" exact component={SinglePost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
