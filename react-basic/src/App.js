// 项目的根组件,核心逻辑： app -> index.js -> public/index.html -> root
import { useDispatch, useSelector } from "react-redux";
// 导入actionCreator
import { increment, decrement } from "./redux/modules/counterStore";
function App() {
  const { count } = useSelector(state => state.counter) // 根store里配置的reducers的字段。
  const dispatch = useDispatch()
  return (
    <div className="App">
      this is an app.
      <br></br>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
