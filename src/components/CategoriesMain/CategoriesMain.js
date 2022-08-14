import './CategoriesMain.css';

export default function CategoriesMain() {
  return (
    <>
      <div className="container">
        <img
          className="groceries-picture"
          src="https://images.unsplash.com/photo-1603189864792-cb81bf683b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Groceries"
        />
        <h2 className="groceries-title">Groceries</h2>
        <img
          className="pharmacys-picture"
          src="https://images.unsplash.com/photo-1567333971983-7ba18485eaad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Pharmacy"
        />
        <h2 className="pharmacy-title">Pharmacy</h2>
        <img
          className="personal-care-picture"
          src="https://images.unsplash.com/photo-1575410229391-19b4da01cc94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          alt="Personal Care"
        />
        <h2 className="personal-care-title">Personal Care</h2>
      </div>
    </>
  );
}
