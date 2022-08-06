import './App.css';
import Home from './pages/Home.js';
import Add from './pages/Add.js';
import Categories from './pages/Categories.js';
import Favorites from './pages/Favorites.js';
import Profile from './pages/Profile.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <nav>
        <Navigation />
      </nav>
    </Router>
  );
}
