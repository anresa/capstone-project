import {useState} from 'react';
import '../App.css';
import Header from '../components/Header/Header.js';
import {Search} from '../components/Search/Search';
import CategoriesCard from '../components/CategoriesCard/CategoriesCard.js';
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
      <CategoriesCard />
    </>
  );
}
