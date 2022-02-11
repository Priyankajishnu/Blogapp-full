import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";



const AddArticle = () => {

  let navigate = useNavigate();
  const clicked=()=>{
    navigate("../article-list", { replace: true })
  }

  return (
    <div>
      
<div style={{position:'fixed',backgroundColor:'lightblue', marginTop:100,marginLeft:400,border:"2px solid black",height:400,width:400}}>
       <Grid container style={{padding:40}}>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant='h5'>Add Article Details</Typography>
      <TextField margin='normal' variant='outlined'fullWidth  label=' Article Name' />
      <TextField margin='normal' variant='outlined' fullWidth   label='Title'/>
      <TextField margin='normal' variant='outlined' fullWidth   label='Description'/>
<br></br>
      <Button onClick={clicked} size="large" variant='contained' fullWidth color='primary'>ADD</Button>
      </Grid>
      </Grid>
    </div>
    
  </div>
);
}
export default AddArticle;
