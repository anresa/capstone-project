import {useState} from 'react';
import './Search.css';

export function Search({onSearchTermChange}) {
  const [searchTerm, setSearchTerm] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    onSearchTermChange(searchTerm);
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
    onSearchTermChange(searchTerm);
  }

  return (
    <>
      <section className="search">
        <form onSubmit={submitHandler}>
          <label>
            Search for Mismo:
            <input className="searchbar" value={searchTerm} onChange={handleChange} />
          </label>
          <button>Mismo!</button>
        </form>
      </section>
    </>
  );
}
