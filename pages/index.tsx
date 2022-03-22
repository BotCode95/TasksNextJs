import type { NextPage } from 'next'
import { Grid, Card, CardHeader,CardContent } from '@mui/material'
import { Layout } from '../components/layouts/Layout';
import { EntryList } from '../components/ui';
import { NewEntry } from '../components/ui/NewEntry';
const Home: NextPage = () => {
  return (
    <Layout title="Home - Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Pendientes"/>
            <NewEntry/>
            <EntryList status='pending'/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="En Progreso"/>
            <EntryList status='in-progress'/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas"/>
            <EntryList status='finished'/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
