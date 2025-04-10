# React

构建web和原生交互界面的库。

* 组件化开发
* 丰富的生态
* 跨平台支持
* 性能优异



创建开发环境

```shell
npx create-react-app react-basic
# npx Node.js工具命令，查找并执行后续的命令
# create-react-app 命令
# react-basic 项目名称
```



package.json 项目依赖的核心包和执行脚本。



项目是如何跑起来的

```javascript
// 项目的入口，从这里开始运行

// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';


// 导入项目的根组件
import App from './App';


// 把App组件渲染到id为root的dom节点上（即public/index.html的root节点）
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
```



index.js ->   引入项目的根组件 -> 把App根组件渲染到id为root的dom节点上。



什么是JSX?

* JSX是javascript和xml的缩写，表示在js代码中编写html模板结构，它是react中编写ui模板的方式。
* html声明式模板语法，js的可编程能力。
* 是js的语法扩展，浏览器本身不能识别，需要通过解析工具（babel)解析才能在浏览器中运行。



JSX中使用js表达式

1. 使用引号传递字符串 
2. 使用javascript变量
3. 函数调用和方法调用
4. 使用javacript对象

```javascript
const count = 100
function getName() {
  return "Jakie Chen"
}
function App() {
  return (
    <div className="App">
      this is an app
      {"hello world"} {/**使用引号传递字符串 */}
      {count} {/* 使用javacript对象 */}
      {getName()} {/**函数调用 */}
      {new Date().getDate()} {/**方法调用 */}
      <div style={{color: 'red'}}>this is a div</div> {/**使用javascript对象*/}
    </div>
  );
}
```





jsx中实现列表标签

```javascript
 const list = [
  {id: 101, name: 'Vue',},
  {id: 102, name: 'React',},
  {id: 103, name: 'Angular',}
]
function App() {
  return (
    <div className="App">
      this is an app
      {/** 渲染列表 */}
      {/** map循环哪个结构， */}
      {/** 注意事项：加上一个独一无二的key，字符串或者number id */}
      {/** key的作用：React框架内部使用，用来提升性能 */}
      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}
```





条件渲染。（逻辑与，三目运算，自定义函数 + if判断语句）

```javascript
{flag && <span>this is a span</span>}
{loading ? <span>loading...</span> : <span>finished</span>}
```



react基础事件绑定

语法：on + 事件名称 = {事件处理函数}

```javascript
function App() {
  const clickHandler = () => {
    console.log("I'm clicked.")
  }
  return (
    <div className="App" >
      this is an app
      <button onClick={clickHandler}>click me</button>
    </div>
  );
}
```



使用事件对象参数

语法：在事件回调函数中设置形参e.

```javascript
function App() {
  const clickHandler = (e) => {
    console.log("I'm clicked.", e)
  }
  return (
    <div className="App" >
      this is an app
      <button onClick={clickHandler}>click me</button>
    </div>
  );
}
```



传递自定义参数

语法：事件绑定的位置改造成箭头函数的写法。在执行clickHandler实际处理业务函数的时候传递实参。

```javascript
function App() {
  const clickHandler = (name, e) => {
    console.log("I'm clicked.", name, e)
  }
  return (
    <div className="App" >
      this is an app
      <button onClick={(e) => clickHandler('jack', e)}>click me</button>
    </div>
  );
}

```



react中的组件

 一个组件就是用户界面的一部分，它可以有自己的逻辑和外观，组件之间可以互相嵌套，也可以复用多次。

组件化开发可以让开发者像搭积木一样构建一个完整的庞大的应用。

在React中，一个组件就是首字母大写的函数，内部存放了组件的逻辑和视图UI，渲染组件只需要把组件当成标签书写即可。  

```javascript
function Button() {
  return <button>click me!</button>
}


function App() {
  return (
    <div className="App">
      this is an app
      <Button/>
    </div>
  );
}
```



useState基础使用

useState是一个React Hook（函数），它允许我们向组件添加一个状态变量，从而控制组件的渲染结果。(数据驱动视图)

```javascript
/*
	1. useState是一个函数，返回值是一个数组
	2. 数组中的第一个参数是状态变量，第二个参数是set函数用来修改变量的值
	3. useState的参数将作为状态变量的初始值
*/
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const clickHandler = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      this is an app
      <button onClick={clickHandler}>{count}</button>
    </div>
  );
}
 
```



 状态不可变

在React中，状态被认为是只读的，我们应该时钟替换它而不是修改它，直接修改状态不能引发视图更新。（使用更新函数） 



复杂对象也一样

```javascript
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const clickHandler = () => {
    setCount(count + 1)
  }

  const [form, setForm] = useState({name: 'jack'})
  const formHandler = ()=> {
    setForm({
      ...form,
      name: 'john'
    })
  }

  return (
    <div className="App">
      this is an app
      <button onClick={clickHandler}>{count}</button>
      <button onClick={formHandler}>{form.name}</button>
    </div>
  );
}
```



样式控制（行内样式，class类名控制）

```
<span style={{ color: "red", fontSize: "50px" }}>this is a span</span>

<span className="foo"> this is class foo</span>
```



列表渲染，条件渲染，事件触发排序，点击事件触发class样式更改。



classNames库，可以动态选择class样式。

lodash库，有排序等功能。





受控表单绑定

概念：使用react组件的状态（useState）控制表单的状态。

```javascript
function App() {
  // 1.声明一个react状态
  const [value, setValue] = useState('')

  return (
    <div className="App">
      {/** 2.通过value属性绑定react状态 */}
	  {/** 3.绑定onChange事件，通过事件参数e拿到输入框最新的值，反向修改到react状态 */}

      <input value={value} type="text" onChange={(e) => setValue(e.target.value)}></input>
    </div>
  );
}
```



react中获取dom

