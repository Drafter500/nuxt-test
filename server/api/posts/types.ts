import type { TUser } from '~/server/api/users';

export type TPost = TRawPost & {userName: string};
export type TEditPostData = TRawPost & {users: TUser[]};
