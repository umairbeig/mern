import { Grid, TextField, Button, Paper } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemory, setCurrentId, setPostId } from '../reducers/memoReducer'
import FileBase from 'react-file-base64'
import { updateMemory } from '../reducers/memoReducer';

function Form() {
    const dispatch = useDispatch();

    const [memory, setMemory] = useState({
        'title': ' ',
        'message': ' ',
        'creator': ' ',
        'tags': [' '],
        'selectedFile': ' '

    })
   
    const cid=useSelector((state) => state.currentId);
    
    

    const mem = useSelector((state) => state.memories);
    // **********************
   
         
      useEffect(()=>{
        if (cid!==-1) {
         
            const currmem = mem.find((m) => m._id === cid);
        
            setMemory(currmem);
        }
      },[cid,dispatch])
       

   
    // *********************
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cid!==-1)
        if (cid!==-1) {
            console.log(memory)
            dispatch(updateMemory({memory:memory,id:cid}));
            dispatch(setCurrentId(-1));
        }

        else {

            dispatch(addMemory(memory));
        }
        setMemory({
            'title': ' ',
            'message': ' ',
            'creator': ' ',
            'tags': [' '],
            'selectedFile': ' '
        })
    }

    return (
        <Paper>
            <div className='container-fluid' style={{ padding: "30px" }}>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <Grid container spacing={2} alignContent='center' justifyContent='space-between' xs={12}>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="title"
                                name="title"
                                value={memory.title}
                                onChange={(e) => {e.preventDefault();setMemory({ ...memory, title: e.target.value })}}
                            />
                            {console.log(memory.title)}
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                variant="outlined"
                                multiline minRows={4}
                                fullWidth
                                label="message"
                                name="message"
                                value={memory.message}
                                onChange={(e) => setMemory({ ...memory, message: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="creator"
                                name="creator"
                                value={memory.creator}
                                onChange={(e) => setMemory({ ...memory, creator: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="tags"
                                name="tags"
                                value={memory.tags}
                                onChange={(e) => setMemory({ ...memory, tags: e.target.value.split(',') })}
                            />
                        </Grid>

                        <Grid>
                            <FileBase
                                type='file'
                                multiple={false}
                                onDone={({ base64 }) => setMemory({ ...memory, selectedFile: base64 })}
                            />
                        </Grid>



                        <Grid item>

                            <Button variant='outlined' color='secondary' type='submit'>Submit</Button>
                        </Grid>


                    </Grid>
                </form>
            </div>
        </Paper>
    )
}
export default Form;
