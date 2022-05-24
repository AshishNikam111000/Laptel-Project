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
          <Route path="/search" exact component={SearchPage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/product" exact component={ProductPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          
          <Route path="/*" component={ErrorPage} />
          <Route path="/home/*" component={ErrorPage} />
          <Route path="/search/*" component={ErrorPage} />
          <Route path="/product/:id/*" component={ErrorPage} />
          <Route path="/product/*" component={ErrorPage} />
          <Route path="/about/*" component={ErrorPage} />
          <Route path="/contact/*" component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
