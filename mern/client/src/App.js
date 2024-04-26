import React, { useEffect } from "react";

import { Box, AppBar, Typography, Grid } from "@material-ui/core";


import img1 from "./images/img1.png"
import Form from './components/Form.js'
import Memories from './components/Memories.js'
import { useDispatch, useSelector } from "react-redux";
import { fetchMemories } from "./reducers/memoReducer.js";
const App = () => {

  const mem = useSelector((state)=>state.memories);
  const dispatch=useDispatch()
  useEffect(() => {

    dispatch(fetchMemories());

  }, [mem]);

  return (
    <Grid container >
      <Grid container xs={12} alignContent="center" justifyContent="center">
        <Grid container justifyContent="center" alignContent="center" md={5} >
         
            <Typography variant="h4"  >
              Memories
            </Typography>

            <img src={img1}  alt="image1" style={{height: 50,
              width: 50, marginLeft:10
              }}></img>
        
          
        </Grid>
        <Grid md={7}>
          <Form></Form>
        </Grid>


      </Grid>

      <Grid container justifyContent="center" alignItems="center" spacing={2} >

        <Memories></Memories>
      </Grid>


    </Grid>
  )
}

export default App;