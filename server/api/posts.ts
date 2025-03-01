type TRawPost = {
  id: string,
  title: string,
  body: string,
  userId: string,
}

type TUser = {
  id: string,
  name: string,
}

export type TPost = TRawPost & {userName: string};

export default defineEventHandler(async event => {
  const posts = await $fetch<TRawPost[]>('https://jsonplaceholder.typicode.com/posts');
  const users = await $fetch<TUser[]>('https://jsonplaceholder.typicode.com/users');

  // Add username to each post
  // of course this is not how things should work, the posts endpoint should ideally get the
  // username from the DB and return it.
  // In current situation we can also fetch a user by ID for each post, this will be more reliable
  // but is overkill because it means 100 requests at once! So I assume users request contains all
  // users we have in our posts
  return posts.map(
    post => ({
      ...post,
      userName: users.find(user => user.id === post.userId)?.name,
    }),
  );
})
