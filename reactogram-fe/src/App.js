import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './Components/Screen/Login';
import Signup from './Components/Screen/Signup';
import Navbar from './Components/Layout/Navbar';
import PostOverview from './Components/Pages/PostOverview';
// import Card from './Components/Pages/Card';
import Card from './Components/Pages/Card' ;
import Profile from './Components/Pages/Profile';



import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.userReducer);

    useEffect(() => {

      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {//when user has a login active session
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        navigate("/posts");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/login");
      }
    }, []);

    return (
      <Routes>
        <Route exact path="/" element={<PostOverview />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/posts" element={<PostOverview />}></Route>
        <Route exact path="/myprofile" element={<Profile />}></Route>
      </Routes>
    )
  }


  return (
    <div className='app-bg'>
      <Router>
        <Navbar />
        <DynamicRouting />
      </Router>
    </div>
  );
}


export default App;
