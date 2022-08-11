import './SearchResults.css';
import {IoIosHeartEmpty} from 'react-icons/io';
import {IoChevronBackOutline} from 'react-icons/io5';

export default function SearchResults({setOpenProductCard, searchFinalResult}) {
  return (
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

        <IoIosHeartEmpty className="icon-favorite" />
      </section>
    </div>
  );
}
