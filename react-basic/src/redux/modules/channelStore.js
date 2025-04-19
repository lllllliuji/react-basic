import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channels: []
    },
    reducers: {
        setChannels(state, action) {
            state.channels = action.payload
        }
    }
})

const { setChannels } = channelStore.actions

const URL = 'http://geek.itheima.net/v1_0/channels'

// 异步请求部分
const fetchChannels = () => {
    return async (dispatch) => {
        const res = await axios.get(URL)
        dispatch(setChannels(res.data.data.channels))
    }
}

export { fetchChannels }

const channelReducer = channelStore.reducer

export default channelReducer

