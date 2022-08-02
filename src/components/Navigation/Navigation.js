import './Navigation.css';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {IoCopyOutline} from 'react-icons/io5';
import {IoIosMenu} from 'react-icons/io';
import {IoIosHeartEmpty} from 'react-icons/io';
import {IoPersonOutline} from 'react-icons/io5';

const list = document.querySelectorAll('.list');
function activeLink() {
  list.forEach(item => item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach(item => item.addEventListener('click', activeLink));

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <section className="navigation-box">
          <ul>
            <li className="list active">
              <a href="/add">
                <IoIosAddCircleOutline className="icon" />
                <span className="text">Add</span>
              </a>
            </li>
            <li className="list">
              <a href="/categories">
                <IoCopyOutline className="icon" />
                <span className="text">Categories</span>
              </a>
            </li>
            <li className="list">
              <a href="/">
                <IoIosMenu className="icon" />
                <span className="text">Home</span>
              </a>
            </li>
            <li className="list">
              <a href="/favorites">
                <IoIosHeartEmpty className="icon" />
                <span className="text">Favorites</span>
              </a>
            </li>
            <li className="list">
              <a href="/profile">
                <IoPersonOutline className="icon" />
                <span className="text">Profile</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </section>
      </div>
    </>
  );
}
