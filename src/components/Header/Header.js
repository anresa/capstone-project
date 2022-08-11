import './Header.css';
import logo from './mismo-logo.svg';
import header from './header-mismo.png';

export default function Header() {
  return (
    <>
      <div className="header">
        <img className="header-picture" src={header} alt="Header Picture" />
        <img className="logo" src={logo} alt="Mismo Logo" />
      </div>
    </>
  );
}
