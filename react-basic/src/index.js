// 项目的入口，从这里开始运行

// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';


// 导入项目的根组件
// 导入store和provider
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 1. 创建router实例对象并配置路由对应关系
const router = createBrowserRouter([
  {
    path: '/login',
    element: <div>我是登录</div>
  },
  {
    path: '/article',
    element: <div>我是文章</div>
  },
  {
    path: 'index',
    element: <div>我是主页</div>
  }
])


// 把App组件渲染到id为root的dom节点上（即public/index.html的root节点）
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <RouterProvider router={router}>

  </RouterProvider>
);

