import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Components/DashBoard/AdminDashBoard/AdminDashboard";
import UserDashBoard from "./Components/DashBoard/UserDashBoard/UserDashBoard";
import PrivateRoute from "./Router/PrivateRoute";
import AuthProvider from "./Context/AuthContext/AtuhProvider"
import Header from "./Components/Common/NavMenu/Header";
import {AuthContext} from "./Context/AuthContext/AuthContext"
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Login from "./Components/Auth/Login/Login";
import Home from "./Components/DashBoard/Home";
import Layout from "./Layout"
function App() {
  var [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const {authState} = useContext(AuthContext);



  const DisplayHeader= (props) =>{
    const isLoggedIn = props.isLoggedIn;
    console.log(props)
    if (isLoggedIn !== true ) {
      return (
        <Header/>
      )   
    }
  }

  useEffect(() => {
    updatenavbar();
 
  }, [isNavbarHidden]);


  const updatenavbar =()=>{
    const user = authState.logged
    // let user = localStorage.getItem('User')
  // ? JSON.parse(localStorage.getItem('User')).Token
  // : '';
  console.log('user')
    console.log(user)
  if (user === false){
    setIsNavbarHidden (true);
  }else{
    setIsNavbarHidden (false);
  }
    
  }


  return (

      <main className="App" ><Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <DisplayHeader isLoggedIn={isNavbarHidden}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <AuthProvider>

                <Routes> 
                

                {/* <Route element={<PrivateRoute/>}>

                            <Route path="home" element={<Home/>}/>
                              <Route path="admindashboard" element={<AdminDashboard />}/>
                              <Route path="userdashboard" element={<UserDashBoard />}/>
                  
                </Route> */}
                                  {/* <Route path="/" element={

                  <PrivateRoute>
                    
                      <Route path="home" element={<Home/>}/>
                      <Route path="admindashboard" element={<AdminDashboard />}/>
                      <Route path="userdashboard" element={<UserDashBoard />}/>
                      
                  </PrivateRoute>
                  }/>  */}



                     <Route path="/" element={<Layout/>}>
                        <Route path="/login" isPrivate={false} element={<Login setNavbar={() =>updatenavbar()}/>}/> 
                        <Route element={<PrivateRoute/>}>
                        <Route path="/home" element={<Home/>}/>
                              <Route path="/admindashboard" element={<AdminDashboard />}/>
                              <Route path="/userdashboard" element={<UserDashBoard />}/>
                        </Route>
                    </Route>
                    <Route  path="*" isPrivate={true} element={<PageNotFound />} />
                </Routes>

                
              </AuthProvider>
          </Box>
       </Box>
       </main>
  );
}

export default App;


