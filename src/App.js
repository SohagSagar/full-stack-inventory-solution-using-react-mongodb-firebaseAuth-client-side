
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import SignIn from './Components/SignIn/SignIn'
import SignOut from './Components/SignOut/SignOut'
import ManageInventory from './Components/ManageInventory/ManageInventory'
import Header from './SharedComponents/Header/Header';
import Footer from './SharedComponents/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/manage-inventory' element={<ManageInventory/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-out' element={<SignOut/>}></Route>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
