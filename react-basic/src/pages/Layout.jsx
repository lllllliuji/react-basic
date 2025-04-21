import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      一级路由layout组件
      <Link to="/">看板</Link>
      <Link to="/about">关于</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
