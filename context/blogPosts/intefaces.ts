import { BlogPostsAction } from './actions';

export interface Post {
  slug: string;
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
  dispatch: BlogPostsAction;
}
