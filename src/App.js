import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import {useEffect, useState } from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import PrivateRoute from "./Router/PrivateRoute";
import AuthProvider from "./Context/AuthContext/AtuhProvider"
import Header from "./Components/Common/NavMenu/Header";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "./firebase/config";
import { login, logout } from "./store/slices/auth";
import PublicRoute from './Router/PublicRoute'
import Layout from "./Layout";
import Login from "./Components/Auth/Login/Login";
import Home from "./Components/DashBoard/Home";
import AdminDashboard from "./Components/DashBoard/AdminDashBoard/AdminDashboard";
import UserDashBoard from "./Components/DashBoard/UserDashBoard/UserDashBoard";
import Register from "./Components/Auth/Register/Register"
import Account from "./Components/Auth/Account/Account";
import Dashboard from "./Components/DashBoard/Dashboard";



function App() {
var [isNavbarHidden, setIsNavbarHidden] = useState(false);
const dispatch = useDispatch();
const {status } = useSelector(state => state.auth);


  const DisplayHeader= (props) =>{
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn !== true ) {
      return (
        <Header/>
      )   
    }
  }

  useEffect(() => {

    updateNavbar();
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);


  const updateNavbar =()=>{
  if (status === 'checking' || status === 'not-authenticated'){
    setIsNavbarHidden (true);
  }
  else{
    setIsNavbarHidden (false);
  }
  }

  useEffect(() => {

    onAuthStateChanged(FirebaseAuth, async(user) => {

     if(!user){

      
      localStorage.removeItem('user')
      return   dispatch(logout())

     }
     else{

      if(user.providerId ==='firebase')

      {
        localStorage.setItem('user',JSON.stringify(user))
        
        const storeUser = JSON.parse(localStorage.getItem('user'))

        const {uid,email, displayName, photoURL,rol,providerId} =storeUser
  
        dispatch(login({uid,email, displayName, photoURL,rol,providerId}))

      }

      else{

        const storeUser = JSON.parse(localStorage.getItem('user'))

        const {uid,email, displayName, photoURL,rol,providerId} =storeUser
  
        dispatch(login({uid,email, displayName, photoURL,rol,providerId}))
      }

     
      

     }

    });

  

}, []);


 useEffect(() => {


  onAuthStateChanged(FirebaseAuth, async(user) => {

    console.log(user)
   
   });

 

  if( status === 'checking')
  {
    Swal.fire({
      title: `${status}...`,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
          Swal.showLoading()
      },
  });
  }

   else
  {
    Swal.close();
  }
  
 }, [status]);

  

  return (

      <main className="App" ><Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <DisplayHeader isLoggedIn={isNavbarHidden}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <AuthProvider>
              <br/>
              <br/>
                <Routes> 
                  
                    <Route path="/" element={<Layout/>}>

                      <Route element={<PublicRoute/>}>
                        <Route path="/login" isPrivate={false} element={<Login setNavbar={() =>updateNavbar()}/>}/>
                        <Route path="/login/register" element={<Register/>}/>
                        
                      </Route>
                         
                      <Route element={<PrivateRoute/>}>
                        <Route path="/home" element={<Home setNavbar={() =>updateNavbar()}/>}/>
                        <Route path="/admindashboard" element={<AdminDashboard />}/>
                        <Route path="/userdashboard" element={<UserDashBoard />}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/account" element={<Account/>}/>
                       
                      </Route>

                      <Route  path="*" isPrivate={true} element={ status === 'authenticated' ? <Navigate to="/home"/> : <Navigate to="/login"/>} />
                    </Route>
                      <Route  path="/" element={ status === 'authenticated' ? <Navigate to="/home"/> : <Navigate to="/login"/>} />
                      
                     
                </Routes>


                {/* <Routes>
                  { 
                    (status ==='authenticated')
                    ?<Route path="/auth/*" element={<PrivateRoute setNavbar={() =>updateNavbar()}/>}/>
                    :<Route  path="/*" element={<PublicRoute setNavbar={() =>updateNavbar()}/>}/>
                  }
                  

                  <Route path='/*' element={<Navigate to="/auth/login"/>}/>
                  
                  
                </Routes>
                                   */}


                
              </AuthProvider>
          </Box>
       </Box>
       </main>
  );
}

export default App;


