import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import SimpleNav from './Components/SimpleNav';
import Login from './Components/Login';
import Home from './Components/Home';
import ProtectRoutes from './Components/ProtectRoutes';
import { useSelector } from 'react-redux';


function App() {
  // const isAuth = useSelector(state => state.auth.isAuthenticated);
  // console.log(isAuth);
  // const isAuth = useSelector(state=>state.isAuthenticated);
  // console.log(isAuth);
  return (

    <Router>
      <SimpleNav />
      <Routes>
        <Route path='/' element={<ProtectRoutes />}>
          <Route exact path='/' element={<Home />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </Router>


  );
}

export default App;
