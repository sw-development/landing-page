import { Paging, Post } from './intefaces';

export enum BlogPostActionTypes {
  SetPaging = 'setPaging',
  SetList = 'setList',
  SetIsLoading = 'setIsLoading',
}

export interface BlogPostSetListAction {
  type: BlogPostActionTypes.SetList;
  payload: Post[];
}

export interface BlogPostSetPagingAction {
  type: BlogPostActionTypes.SetPaging;
  payload: Paging;
}

export interface BlogPostSetIsLoadingAction {
  type: BlogPostActionTypes.SetIsLoading;
  payload: boolean;
}

export type BlogPostsAction =
  | BlogPostSetIsLoadingAction
  | BlogPostSetListAction
  | BlogPostSetPagingAction;
