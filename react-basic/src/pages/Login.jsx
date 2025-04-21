import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是登录
      {/* <Link to={"/article"}>文章</Link> */}
      {/* <button onClick={() => navigate("/article")}>文章</button> */}
      <button onClick={() => navigate("/article?id=101&name=newton")}>
        searchParams
      </button>
      {/* <button onClick={() => navigate("/article/303/dijkstra")}>params</button> */}
    </div>
  );
};

export default Login;
