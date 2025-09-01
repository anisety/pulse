// A simple API client to interact with the backend

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

export const extractData = async (text) => {
  const response = await fetch(`${API_URL}/extract`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from the backend');
  }

  return response.json();
};
