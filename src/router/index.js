/** 从react中获取React对象 和 Components组件 */
import React, { Component } from 'react'
/** 添加react路由对象 实现单页面跳转*/
import { BrowserRouter, Route, Switch } from 'react-router-dom'
/** 导入自定义组件 */
import Map3D from '../Page/Map3D'


/** 导出router路由组件 */
export default class Router extends Component {

  /**
   * 
   *
     1. 挂载卸载过程
      1.1.constructor()  创建原型 _proto_ 数据的初始化
      1.2.componentWillMount() dom渲染前 constructor()初始化数据后，但是还未渲染DOM时
      1.3.componentDidMount()  组件第一次渲染完成，此时dom节点已经生成
      1.4.componentWillUnmount () 组件的卸载和数据的销毁
        clear你在组建中所有的setTimeout,setInterval
        移除所有组建中的监听 removeEventListener
        有时候我们会碰到这个warning: Can only update a mounted or mounting component. This usuall
             因为你在组件中的ajax请求返回setState,而你组件销毁的时候，请求还未完成，因此会报warning
 
    2. 更新过程
      2.1. componentWillReceiveProps (nextProps) 
        在接受父组件改变后的props需要重新渲染组件时用到的比较多
        接受一个参数nextProps
        通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件

      2.2.shouldComponentUpdate(nextProps,nextState)
        主要用于性能优化(部分更新)
        唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新
        因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断

      2.3.componentWillUpdate (nextProps,nextState)
        shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState。

      2.4.componentDidUpdate(prevProps,prevState)
        组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，
        这里可以拿到prevProps和prevState，即更新前的props和state

      2.5.render()
        render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，
        在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。

    3. React新增的生命周期(个人补充)
      3.1. getDerivedStateFromProps(nextProps, prevState)
          代替componentWillReceiveProps()
          老版本中的componentWillReceiveProps()方法判断前后两个 props 是否相同，如果不同再将新的 props 更新到相应的 state 上去。
          这样做一来会破坏 state 数据的单一数据源，导致组件状态变得不可预测，另一方面也会增加组件的重绘次数。
      
      3.2. getSnapshotBeforeUpdate(prevProps, prevState)
        代替componentWillUpdate。
        常见的 componentWillUpdate 的用例是在组件更新前，读取当前某个 DOM 元素的状态，并在 componentDidUpdate 中进行相应的处理。
   * 
   */

  /** recat逻辑渲染 */
  render() {

    return (
      /** BrowserRouter基于url的pathname跳转   HashRouter基于Hash跳转 */
      <BrowserRouter>
        {/**  <Switch>是唯一的因为它仅仅只会渲染一个路径。相比之下（不使用<Switch>包裹的情况下），每一个被location匹配到的<Route>将都会被渲染 */}
        <Switch>
          {/** 路由对象 指定组件路径 */}
          <Route path="/" component={ Map3D } />
        </Switch>
      </BrowserRouter>
    )
  }
}

