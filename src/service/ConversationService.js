async function getConversations() {
  const endpoint =
    "https://run.mocky.io/v3/af8849bd-e765-4d65-93cd-f78632b09af7";
  const request = await fetch(endpoint);
  const response = await request.json();
  return response;
}

export default getConversations;
