import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: (state, action) => {
      return state.filter(post => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;