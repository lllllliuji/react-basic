// 项目的入口，从这里开始运行

// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';


import { RouterProvider } from 'react-router-dom';
import router from './router'; // 导入路由router


// 把App组件渲染到id为root的dom节点上（即public/index.html的root节点）
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <RouterProvider router={router}>

  </RouterProvider>
);

