import React from 'react';
import { makeStyles } from '@fluentui/react-components';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import AboutPage from './pages/about';
import { Navbar } from './components/navbar';
import { CommentsPage } from './pages/comments';
import { NoMatchPage } from './pages/nomatch';
import { ProductListPage } from './pages/products/list';
import { NewProductsPage } from './pages/products/newproducts';
import { FeaturedProductsPage } from './pages/products/featuredproducts';

function App() {
  return (
    <div>
      <Navbar />
      <br></br>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/comments" element={<CommentsPage />} />
        <Route path="/products" element={<ProductListPage />}>
          <Route index element={<FeaturedProductsPage />} />
          <Route path="newproducts" element={<NewProductsPage />} />
          <Route path="featuredproducts" element={<FeaturedProductsPage />} />
        </Route>
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
