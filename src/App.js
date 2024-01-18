import { useState } from 'react';
import './App.css';
import BookList from './components/booklist';

function App() {
  const [bookname, setbookname] = useState(['Mind Platter', 'Shatter Me', 'Letter to the Person I Was']);
  return (
   <>
   <h1>Zozo Book Store</h1>
   <p>Zozo Book Store, nestled in the city, offers a diverse collection from classics to contemporary reads. With a cozy aura and inviting reading nooks, it's a haven for book lovers.</p>
   <BookList name = {bookname}/>
   </>
  );
}

export default App;
