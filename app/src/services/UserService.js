export async function createUser(data) {
    const response = await fetch(`/result`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
      console.log("createuser");
      console.log(data);
    return await response.json();
}
