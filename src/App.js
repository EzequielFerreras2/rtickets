import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import {useEffect, useState } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import PrivateRoute from "./Router/PrivateRoute";
import AuthProvider from "./Context/AuthContext/AtuhProvider"
import Header from "./Components/Common/NavMenu/Header";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "./firebase/config";
import { login, logout } from "./store/slices/auth";
import PublicRoute from './Router/PublicRoute'

function App() {
var [isNavbarHidden, setIsNavbarHidden] = useState(false);
const dispatch = useDispatch();
const {status } = useSelector(state => state.auth);
const navigate =useNavigate

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
 
  }, [status]);


  
  



  const updateNavbar =()=>{
  if (status !== 'authenticated'){
    setIsNavbarHidden (true);
  }
  else{
    setIsNavbarHidden (false);
  }
    
  }


 useEffect(() => {

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

  useEffect(() => {

      onAuthStateChanged(FirebaseAuth, async(user) => {

       if(!user){
        return dispatch(logout())

       }
       else{

        const {uid,email, displayName, photoURL} =user

        dispatch(login({uid,email, displayName, photoURL}))

       }

      });

    
  }, []);


  return (

      <main className="App" ><Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <DisplayHeader isLoggedIn={isNavbarHidden}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <AuthProvider>
{/* 
                <Routes> 
                    <Route path="/" element={<Layout/>}>

                      <Route element={<PublicRoute/>}>
                        <Route path="/login" isPrivate={false} element={<Login setNavbar={() =>updateNavbar()}/>}/>
                        <Route path="/register" element={<Register/>}/>
                      </Route>
                         
                      <Route element={<PrivateRoute/>}>
                        <Route path="/home" element={<Home setNavbar={() =>updateNavbar()}/>}/>
                        <Route path="/admindashboard" element={<AdminDashboard />}/>
                        <Route path="/userdashboard" element={<UserDashBoard />}/>
                      </Route>

                    </Route>
                    <Route  path="*" isPrivate={true} element={<PageNotFound />} />
                </Routes> */}


                <Routes>
                  { 
                    (status ==='authenticated')
                    ?<Route path="/*" element={<PrivateRoute setNavbar={() =>updateNavbar()}/>}/>
                    :<Route  path="/*" element={<PublicRoute setNavbar={() =>updateNavbar()}/>}/>
                  }
                  


                  
                  
                </Routes>
                                  


                
              </AuthProvider>
          </Box>
       </Box>
       </main>
  );
}

export default App;


