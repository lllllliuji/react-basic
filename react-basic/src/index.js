// 项目的入口，从这里开始运行

// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';


// 导入项目的根组件
import App from './App';
// 导入store和provider
import store from './redux/store';
import { Provider } from 'react-redux';

// 把App组件渲染到id为root的dom节点上（即public/index.html的root节点）
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

