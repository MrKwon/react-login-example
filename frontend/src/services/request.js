export async function getResponseFromApi() {
  try {
    let response = await fetch('http://localhost:7071/status', {
      method: 'GET'
    });
    let responseJson = await response.json();
    console.log(responseJson)
    return responseJson.message;
  } catch (error) {
    console.log(error);
  }
}

export async function postUserInfoToApi(cridentials) {
  try {
    let response = await fetch('http://localhost:7071/register', {
      method: 'POST',
      headers: { // node 에 json 으로 날릴 때는 header를 달아줘야 하는듯?
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cridentials)
    })
    let responseJson = await response.json();
    // console.log(responseJson.message) // 잘 나옴
    return responseJson.message
  } catch (error) {
    console.log(error);
  }
}