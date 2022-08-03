import './Navigation.css';
import {NavLink} from 'react-router-dom';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {IoCopyOutline} from 'react-icons/io5';
import {IoIosMenu} from 'react-icons/io';
import {IoIosHeartEmpty} from 'react-icons/io';
import {IoPersonOutline} from 'react-icons/io5';

// const list = document.querySelectorAll('.list');
// function activeLink() {
//   list.forEach(item => item.classList.remove('active'));
//   this.classList.add('active');
// }
// list.forEach(item => item.addEventListener('click', activeLink));

export default function Navigation() {
  let activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <>
      <div className="navigation">
        <section className="navigation-box">
          <ul>
            <li>
              <NavLink to="add" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoIosAddCircleOutline className="icon" />
                <span className="text">Add</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="categories" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoCopyOutline className="icon" />
                <span className="text">Categories</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoIosMenu className="icon" />
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="favorites" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoIosHeartEmpty className="icon" />
                <span className="text">Favorites</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="profile" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                <IoPersonOutline className="icon" />
                <span className="text">Profile</span>
              </NavLink>
            </li>
            {/* <div className="indicator"></div> */}
          </ul>
        </section>
      </div>
    </>
  );
}
