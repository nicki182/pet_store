import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const HomeWeb = React.lazy(() => import('home-web/Module'));
const ProductDescriptionWeb = React.lazy(
  () => import('product-description-web/Module')
);
const ProductsWeb = React.lazy(() => import('products-web/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home-web">HomeWeb</Link>
        </li>
        <li>
          <Link to="/product-description-web">ProductDescriptionWeb</Link>
        </li>
        <li>
          <Link to="/products-web">ProductsWeb</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="ui_web" />} />
        <Route path="/home-web" element={<HomeWeb />} />
        <Route
          path="/product-description-web"
          element={<ProductDescriptionWeb />}
        />
        <Route path="/products-web" element={<ProductsWeb />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
