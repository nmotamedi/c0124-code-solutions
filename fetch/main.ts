async function getJSON(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const responseJSON = await response.json();
    console.log(responseJSON);
  } catch (e) {
    console.log('There was been a problem with your fetch: ', e);
  }
}

getJSON('https://jsonplaceholder.typicode.com/users');
getJSON('https://pokeapi.co/api/v2/pokemon/meowth/');
