import Header from "./layout/Header";
import Footer from './pages/footer/Footer';
import Home from './Home.jsx';
import ProductsView from './pages/productsview';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/login";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="header">
          <Header />
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsView />} />
          <Route path='/login' element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
