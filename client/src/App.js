import {ShopProvider} from './Context'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navigation from './Navigation'
import Shop from './Shop'
import './css/style.css'
import Cart from './Cart';
import ItemInfo from './ItemInfo';
import Favourites from './Favourites';
import History from './History'
import Particles from './Particles'

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="App" style={{display:"flex",flexFlow:"column"}}>
          <Navigation/>
          <div className="main_container">
            <Particles/>
            <Route path='/api/shop' component={Shop}></Route>
            <Route path='/api/cart' component={Cart}></Route>
            <Route path='/api/item-info' component={ItemInfo}></Route>
            <Route path='/api/favourites' component={Favourites}></Route>
            <Route path='/api/purchase-history' component={History}></Route>
          </div>
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
