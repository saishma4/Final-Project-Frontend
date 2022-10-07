import Layout from './layout';
import Home from './Pages/home';
import Register from './Pages/registration';
import Login from './Pages/login';
import DollsPage from './Pages/DollsPage';
import DollDetailPage from './Pages/DollDetailPage';
import CartPage from './Pages/CartPage';
import Payment from './Pages/Payment';
import About from './Pages/about';
import Contact from './Pages/contact';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Register />} />
        <Route path="/dolls" element={<DollsPage />} />
        <Route path="/dolls/:id" element={<DollDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/payment'element={<Payment />}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/contactus' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
