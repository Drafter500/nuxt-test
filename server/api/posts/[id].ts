import type { TUser } from '../users';
import type { TRawPost } from './types';


export default defineEventHandler(async event => {
  const id = getRouterParam(event, 'id');
  const posts = await $fetch<TRawPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const authors = await $fetch<TUser[]>('/api/users');


  return {
    ...posts,
    authors,
  };
})
