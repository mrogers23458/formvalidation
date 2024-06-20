import React, { useState } from "react";
import LoginForm from "./forms/LoginForm";
import ProjectForm from "./forms/ProjectForm";
import "./App.css";

function App() {
  const [view, setView] = useState({
    login: true,
    project: false,
  });
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Form Validation</h1>
      </header>
      <div style={{ display: "flex" }}>
        <button onClick={() => setView({ login: true, project: false })}>
          LoginForm
        </button>
        <button onClick={() => setView({ login: false, project: true })}>
          ProjectForm
        </button>
      </div>
      <div id="form__container">
        {view.login && <LoginForm />}
        {view.project && <ProjectForm />}
      </div>
    </div>
  );
}

export default App;
