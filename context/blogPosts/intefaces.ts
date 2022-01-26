import { BlogPostsAction } from './actions';

export interface Post {
  id: string;
  slug: string;
  description: string;
  title: string;
  timestamp: string;
  previewImg: {
    url: string
  }
}

export interface Paging {
  pageSize: number;
  pageNumber: number;
  totalCount: number;
}

export interface BlogPostsState {
  list: Post[];
  isLoading: boolean;
  paging: Paging;
}

export interface UseBlogPostsState {
  state: BlogPostsState;
  dispatch: (action: BlogPostsAction) => void;
}
