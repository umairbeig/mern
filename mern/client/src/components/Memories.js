import { useDispatch, useSelector } from 'react-redux'
import React from 'react';

import { Grid, CircularProgress } from '@material-ui/core';


import Memory from './Memory'
import useStyles from './styles2';

function Memories() {
 const classes=useStyles()



  const memos = useSelector((state) => state.memories)


  return (
    !memos.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {memos.map((memory) => (
          <Grid key={memory.id} item xs={12} sm={6} md={4}>
            <Memory memory={memory}  />
          </Grid>
        ))}
      </Grid>
    )
  );

}
export default Memories
