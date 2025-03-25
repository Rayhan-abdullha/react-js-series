export async function fetchTodoList() {
  const res = fetch('https://jsonplaceholder.typicode.com/todos')
  return (await res).json()
}