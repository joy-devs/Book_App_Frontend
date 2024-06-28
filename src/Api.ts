import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-api-ebj3.onrender.com/api/books',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

// export const fetchBooks = async () => {
//   try {
//     const response = await api.get<Book[]>('/'); // Adjust endpoint if necessary
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching books:', error);
//     throw error;
//   }
// };

export const fetchBooks = async () => {
  try {
    const response = await axios.get('https://backend-api-ebj3.onrender.com/api/books'); // Adjust endpoint if necessary
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const addBook = async (newBook: Book) => {
  try {
    const response = await api.post<Book>('/', newBook); // Adjust endpoint if necessary
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const updateBook = async (updatedBook: Book) => {
  try {
    const response = await api.put<Book>(`/${updatedBook.id}`, updatedBook); // Adjust endpoint if necessary
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

export const deleteBook = async (bookId: number) => {
  try {
    const response = await api.delete(`/${bookId}`); // Adjust endpoint if necessary
    return response.status === 200; // Assuming deletion returns a status code
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};

export default api;
