import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-api-ebj3.onrender.com/api/books', // Replace with your actual backend URL
  headers: {
    'Content-Type': 'application/json',
  }
});

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

export const fetchBooks = async () => {
  try {
    const response = await api.get('/api/books');
    return response.data as Book[];
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const addBook = async (newBook: Book) => {
  try {
    const response = await api.post('/api/books', newBook);
    return response.data as Book;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const updateBook = async (updatedBook: Book) => {
  try {
    const response = await api.put(`/api/books/${updatedBook.id}`, updatedBook);
    return response.data as Book;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

export const deleteBook = async (bookId: number) => {
  try {
    const response = await api.delete(`/api/books/${bookId}`);
    return response.status === 200; // Assuming deletion returns a status code
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};

export default api;
