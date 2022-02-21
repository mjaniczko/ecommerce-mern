import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

import Cart from './views/Cart';
import Home from './views/Home';
import Product from './views/Product';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import Shipping from './views/Shipping';
import PaymentMethod from './views/PaymentMethod';
import PlaceOrder from './views/PlaceOrder';
import Order from './views/Order';
import UserList from './views/UserList';
import UserEdit from './views/UserEdit';
import ProductList from './views/ProductList';
import ProductEdit from './views/ProductEdit';
import OrderList from './views/OrderList';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/order/:id' component={Order} />
          <Route path='/placeorder' component={PlaceOrder} />
          <Route path='/payment' component={PaymentMethod} />
          <Route path='/product/:id' component={Product} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/admin/userlist' component={UserList} />
          <Route exact path='/admin/productlist' component={ProductList} />
          <Route
            exact
            path='/admin/productlist/:pageNumber'
            component={ProductList}
          />
          <Route path='/admin/orderlist' component={OrderList} />
          <Route path='/admin/user/:id/edit' component={UserEdit} />
          <Route path='/admin/product/:id/edit' component={ProductEdit} />
          <Route exact path='/search/:keyword' component={Home} />
          <Route path='/page/:pageNumber' component={Home} />
          <Route path='/search/:keyword/page/:pageNumber' component={Home} />
          <Route exact path='/' component={Home} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
