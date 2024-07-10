export default async function FetchCards() {
  try {
    const cardData = [];
    for (let i = 0; i < 8; i++) {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const API_URL = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response failed');
      }
      const pokemon = await response.json();
      cardData.push(pokemon);
    }
    return cardData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
