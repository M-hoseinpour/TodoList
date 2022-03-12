import React from "react";
import { Todo } from "./features/Todo/Todo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Start from "./features/Start";
import AuthRoute from "./features/AuthRoute";
import Login from "./features/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Todo" element={<AuthRoute><Todo /></AuthRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
