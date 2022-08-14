import './SearchResults.css';
import {IoIosHeartEmpty} from 'react-icons/io';
import {IoChevronBackOutline} from 'react-icons/io5';
import {IoMdHeart} from 'react-icons/io';
import {useState} from 'react';

export default function SearchResults({setOpenProductCard, searchFinalResult, handleBookmark}) {
  const [bookMarked, setBookMarked] = useState(false);
  return (
    <div className="container">
      <div className="result-card">
        <button
          onClick={() => {
            setOpenProductCard(false);
          }}
        >
          <IoChevronBackOutline className="icon-exit" />
        </button>
        <section>
          <h2 className="result-title">Your Mismo</h2>
          <h3 className="result-product">{searchFinalResult.productName}</h3>
          <h4 className="result-country">{searchFinalResult.productCountry}</h4>
          <img className="result-image" src={searchFinalResult.productImage} alt={searchFinalResult.productName}></img>
          {bookMarked === true ? (
            <IoMdHeart
              className="icon-favorite"
              onClick={() => {
                handleBookmark(searchFinalResult.productId);
                setBookMarked(false);
              }}
            />
          ) : (
            <IoIosHeartEmpty
              className="icon-favorite"
              onClick={() => {
                handleBookmark(searchFinalResult.productId);
                setBookMarked(true);
              }}
            />
          )}
        </section>
      </div>
    </div>
  );
}
