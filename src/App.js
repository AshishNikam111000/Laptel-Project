/* eslint-disable no-unused-vars */
import './App.css';
import HomePage from './pages/HomePage';
import HomePageL from './pages/HomePageL';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import SearchPage from './pages/SearchPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

import { Switch,  Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
          <Route path="/" exact component={HomePageL} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/*" component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
