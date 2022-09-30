import Layout from './layout';
import Home from './Pages/home';
import Register from './Pages/registration';
import Login from './Pages/login';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
