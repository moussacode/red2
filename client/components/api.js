// api.js
const API_BASE_URL = `${baseURL}`;

export const createHotel = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/hotels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create hotel');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchHotels = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/hotels`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch hotels');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching hotels: ' + error.message);
  }
};