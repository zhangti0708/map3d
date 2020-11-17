import './App.css';
/**从react中获取React对象 和 Components组件 */
import React, { Component } from 'react'
/** 获取自定义的路由对象 */
import Router from './router/index'

/** 使用react的Component组件对象自定义组件 */
export default class App extends Component {

  /** 逻辑渲染 */
  render() {
    return (
      /** 渲染一个自定义路由对象 */
      <Router></Router>
    )
  }
}