import './Header.css';
import logo from './mismo-logo.svg';

export default function Header() {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="Mismo Logo" />
      </div>
    </>
  );
}
