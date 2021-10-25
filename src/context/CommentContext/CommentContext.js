import MovieReducer from "./CommentReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
  error: false,
};

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
