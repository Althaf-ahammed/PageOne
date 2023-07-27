import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/loginPage/LoginPage';
import AddBookForm from './components/addbookForm/AddBookForm';
import BooksTable from './components/table/BooksTable';
import UserBookView from './components/userBooksView/UserBookView';
import Cart from './pages/cart/Cart';
import EditableForm from './components/editform/EditableForm';
// import AboutUs from './pages/aboutUs/AboutUs';
import AdminOrders from './pages/adminOrders/AdminOrders';
import PurchaseBookPage from './pages/purchaseBook/PurchaseBookPage';
import NotFound from './pages/404 Page/NotFound';
import Employee from './pages/employee/Employee';
import AddEmployeeForm from './components/addEmployeeForm/AddEmployeeForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<SignupPage/>}></Route>
          <Route path='/addbook' element={<AddBookForm />}></Route>
          <Route path='/booktable' element={<BooksTable/>}></Route>
          <Route path='/' element={<UserBookView/>}></Route>
          <Route path='/addCart/:id' element={<Cart/>}></Route>
          <Route path='/search/:title' element={<UserBookView/>}></Route>
          <Route path='/editBook/:id' element={<EditableForm/>} ></Route>
          {/* <Route path='/aboutUS' element={<AboutUs/>} ></Route> */}
          <Route path='/orders' element={<AdminOrders/>}></Route>
          <Route path='/purchaseBook' element={<PurchaseBookPage/>} ></Route>
          <Route path='/employee' element={<Employee/>}></Route>
          <Route path='/addEmployeeForm' element={<AddEmployeeForm/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
