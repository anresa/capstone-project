import './Navigation.css';
import {NavLink} from 'react-router-dom';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {IoCopyOutline} from 'react-icons/io5';
import {IoIosHeartEmpty} from 'react-icons/io';
import {IoPersonOutline} from 'react-icons/io5';
import homeIcon from './mismo-icon.svg';

export default function Navigation() {
  const activeStyle = 'indicator';

  return (
    <>
      <div className="navigation">
        <section className="navigation-box">
          <ul>
            <li>
              <NavLink to="add" className={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoIosAddCircleOutline className="icon" />
                <span className="text">Add</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="categories" className={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoCopyOutline className="icon" />
                <span className="text">Categories</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={({isActive}) => (isActive ? activeStyle : undefined)}>
                <img src={homeIcon} className="home-icon" />
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="favorites" className={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoIosHeartEmpty className="icon" />
                <span className="text">Favorites</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="profile" className={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoPersonOutline className="icon" />
                <span className="text">Profile</span>
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
