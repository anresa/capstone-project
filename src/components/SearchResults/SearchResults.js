import './SearchResults.css';

export default function SearchResults({products, onSelectProduct}) {
  return (
    <>
      <ul className="result-card">
        {products.map(product => {
          return (
            <li
              className="result"
              onClick={() => {
                onSelectProduct(product);
              }}
              key={product.id}
            >
              {product.productName}
            </li>
          );
        })}
      </ul>
    </>
  );
}
