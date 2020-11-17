/** 组件样式文件 */
import map3DStyle from './index.module.less';
/** 从react中获取React对象 和 Components组件 */
import React, { Component } from 'react';
/** 导入cesium模块 */
import * as Cesium from 'cesium/Cesium'

/** 使用react的Component组件对象自定义map3d组件 */
export default class Map3D extends Component {

  /** 数据初始化 */
  constructor(props) {
    super(props)
    this.state = {}
  }

  /** dom完成第一次渲染执行函数 */
  componentDidMount() {

    this.initMap()
  }

  /** 初始化地图 */
  initMap() {
    // 将viewer对象放在window环境下
    window.viewer  = new Cesium.Viewer('cesiumContainer')
  
  }

  /** 逻辑渲染 */
  render() {
    
    // 构建虚拟dom
    return (
      <div className={ map3DStyle.viewer } >
        <div id="cesiumContainer" className={ map3DStyle.cesiumContainer } ></div>
      </div>
    )
  }
}