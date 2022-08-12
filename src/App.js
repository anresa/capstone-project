import './App.css';
import Home from './pages/Home.js';
import Add from './pages/Add.js';
import Categories from './pages/Categories.js';
import Favorites from './pages/Favorites.js';
import Profile from './pages/Profile.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import {useState, useEffect} from 'react';
import productsDatabase from './database';
import {writeToLocalStorage, loadFromLocalStorage} from './util/localstorage';

let loadDatas = loadFromLocalStorage('bookmarked');
export default function App() {
  const [bookmarkedProducts, setBookmarkedProducts] = useState(() => {
    return loadDatas !== null ? loadDatas : [];
  });
  const handleBookmark = id => {
    const products = productsDatabase.flatMap(category => {
      return category.productSet;
    });
    const productToBookmark = products.find(item => item.productId === id);
    if (productToBookmark !== undefined) {
      loadDatas = loadFromLocalStorage('bookmarked');
      const isBookmarked = loadDatas?.find(data => data.productId === id);
      if (isBookmarked === null) {
        setBookmarkedProducts([...bookmarkedProducts, productToBookmark]);
      } else {
        if (isBookmarked === undefined) {
          setBookmarkedProducts([...bookmarkedProducts, productToBookmark]);
        } else {
          const filteredBookmarks = bookmarkedProducts.filter(bookmark => bookmark.productId !== id);
          setBookmarkedProducts(filteredBookmarks);
        }
      }
    }
  };
  useEffect(() => {
    writeToLocalStorage('bookmarked', bookmarkedProducts);
  }, [bookmarkedProducts]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home handleBookmark={handleBookmark} />} />
        <Route path="/add" element={<Add />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/favorites"
          element={<Favorites handleBookmark={handleBookmark} bookmarkedProducts={bookmarkedProducts} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <nav>
        <Navigation />
      </nav>
    </Router>
  );
}
