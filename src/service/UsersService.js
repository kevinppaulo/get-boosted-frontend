export async function getUsers() {
  const endpoint =
    "https://run.mocky.io/v3/9aa0472a-d0a3-4444-b808-a97784dddd55";
  const request = await fetch(endpoint);
  const response = await request.json();
  return response;
}

export async function getUserById(id) {
  const users = await getUsers();
  return users.find((user) => user.id === id);
}
