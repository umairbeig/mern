import { useDispatch } from "react-redux"
import { deleteMemory,likeMemory, setCurrentId } from "../reducers/memoReducer";
import { Grid,Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './styles'
import moment from 'moment';


const Memory= (props) => {

    const dispatch = useDispatch();

    

    const classes=useStyles();

    const memory=props.memory;

  

    return (
        <Grid container>
       
        <Card className={classes.card} md={4}>
             {/* {console.log('jiee')}{ console.log(memory)} */}
        <CardMedia className={classes.media} image={memory.selectedFile } title={memory.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{memory.creator}</Typography>
          <Typography variant="body2">{moment(memory.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
         {/* update func */}
          <Button style={{ color: 'white'}} size="small" onClick={()=>dispatch(setCurrentId(memory._id))} >...</Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{memory.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{memory.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{memory.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(likeMemory(memory._id))}> Like {memory.likeCount} </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deleteMemory(memory._id))}> Delete</Button>
        </CardActions>
      </Card>
      </Grid>
    )




}
export default Memory