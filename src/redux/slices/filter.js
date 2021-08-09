import { createSlice } from '@reduxjs/toolkit';
// import { useSelector, useDispatch } from 'react-redux';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter: (state, action) => {
      return action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export default filterSlice.reducer;
