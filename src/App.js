import './App.css';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import AddUser from './components/Pages/AddUser/AddUser';
import UpdateUser from './components/Pages/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/user/:id' element={<UpdateUser />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
