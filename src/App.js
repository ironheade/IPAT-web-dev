import './App.css';
import ColorSwitch from './components/color_switch';
import { Button, Grid, Skeleton, Container } from '@mantine/core';
import HeroContentLeft from './components/hero_header';
import Counter from './components/counter';
import Einkaufsliste from './components/einkaufsliste';

function App() {

  const child = <Skeleton height={140} radius="md" animate={false} />;

  return (
    <div>
      <HeroContentLeft/>
      
      <Container my="md">
      <Grid>
        <Grid.Col xs={12}><ColorSwitch/></Grid.Col>
        <Grid.Col xs={4}><Counter/></Grid.Col>
        <Grid.Col xs={8}><Einkaufsliste/></Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={6}>{child}</Grid.Col>
      </Grid>
    </Container>
    </div>
  );
}

export default App;
