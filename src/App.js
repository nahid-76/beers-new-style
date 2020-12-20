import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './components/home'
import ShopingBasket from './components/shopingbasket'
import Favorites from './components/favorites'
import FavsContextProvider from './contexts/favoritescontext';
import ShopingItemsContextProvider from './contexts/shopingitemscontext';
import './App.css';
const App = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <Switch>
          <ShopingItemsContextProvider>
            <FavsContextProvider>
              <Route path={`/home`} component={Home}></Route>
              <Route path={`/favorites`} component={Favorites}></Route>
              <Route path={`/shopingbasket`} component={ShopingBasket}></Route>
              <Redirect from={`/`} exact to={`/home`} />
            </FavsContextProvider>
          </ShopingItemsContextProvider>
        </Switch>
      </div>
    </>
  );
}

export default App;

