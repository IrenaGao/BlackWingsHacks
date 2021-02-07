export async function getUserInfo() {

    const response = await fetch('/getresult', {
        headers: {'Content-Type': 'application/json',
                    'Accept': 'application/json'
    }
    });
    return await response;
}

export async function createUser(data) {
    const response = await fetch(`/result`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return response;
}
