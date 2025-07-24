

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async () => {
  try {
    const response = await fetch('/api/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Simulate API delay for mock data
    await delay(500);
    return mockProducts;
  }
};

export const fetchMeals = async () => {
  try {
    const response = await fetch('/api/meals');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching meals:', error);
    // Simulate API delay for mock data
    await delay(500);
    return mockMeals;
  }
};

export const optimizeOrder = async (items) => {
  try {
    const response = await fetch('/api/orders/optimize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error optimizing order:', error);
    // Simulate API delay for mock data
    await delay(1000);
    throw error; // Let the hook handle the fallback
  }
};