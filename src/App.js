import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Navigation from './components/Navigation/Navigation';

export default function App() {
  return (
    <>
      <Header />
      <Search />
      <Navigation />
    </>
  );
}
