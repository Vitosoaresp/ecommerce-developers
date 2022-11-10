import { Route, Switch } from 'react-router-dom';

import { CategoryProducts } from './pages/CategoryProducts';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

export function Routes() {
  return (
    <Switch>
      <Route path="/category/:categoryId/products">
        <CategoryProducts />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/" >
        <Home />
      </Route>
    </Switch>
  );
}