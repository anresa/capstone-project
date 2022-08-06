import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import './Search.css';
import SearchResults from '../SearchResults/SearchResults';

export function Search({productsDatabase, onSearchTermChange}) {
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
      <section className="search">
        <form onSubmit={submitHandler}>
          <select onChange={onHandleChangeLanguage}>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
            <option value="Mexico">Mexico</option>
          </select>
          <label>
            Search for Mismo:
            <input list="productList" type={'text'} className="searchbar" value={searchTerm} onChange={handleChange} />
          </label>
          <datalist id="productList">
            {productsDatas.map(item => {
              return <option key={nanoid()}>{item.productName}</option>;
            })}
          </datalist>

          <button>Mismo!</button>
        </form>
        <button onClick={() => setSearchTerm('')}>X</button>
      </section>
      {openProductCard === true ? (
        <SearchResults setOpenProductCard={setOpenProductCard} searchFinalResult={searchFinalResult}></SearchResults>
      ) : (
        ''
      )}
    </>
  );
}
