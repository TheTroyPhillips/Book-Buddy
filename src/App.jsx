import { useState, useEffect } from 'react'
import './App.css'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //check if the user is logged in
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <></>
  )
}

export default App
