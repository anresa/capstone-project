import './CategoriesCard.css';

export default function CategoriesCard() {
  return (
    <>
      <h2 className="categories-title">Categories</h2>
      <section className="categories-card">
        <img className="groceries-image" src={require('./groceries.jpg')} alt="Groceries Image" />
        <p className="groceries-tag">Groceries</p>
        <img className="pharmacy-image" src={require('./pharmacy.jpg')} alt="Pharmacy Image" />
        <p className="pharmacy-tag">Pharmacy</p>
        <img className="personal-care-image" src={require('./personal-care.jpg')} alt="Personal Care Image" />
        <p className="personal-care-tag">Personal Care</p>
      </section>
    </>
  );
}
