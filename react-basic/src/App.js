// 项目的根组件,核心逻辑： app -> index.js -> public/index.html -> root
import { useDispatch, useSelector } from "react-redux";
// 导入actionCreator
import { increment, decrement, setTo } from "./redux/modules/counterStore";
import { fetchChannels } from "./redux/modules/channelStore";
import { useEffect } from "react";
function App() {
  const { count } = useSelector(state => state.counter) // 根store里配置的reducers的字段。
  const { channels } = useSelector(state => state.channels)
  const dispatch = useDispatch()

  // 使用useEffect触发异步请求执行
  useEffect(() => {
    dispatch(fetchChannels())
  }, [dispatch])

  return (
    <div className="App">
      this is an app.
      <br></br>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(setTo(20))}>设为20</button>
      <button onClick={() => dispatch(setTo(10))}>设为10</button>

      <ul>
        {channels.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>


    </div>
  );
}

export default App;
