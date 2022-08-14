import {IoMdHeart} from 'react-icons/io';
import FavoritesHeader from '../components/SubHeader/FavoritesHeader.js';
import '../components/SearchResults/SearchResults.css';

export default function Favorites({handleBookmark, bookmarkedProducts}) {
  return (
    <>
      <FavoritesHeader />
      {bookmarkedProducts !== null && bookmarkedProducts.length > 0 ? (
        <>
          <div className="container">
            {bookmarkedProducts.map(product => {
              return (
                <section key={product.productId}>
                  <div className="result-card">
                    <h2 className="result-title">Your Mismo</h2>
                    <h3 className="result-product">{product.productName}</h3>
                    <h4 className="result-country">{product.productCountry}</h4>
                    <img className="result-image" src={product.productImage} alt={product.productName}></img>
                    <IoMdHeart className="icon-favorite" onClick={() => handleBookmark(product.productId)} />
                  </div>
                </section>
              );
            })}
          </div>
        </>
      ) : (
        <span>
          <p className="no-favorites-message">Nothing here yet...</p>
        </span>
      )}{' '}
    </>
  );
}
