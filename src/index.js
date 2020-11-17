import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/** 
 * 项目创建于react-scripts-ts
 * Create React App（以下简称 CRA）是创建 React 应用的一个脚手架，
 * 它与其他脚手架不同的一个地方就是将一些复杂工具（比如 webpack）的配置封装了起来，
 * 让使用者不用关心这些工具的具体配置，从而降低了工具的使用难度 
 * */

/** 引入cesiumJs样式文件 根据webpack配置默认在Source下寻找 */
import 'cesium/Widgets/widgets.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
