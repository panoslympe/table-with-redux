import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTableData = createAsyncThunk('state/fetchTableData',
  async () => {
    try {
      const data = await axios.get('https://panos.users.challenge.dev.monospacelabs.com/users');
      console.log(data)
      return data.data
    } catch (error) {
      throw Error(error)
    }
  })

export const updateEntry = createAsyncThunk('state/updateEntry',
  async (user) => {
    try {
      const data = await axios.put(`https://panos.users.challenge.dev.monospacelabs.com/users/${user.id}`, { ...user, active: !user.active });
      return data.data
    } catch (error) {
      throw Error(error)
    }
  })


export const reducerData = createSlice({
  name: 'state',
  initialState: {
    data: [],
    checkedUsers: { all: false, users: [] },
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload

    },
    setCheckedUsers: (state, action) => {
      state.data[action.payload].checked = !state.data[action.payload]?.checked;
    },
    setCheckedUsersAll: (state, action) => {
      if (state.data.every(user => user.checked)) {
        state.data = state.data.map(user => ({ ...user, checked: false}))
      } else {
        state.data = state.data.map(user => ({ ...user, checked: true}))
      }
    }
  },
  extraReducers: {
    [fetchTableData.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchTableData.fulfilled]: (state, action) => {
      state.data = action.payload.map(user => ({ ...user, checked: false }));
      state.loading = false;
    },
    [fetchTableData.rejected]: (state, action) => {
      state.error = action.error.message
      state.loading = false;
    },
    [updateEntry.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [updateEntry.fulfilled]: (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.payload.id);
      state.data[index] = action.payload;
      state.loading = false;
    },
    [updateEntry.rejected]: (state, action) => {
      state.error = action.error.message
      state.loading = false;
    },

  }
})

// Action creators are generated for each case reducer function
export const { setData, setCheckedUsers, setCheckedUsersAll } = reducerData.actions

export default reducerData.reducer