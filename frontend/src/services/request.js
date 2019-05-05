export async function getResponseFromApi() {
  try {
    let response = await fetch('http://localhost:7071/status', {
      method: 'GET'
    });
    let responseJson = await response.json();
    return responseJson.message;
  } catch (error) {
    console.log(error)
  }
}

export async function postUserInfoToApi(cridentials) {
  try {
    let response = await fetch('http://localhost:7071/signup', {
      method: 'POST'
    })
  } catch (error) {
    console.log(error)
  }
}