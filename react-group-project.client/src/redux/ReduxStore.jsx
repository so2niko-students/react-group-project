import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostsSlice.jsx';

const ReduxStore = configureStore({
  reducer: {
    postsReducer,
  }, // add reducers here
});

export default ReduxStore;