
import { Button } from '@mui/material';
import { NextPage } from 'next';
import {Typography} from '@mui/material'



const HomePage:NextPage= ()=> {

  return (
    <>
      <Typography variant='h1' color='primary'>Hello Next World !</Typography>
      <Button variant='contained'> Hola</Button>
    </>
  )
}

export default HomePage;