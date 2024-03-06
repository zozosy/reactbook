import { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/booklist';
import Addbookform from './components/addbookform';



function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://65e7d0da53d564627a8f4c3d.mockapi.io/book');
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      } else {
        console.error('Failed to fetch books:', response.status);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleAddBook = async (bookName) => {
    try {
      const response = await fetch('https://65e7d0da53d564627a8f4c3d.mockapi.io/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: bookName }),
      });
      if (response.ok) {
        fetchBooks();
      } else {
        console.error('Failed to add book:', response.status);
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleRemoveBook = async (id) => {
    try {
      const response = await fetch(`https://65e7d0da53d564627a8f4c3d.mockapi.io/book/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchBooks();
      } else {
        console.error('Failed to delete book:', response.status);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <>
      <h1>Zozo's Book Store</h1>
      <p>Welcome to Zozo's Literary Oasis, where every page holds the promise of adventure and enlightenment. Dive into tales that stir the imagination and resonate with the depths of the soul. Here, each word is a doorway to boundless realms and infinite horizons. Let your journey begin, and let the magic of storytelling transport you to places beyond imagination to new realms and endless possibilities.</p>
      <BookList name={books} onRemove={handleRemoveBook} />
      <Addbookform form={handleAddBook} />    </>
  );
}



export default App;
