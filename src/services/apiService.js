// src/services/apiService.js
const API_URL = 'https://v2.jokeapi.dev';

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch data failed:', error);
    throw error;
  }
}