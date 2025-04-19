import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
    name: 'counter',
    // 初始化state
    initialState: {
        count: 0
    },
    // 修改状态的方法 同步方法 支持直接修改
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    }
})
// 解构出来actionCreator函数
const { increment, decrement } = counterStore.actions
// 获取reducer
const counterReducer = counterStore.reducer

// 以按需导出的方式导出actionCreator
export { increment, decrement }

// 以默认导出的方式导出reducer
export default counterReducer