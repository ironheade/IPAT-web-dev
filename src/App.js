import './App.css';
import ColorSwitch from './components/color_switch';
import { Grid, Skeleton, Container } from '@mantine/core';
import HeroContentLeft from './components/hero_header';
import Counter from './components/counter';
import Einkaufsliste from './components/einkaufsliste';
import { useRef } from 'react';
import Einleitung from './components/Einleitung';
import FooterLinks from './components/footer';
import Linegraph from './components/linegraph';
import LineGraph2 from './components/linegraph2';

function App() {

  const child = <Skeleton height={140} radius="md" animate={false} />;
  const introduction = useRef()

  
  function handleBackClick(ref) {
    introduction.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <HeroContentLeft start={() => handleBackClick("introduction")}/>
      <div ref={introduction} id="introduction">
      <Container my="md">
        
      <Grid>
        <Grid.Col xs={12}><Einleitung/></Grid.Col>
        <Grid.Col xs={4}><ColorSwitch/></Grid.Col>
        <Grid.Col xs={4}><Counter/></Grid.Col>
        <Grid.Col xs={4}><Einkaufsliste/></Grid.Col>
        <Grid.Col xs={6}><Linegraph/></Grid.Col>
        <Grid.Col xs={6}><LineGraph2/></Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={6}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={6}>{child}</Grid.Col>
      </Grid>
    </Container>
    </div>

    <FooterLinks/>
    </div>
  );
}

export default App;
