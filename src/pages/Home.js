import {useState} from 'react';
import '../App.css';
import Header from '../components/Header/Header.js';
import {Search} from '../components/Search/Search';
// import Navigation from './components/Navigation/Navigation';
import SearchResults from '../components/SearchResults/SearchResults';
import productsDatabase from '../database.js';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  function handleSearchTermChange(changedTerm) {
    setSearchTerm(changedTerm);
  }

  const filteredProducts = productsDatabase.reduce((prev, cur) => {
    return [
      ...prev,
      ...cur.productSet
        .filter(item => item.productName.toLowerCase().startsWith(searchTerm.toLocaleLowerCase()))
        .map(item => {
          return {...item, productSetId: cur.productSetId};
        }),
    ];
  }, []);
  return (
    <>
      <Header />
      <Search onSearchTermChange={handleSearchTermChange} />
      <SearchResults
        products={filteredProducts}
        onSelectProduct={product => {
          alert(JSON.stringify(product));
        }}
      />
      {/* <Navigation /> */}
    </>
  );
}
