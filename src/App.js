import Layout from './layout';
import Home from './Pages/home';
import Register from './Pages/registration';
import Login from './Pages/login';
import DollsPage from './Pages/DollsPage';
import DollDetailPage from './Pages/DollDetailPage';
import CartPage from './Pages/CartPage';
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
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
