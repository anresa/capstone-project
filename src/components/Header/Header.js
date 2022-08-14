import './Header.css';
import logo from './mismo-logo.svg';
import header from './header-mismo.png';

export default function Header() {
  return (
    <>
      <div className="header">
        <img className="header-picture" src={header} alt="A picture of a woman sitting by a lake" />
        <img className="logo" src={logo} alt="Mismo Logo" />
      </div>
    </>
  );
}
