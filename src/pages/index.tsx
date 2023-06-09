
import { Button, CardHeader, Card, Typography, Grid, CardContent } from '@mui/material';
import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';



const HomePage:NextPage= ()=> {

  return (
    <Layout title='Home - OperJira'>
      {/* <Typography variant='h1' color='primary'>Hello</Typography> */}

      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px )'}}>
            <CardHeader title = "Pendientes"/>
            <CardContent>
              { /* */ }
              <EntryList status='pending'/>
            </CardContent>
          </Card>
        </Grid>
      
        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px )'}}>
            <CardHeader title = "En Progreso"/>
            <CardContent>
              { /* */ }
              <EntryList status='in-progress'/>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{height:'calc(100vh - 100px )'}}>
            <CardHeader title = "Completadas"/>
            <CardContent>
              { /* */ }
              <EntryList status='finished'/>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Layout>
  )
}

export default HomePage;