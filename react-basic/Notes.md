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
* 是js的语法扩展，浏览器本身不能识别，需要通过解析工具（babel）解析才能在浏览器中运行。



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

 在React组件中获取/操作DOM，需要使用useRef钩子函数，分为两步：

1. 使用useRef创建ref对象，并与JSX绑定.

2. 在DOM可用时，通过inputRef.current拿到DOM对象.(渲染完毕之后dom生成之后才可用)

   ```javascript
   const inputRef = useRef(null)
   const showDom = ()=> {
       console.dir(inputRef.current)
   }
   return (
       <div className="App">
       this is an app
       <input type="text" ref={inputRef}></input>
   <button onClick={showD om}>获取dom</button>
   </div>
   );
   ```

   



时间处理dayjs库。



理解组件通信

概念：组件通信就是组件之间的数据传递，根据组件嵌套关系的不同，有不同的通信方法。

父子通信。兄弟通信。跨层通信。



父传子实现步骤

1. 父组件传递数据 -在子组件标签上绑定属性。
2. 子组件接受数据 -子组件通过props参数接收数据。

```javascript
 function Son(props) {
  // props包含了父组件传递过来的所有的数据
  // {appName: "父组件中的数据"}
  console.log(props)
  return <div>this is Son, {props.appName}</div>
}

function App() {
  const name = "this is app name"
  return (
    <div className="App">
      this is an app
      <Son appName={name}></Son>
    </div>
  );
}

```



父传子-props说明

1. props可传递任意的数据（数字，字符串，布尔值，数组，对象，函数，JSX）
2. props是只读对象。（子组件只能读取props中的数据，不能直接进行修改，父组件的数据只能由父组件修改）



父传子-特殊的prop children

场景：当我们把内容嵌套在子组件标签中时，父组件会自动在名为children的prop属性中接受该内容。

```javascript
function Son(props) {
  console.log(props)
  return <div>this is Son, {props.children[0]}</div>
}

function App() {
  return (
    <div className="App">
      <Son>
        <span>this is span1</span>
        <span>this is span2</span>
      </Son>
    </div>
  );
}
```



 父子组件通信-子传父

 核心思路：在子组件中调用父组件中的函数并传递参数。

```javascript
function Son(props) {
  console.log(props)
  const msg = "msg from son"
  return <div>this is Son, {props.children[0]}
    <button onClick={() => props.sendMsg(msg)}>发送消息</button>
  </div>
}
// 这种方式也可以
// function Son({ sendMsg }) {
//   // console.log(props)
//   const msg = "msg from son"
//   return <div>this is Son
//     <button onClick={() => sendMsg(msg)}>发送消息</button>
//   </div>
// }

function App() {
  const [msg, setMsg] = useState('')
  const sendMsg = (msg) => {
    setMsg(msg)
  }
  return (
    <div className="App">
      this is app, {msg}
      <Son sendMsg={sendMsg}>
        <span>this is span1</span>
        <span>this is span2</span>
      </Son>
    </div>
  );
}
```





使用状态提升实现兄弟组件通信。

实现思路：借助“状态提升”机制，通过父组件进行兄弟组件之间的数据传递。

1. A组件先通过子传父的方式把数据传给父组件App
2. App拿到数据后通过父传子的方式传递给B组件。

```javascript
function A({ onGetName }) {
  const name = 'msg from A!'
  return (
    <div>
      this is A component.
      <button onClick={() => onGetName(name)}>往B组件发送消息</button>
    </div>
  )
}

function B({ name }) {
  return (
    <div>
      this is B component.
      {name}
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const getName = (name) => {
    setName(name)
  }
  return (
    <div className="App">
      this is an app
      <A onGetName={getName}></A>
      <B name={name}></B>
    </div>
  );
}
```

 

使用Context机制跨层级组件通信。app包含A，A包含B。

实现步骤：

1. 使用createContext方法创建一个上下文对象ctx。
2. 在顶层组件（App）中通过ctx.Provider组件提供数据
3. 在底层组件（B）中通过useContext狗子函数获取消费数据.

```javascript
const MsgContext = createContext()

function A() {
  return (
    <div>
      this is A component
      <B></B>
    </div>
  )
}

function B() {
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B component.
      {msg}
    </div>
  )
}

function App() {
  const msg = "This is an app msg."
  return (
    <div className="App">
      this is an app
      <MsgContext.Provider value={msg}>
        <A></A>
      </MsgContext.Provider>
    </div>
  );
}
```





useEffect的概念理解

useEffect是一个React Hook函数，用于在React组件中创建不是由事件引起而是由渲染本身引起的操作，比如发送AJAX请求，更改DOM等等。



useEffect的基础使用

需求，在组件渲染完毕后，立刻从服务端获取频道列表数据并显示到页面中。

```javascript
useEffect(()=>{}, [])
```

参数1是一个函数，可以把它叫做副作用函数，在函数内部可以放置要执行的操作。

参数2是一个数组（可选参），在数组里放置依赖项，不同依赖项会影响第一个参数函数的执行，当是一个空数组的时候，副作用函数只会在组件渲染完毕之后执行一次。

```javascript
import { useEffect } from "react";
import { useState } from "react";

const URL = "http://geek.itheima.net/v1_0/channels"


function App() {
  // 创建一个状态数据
  const [list, setList] = useState([])
  useEffect(() => {
    // 额外的操作
    async function getList(url) {
      const res = await fetch(url)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList(URL)
  }, [])
  return (
    <div className="App">
      this is an app.
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}
```



 useEffect依赖项参数说明

useEffect副作用函数的执行时机存在多种情况，根据传入依赖项的不同，会有不同的执行表现。

1. 没有依赖项。组件初始渲染 + 组件更新时执行
2. 空数组依赖项。旨在初始渲染时执行一次。
3. 特定依赖项。组件初始渲染 + 特定依赖项变化时执行。

```javascript
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  // 1. 没有依赖项
  // useEffect(() => {
  //   console.log("副作用函数执行了")
  // })

  // 2. 依赖项为空数组
  // useEffect(() => {
  //   console.log("副作用函数执行了")
  // }, [])

  // 3. 依赖项为count
  useEffect(() => {
    console.log("副作用函数执行了")
  }, [count])
  return (
    <div className="App">
      this is an app.
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

```



useEffect - 清除副作用

在useEffect中编写的由渲染本身引起的对接组件外部的操作，社区也经常把它叫做副作用操作，比如在useEffect中开启了一个定时器，我们想在组件卸载时把这个定时器再清理掉，这个过程就是清理副作用。

```javascript
useEffect(()={
	// 实现副作用操作逻辑
	return ()=> {
		// 清除副作用逻辑
	}
})
```

清楚副作用的函数最常见的执行时机是在组件卸载时自动执行。

```javascript
import { useState } from "react";
import { useEffect } from "react";

function Son() {
  // 1. 渲染时开启一个定时器
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器执行中')
    }, 1000)
    return () => { clearInterval(timer) }
  }, [])
  return <div>this is Son</div>
}

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      this is an app.
      {show && <Son></Son>}
      <button onClick={() => setShow(false)}>卸载son组件</button>
    </div>
  );
}
```

自定义hook

概念：自定义hook是以use打头的函数，通过自定义hook函数可以用来实现逻辑的封装和复用。

1. 声明一个以use打头的函数
2. 在函数体内封装可复用的逻辑
3. 把组件中用到的状态或者回调return出去（以对象或者数组）
4. 在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调。

```javascript
import { useState } from "react";

function useToggle() {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  return { show, toggle }
}

function App() {
  const { show, toggle } = useToggle()
  return (
    <div className="App">
      this is an app.
      {show && <div>this is a div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}
```



  React Hook使用规则

1. 只能在组件中或者其他自定义Hook函数中调用
2. 只能在组件的顶层调用，不能嵌套在if, for,其他函数中



json server安装

```shell
npm install -g json-server
```



axios是一个基于promise的网络请求库。

```shell
npm install axios	
```



抽象原则：App作为“智能组件”负责数据的获取，Item作为“UI组件”负责数据的渲染。



复用组件，父子组件通信。



Redux

Redux时React最常用的集中状态管理工具，类似于Vue中的Pinia（Vuex)，可以独立于框架运行。

使用步骤：

1. 定义一个reducer函数（根据当前想要的做的修改返回一个新的状态）
2. 使用createStore方法传入reducer函数，生成一个store实例。
3. 使用store的subscribe方法订阅数据的变化（数据一旦变化，可以得到通知）。
4. 使用store实例的dispatch方法提交action对象触发数据变化。 
5. 使用store实例的getState方法获取最新的状态数据更新到视图中。



为了职责清晰，数据流向明确，Redux把整个数据修改的流程分为了三个核心概念。分别是state，action，reducer。

1. state - 一个对象，存放着我们管理的数据状态
2. action - 一个对象，用来描述逆向怎么修改数据
3. reducer - 一个函数，根据aciton的描述生成一个新的state



Redux与React

安装两个插件

1. Redux Toolkit.（工具，简化store配置，支持immer，支持可变状态修改，内置thunk更好的异步创建）
2. react-redux。（连接redux和react的中间件）

```shell
npm i @reduxjs/toolkit react-redux
```



store目录结构设计

1. 通常集中状态管理的部分都会单独创建一个单独的“store”目录。
2. 应用通常会有很多个子store模块，所以创建一个“modules”目录，在内部编写业务分类的子store。
3. store中的入口文件store .js的作用是组合modules中所有的子模块，并导出store。 



1. 配置counterStore
2. 配置根store并组合counterStore模块
3. 注入store（react-redux）
4. 使用store中的数据。（useSelector，作用是把store中的数据映射到组件中) 
5. 修改store中的数据。（useDispatch，作用是生成提交action对象的dispatch函数)



action传参。在reducers的同步修改方法中添加action对象参数，参数会默认传递到payload属性。



异步状态操作。（主要就是导出一个异步的修改方法，再用useEffect）

1. 创建store的写法保持不变，配置好同步修改状态的方法。
2. 单独封装一个函数，在函数内部return一个新函数，在新函数中
   1. 封装异步请求获取数据。
   2. 调用同步actionCreator传入异步数据生成一个action对象，并使用dispatch提交。
3. 组件中dispatch的写法保持不变。



redux devtools调试插件，在chrome里下载。

 

点击一项，变更不同的className





React Router前端路由。

一个路径path对应一个组件component，当我们在浏览器中访问一个path的时候，path对应的组件会在页面中进行渲染。



创建路由开发环境

1. 创建项目并安装所有依赖

   ```shell
   npx create-react-app react-router-pro
   npm i
   ```

2. 安装最新的ReactRouter包

   ```shell
   npm i react-router-dom
   ```

3. 启动项目

   ```shell
   npm run start
   ```



抽象路由模块

1. page目录。（Login， Article）

2. router模块。（引入组件配置path-component)
3. 应用入口渲染RouterProvider(注入router实例)

