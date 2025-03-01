export default defineEventHandler(async event => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const id = getRouterParam(event, 'id');
  return $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'});
})
