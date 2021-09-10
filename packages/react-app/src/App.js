import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
// import Image from "./components/image";

function App() {
  const [components, setComponents] = useState([]);

  // 异步加载组件
  useEffect(() => {
    async function fetchComponents() {
      const { Image } = await import("./components/image.jsx");
      const { Text } = await import("./components/text.jsx");
      setComponents([Text, Image]);
    }

    fetchComponents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>加载异步组件</button>
        {components.map((component, i) => {
          return <div key={i}>{component()}</div>;
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
