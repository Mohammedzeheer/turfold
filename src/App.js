import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/admin/login/AdminLogin'
// import AdminHome from './components/admin/adminHome/AdminHome';
import UserSignup from './components/user/UserSignup/UserSignup';
import UserHomePage from './pages/user/UserHomePage'
import UserLogin from './components/user/UserLogin/UserLogin'
import AdminLayout from './pages/admin/AdminLayout';
// import AdminDashboad from './components/admin/dashboard/AdminDashboard';
// import VenueManager from './components/admin/manager/VenueManager';
import AdminDashboardPage from './pages/admin/adminDashboardPage';
import AdminVenueManagerPage from './pages/admin/AdminVenueManagerPage';
import AdminUsersPage from './pages/admin/adminUsersPage';
import PartnerLogin from './components/partner/login/PartnerLogin';
import PartnerSignup from './components/partner/signup/PartnerSignup';
import PartnerDashboard from './components/partner/Dashboard/PartnerDashboard';
import Sidebar from './components/admin/sidebar/Sidebar';
import Navbar from './components/admin/navbar/Navbar';
import AdminUsers from './components/admin/users/AdminUsers';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        {/* admin */}
        <Route path="/admin" element={<Login />}> </Route>
        {/* <Route path='/users' element={<AdminUsers />}></Route> */}
        <Route path='/adminhome' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboardPage />}></Route>
          <Route path='managers' element={<AdminVenueManagerPage />}></Route>
          <Route path='users' element={<AdminUsers />}></Route>
        </Route>
        
        
        {/* user */}
        <Route path='/signup' element={<UserSignup/>}>  </Route>
        <Route path='/login' element={<UserLogin/>}>  </Route>
        <Route path='/' element={<UserHomePage></UserHomePage>}></Route>


        {/* partner */}
        <Route path='/partnerlogin' element={<PartnerLogin/>}>  </Route>
        <Route path='/partnersignup' element={<PartnerSignup/>}>  </Route>
        <Route path='/partnerdashboard' element={<PartnerDashboard/>}>  </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
