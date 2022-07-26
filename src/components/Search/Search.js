import {useState} from 'react';
import './Search.css';

export default function Search() {
  const [product, setProduct] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    setProduct(event.target.value);
  }

  function handleChange(event) {
    const product = event.target.value;
  }

  return (
    <>
      <section className="search">
        <form onSubmit={submitHandler}>
          <label>
            Search for Mismo:
            <input className="searchbar" value={product} onChange={handleChange} />
          </label>
          <button>Mismo!</button>
        </form>
      </section>
    </>
  );
}
