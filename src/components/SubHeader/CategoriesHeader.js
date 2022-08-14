import './SubHeader.css';
import logo from '../Header/mismo-logo.svg';

export default function CategoriesHeader() {
  return (
    <>
      <img className="logo-small" src={logo} alt="Mismo Logo" />
      <div className="cutout"></div>
      <img
        className="subheader-picture"
        src="https://images.unsplash.com/photo-1520645521318-f03a712f0e67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="A picture of travel items on a map"
      />
      <h1 className="subheader-title">CATEGORIES</h1>
    </>
  );
}
