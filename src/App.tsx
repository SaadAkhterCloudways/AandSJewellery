import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Btn from "./DesignSystem/Components/Core/Button/Button";
import { ConfigProvider, message } from "antd";
import Text from "./DesignSystem/Components/Core/Text/Text";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "josefin_sans, sans-serif",
          },
        }}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-3xl font-bold underline bg-blue-100">
            Hello world!
          </h1>
          <Text type='h1'>My name is Saad</Text>
          <Text type='h2'>My name is Saad</Text>
          <Text type='h3'>My name is Saad</Text>
          <Text type='h4'>My name is Saad</Text>
          <Text type='h5'>My name is Saad</Text>
          <Text type='h6'>My name is Saad</Text>
          <Text type='p'>My name is <b> Saad</b></Text>
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </ConfigProvider>
    </div>
  );
}

export default App;
