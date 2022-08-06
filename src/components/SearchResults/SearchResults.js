import './SearchResults.css';

export default function SearchResults({setOpenProductCard, searchFinalResult}) {
  return (
    <div className="result-card">
      <button
        onClick={() => {
          setOpenProductCard(false);
        }}
      >
        X
      </button>
      <section>
        <h1>{searchFinalResult.productName}</h1>
        <p>{searchFinalResult.productCountry}</p>
        <img width={'100px'} src={searchFinalResult.productImage} alt={searchFinalResult.productName}></img>
      </section>
    </div>
  );
}
