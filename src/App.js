
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import SignIn from './Components/SignIn/SignIn'
import SignOut from './Components/SignOut/SignOut'
import ManageInventory from './Components/ManageInventory/ManageInventory'
import Header from './SharedComponents/Header/Header';
import Footer from './SharedComponents/Footer/Footer'
import Register from './Components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Utilities/RequireAuth/RequireAuth';
import MyItems from '../src/Components/MyItems/MyItems';
import AddItems from '../src/Components/AddItems/AddItems';
import PageNotFound from '../src/Utilities/PageNotFound/PageNotFound';
import UpdateInventory from './Components/UpdateInventory/UpdateInventory';
import Contract from './Components/Home/Contract/Contract';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-out' element={<SignOut />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/contract' element={<Contract />}></Route>

        <Route path='*' element={<PageNotFound />}></Route>

        {/* protected routes */}

        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>

        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>

        <Route path='/add-items' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        }></Route>

        <Route path='/update-inventory/:id' element={
          <RequireAuth>
            <UpdateInventory />
          </RequireAuth>
        }></Route>



      </Routes>

      <Footer />
      <ToastContainer />

    </div>
  );
}

export default App;
