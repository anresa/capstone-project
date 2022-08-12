import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import './Search.css';
import SearchResults from '../SearchResults/SearchResults';
import {ReactComponent as CTA} from './mismo-cta.svg';
import {IoCloseOutline} from 'react-icons/io5';
import {IoSearchOutline} from 'react-icons/io5';

export function Search({productsDatabase, onSearchTermChange, handleBookmark}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFinalResult, setSearchFinalResult] = useState('');
  const [openProductCard, setOpenProductCard] = useState(false);
  const [searchLanguage, setSearchLanguage] = useState('Germany');

  function submitHandler(event) {
    event.preventDefault();
    setOpenProductCard(true);
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
    onSearchTermChange(searchTerm);
  }

  function onHandleChangeLanguage(event) {
    setSearchLanguage(event.target.value);
  }

  let productsDatas = [];

  productsDatabase.forEach(products => {
    products.productSet.forEach(item => {
      productsDatas.push({
        productSetId: products.productSetId,
        productCountry: item.productCountry,
        productName: item.productName,
      });
    });
  });

  useEffect(() => {
    const searchTermResult = productsDatas.find(item =>
      item.productName.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())
    );

    let finalResult = '';
    if (searchTermResult !== undefined) {
      const productSet = productsDatabase.find(obj => obj.productSetId === searchTermResult.productSetId);
      finalResult = productSet.productSet.find(obj => obj.productCountry === searchLanguage);
      setSearchFinalResult(finalResult);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openProductCard]);

  return (
    <>
      <h2 className="search-title">Search</h2>
      <section className="search">
        <form onSubmit={submitHandler}>
          <input
            list="productList"
            type={'text'}
            className="searchbar"
            name="searchbar"
            value={searchTerm}
            onChange={handleChange}
          />
          <datalist id="productList">
            {productsDatas.map(item => {
              return <option key={nanoid()}>{item.productName}</option>;
            })}
          </datalist>
          <select className="dropdown" name="dropdown" onChange={onHandleChangeLanguage}>
            <option value="Australia">Australia</option>
            <option value="Belgium">Belgium</option>
            <option value="Canada">Canada</option>
            <option value="Canary Islands">Canary Islands</option>
            <option value="England">England</option>
            <option value="Fiji">Fiji</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Korea">Korea</option>
            <option value="Malta">Malta</option>
            <option value="Mexico">Mexico</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Norway">Norway</option>
            <option value="Scotland">Scotland</option>
            <option value="USA">USA</option>
          </select>
          <IoSearchOutline className="search-icon" />
          <button>
            {''}
            <CTA className="submit-button" />
          </button>
        </form>
        <button onClick={() => setSearchTerm('')}>
          <IoCloseOutline className="exit-icon" />
        </button>
      </section>
      {openProductCard === true ? (
        <SearchResults
          setOpenProductCard={setOpenProductCard}
          searchFinalResult={searchFinalResult}
          handleBookmark={handleBookmark}
        ></SearchResults>
      ) : (
        ''
      )}
    </>
  );
}
