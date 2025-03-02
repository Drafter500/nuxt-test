import type { TUser } from '~/server/api/users';

export type TRawPost = {
  id: string,
  title: string,
  body: string,
  userId: string,
}
export type TPost = TRawPost & {userName: string};
export type TEditPostData = TRawPost & {users: TUser[]};
