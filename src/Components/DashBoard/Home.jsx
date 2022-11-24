import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';

const Home = ({setNavbar}) => {
    const url ="https://pokeapi.co/api/v2/pokemon"
    const [render, setRender] = useState(false);
    const [rol, setRol] = useState("Admin");
    const [api, setApi] = useState([]);

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'url', headerName: 'Camera', width: 300 },
    ]

  useEffect(() => {
    axios.get(url).then( res =>{
      setApi(res.data.results)
    })
  }, []);

 

  const cellClick = (event) =>{

    console.log(event.row)

  }
    const change = ()=>{
        if(rol === "user")
        {
            setRender(false)
        }
        else{

            setRender(true)
        }

        console.log(api)
        
    }
    return (
       <>
       <br/>
       <Box>
       {render ?  
       
      
       
       <div>
         <h1 >Verdadero</h1> 
      

         <div style={{ height: 700, width: '100%' }}>
             <DataGrid
             rows={api}
             getRowId={(row) => row.name}
             columns={columns}
             onCellClick={(event)=> cellClick(event)}
             pageSize={20}
             rowsPerPageOptions={[20]}
             checkboxSelection
             />
         </div>
       </div>
        
        : 
        
        
        <h1>Falso</h1> }
        
        
 
        <Button variant='contained' style={{ marginTop:10 }} onClick={()=>change()}>
         Cambio
        </Button>
 
       </Box>
       
       </>
    );
}

export default Home;
