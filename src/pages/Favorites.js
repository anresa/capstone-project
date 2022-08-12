import {IoMdHeart} from 'react-icons/io';

export default function Favorites({handleBookmark, bookmarkedProducts}) {
  return (
    <>
      <h1>Favorites</h1>
      {bookmarkedProducts !== null && bookmarkedProducts.length > 0 ? (
        <>
          <div className="result-card">
            {bookmarkedProducts.map(product => {
              return (
                <section key={product.productId}>
                  <h2 className="result-title">Your Mismo</h2>
                  <h3 className="result-product">{product.productName}</h3>
                  <h4 className="result-country">{product.productCountry}</h4>
                  <img className="result-image" src={product.productImage} alt={product.productName}></img>
                  <IoMdHeart className="icon-favorite" onClick={() => handleBookmark(product.productId)} />
                </section>
              );
            })}
          </div>
        </>
      ) : (
        <span>
          <p>Nothing here yet...</p>
        </span>
      )}{' '}
    </>
  );
}
