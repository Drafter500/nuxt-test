export type TUser = {
  id: string,
  name: string,
}

export default defineEventHandler(() => {
  return $fetch<TUser[]>('https://jsonplaceholder.typicode.com/users');
})
