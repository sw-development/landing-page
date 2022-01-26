import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { BlogPostsAction, BlogPostActionTypes } from './actions';
import { UseBlogPostsState, BlogPostsState } from './intefaces';

const initialState: BlogPostsState = {
  list: [],
  isLoading: false,
  paging: {
    pageSize: 6,
    pageNumber: 1,
    totalCount: 0,
  },
};

const BlogPostsContext = createContext(undefined);

const blogPostsReducer = (
  state: BlogPostsState,
  action: BlogPostsAction
): BlogPostsState => {
  switch (action.type) {
    case BlogPostActionTypes.SetIsLoading: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case BlogPostActionTypes.SetList: {
      return {
        ...state,
        list: action.payload,
      };
    }

    case BlogPostActionTypes.SetPaging: {
      return {
        ...state,
        paging: action.payload,
      };
    }
  }
};

const BlogPostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(blogPostsReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  return (
    <BlogPostsContext.Provider value={value}>
      {children}
    </BlogPostsContext.Provider>
  );
};

const useBlogPosts = () => {
  const { state, dispatch } = useContext<UseBlogPostsState>(BlogPostsContext);

  return {
    state,
    dispatch,
  };
};

export { BlogPostsProvider, useBlogPosts };
