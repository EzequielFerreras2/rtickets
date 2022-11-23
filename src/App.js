import { Home, Login } from "@mui/icons-material";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AdminDashboard from "./Components/DashBoard/AdminDashBoard/AdminDashboard";
import UserDashBoard from "./Components/DashBoard/UserDashBoard/UserDashBoard";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Layout from "./Layout";
import PrivateRoute from "./Router/PrivateRoute";
import AppRouter from "./Router/AppRouter"
import AuthProvider from "./Context/AuthContext/AtuhProvider"
import Header from "./Components/Common/NavMenu/Header";
import {AuthContext} from "./Context/AuthContext/AuthContext"

function App() {
  var [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const {authState} = useContext(AuthContext);



  const DisplayHeader= (props) =>{
    const isLoggedIn = props.isLoggedIn;
    console.log(props)
    if (!isLoggedIn ) {
      return <h1>

        <Header/>

      </h1>;
    }
  }

  useEffect(() => {
    updatenavbar();
 
  }, []);


  const updatenavbar =()=>{

    const user = authState.logged
    // let user = localStorage.getItem('User')
  // ? JSON.parse(localStorage.getItem('User')).Token
  // : '';
  console.log('user')
    console.log(user)
  if (user !==''){
    setIsNavbarHidden (true);
  }else{
    setIsNavbarHidden (false);
  }
    
  }


  return (
   <>
    <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <DisplayHeader isLoggedIn={isNavbarHidden}/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <AuthProvider>
          
            <Route>
              <AppRouter setnavbar={() =>updatenavbar()}/>
            </Route>
             {/* <Route path="/" element={<Layout/>}>
             {/* setNavbar={() =>updateNavbar()}

                <Route  path="login" isPrivate={false} element={<Login />}/>

                
             
                    <Route path="/home" element={<Home />}/>
                    <Route path="/admindashboard" element={<AdminDashboard />}/>
                    <Route path="/userdashboard" element={<UserDashBoard />}/>
               
               
          
              <Route path="/login" element={<Login />}/>
        
                        <Route  path="*" isPrivate={true} element={<PageNotFound/>} />         
            </Route>*/}

              

          
          </AuthProvider>
   </Box>
  </Box>

   </>
  );
}

export default App;
