import {useState} from 'react';
import '../App.css';
import Header from '../components/Header/Header.js';
import {Search} from '../components/Search/Search';
import productsDatabase from '../database.js';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  function handleSearchTermChange(changedTerm) {
    setSearchTerm(changedTerm);
  }

  return (
    <>
      <Header />
      <Search productsDatabase={productsDatabase} onSearchTermChange={handleSearchTermChange} />
    </>
  );
}
