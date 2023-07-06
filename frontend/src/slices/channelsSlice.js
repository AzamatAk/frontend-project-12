/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    allChannels: [],
    currentActiveId: null,
  },
  reducers: {
    addChannels: (state, action) => {
      state.allChannels = action.payload;
    },
    addChannel: (state, action) => {
      state.allChannels.push(action.payload);
    },
    removeChannel: (state, action) => {
      const { id } = action.payload;
      state.channels = state.channels.filter((channel) => (channel.id !== id));
      if (state.currentChannelId === id) {
        state.currentChannelId = _.first(state.channels).id;
      }
    },
    renameChannel: (state, { payload: { id, name } }) => {
      const channel = state.channels.find((ch) => (ch.id === id));
      channel.name = name;
    },
    setActiveChannel: (state, action) => {
      state.currentActiveId = action.payload;
    },
  },
});

export const {
  addChannels,
  addChannel,
  removeChannel,
  renameChannel,
  setActiveChannel,
} = channelsSlice.actions;

export default channelsSlice.reducer;
