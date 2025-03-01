export default defineEventHandler(async event => {
  // Simulates slow server, so we could see loading status
  await new Promise(resolve => setTimeout(resolve, 1000));

  const id = getRouterParam(event, 'id');
  return $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'});
})
