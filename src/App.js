import './App.css';
import ColorSwitch from './components/color_switch';
import { Grid, Skeleton, Container, Button } from '@mantine/core';
import HeroContentLeft from './components/hero_header';
import Counter from './components/counter';
import Einkaufsliste from './components/einkaufsliste';
import { useEffect, useRef, useState } from 'react';
import Einleitung from './components/Einleitung';
import FooterLinks from './components/footer';
import Linegraph from './components/linegraph';
import LineGraph2 from './components/linegraph2';
import TabelleAusDB from './components/tabelle_aus_db';

function App() {

  const child = <Skeleton height={140} radius="md" animate={false} />;
  const introduction = useRef()

  const [currentTime, setCurrentTime] = useState(0);
  const [tabelle, setTabelle] = useState(null)

  useEffect(() => {
    fetch('/time').then(res => res.json())
    .then(data => {
      setCurrentTime(data.time);
    });
    tabelle_abrufen("test_table")
  }, []);

  async function tabelle_abrufen(tabelle_dateiname) {
    const res = await fetch('/Datenbank', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tabelle: tabelle_dateiname,
      }),
    });
    const data = await res.json();
    console.table(JSON.parse(data.tabelle));
    setTabelle(JSON.parse(data.tabelle))
  }
  
  function handleBackClick(ref) {
    introduction.current.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div>
      <HeroContentLeft start={() => handleBackClick("introduction")}/>
      <div ref={introduction} id="introduction">
      {/*<p>The current time is {currentTime}.</p>*/}
      <Container my="md">
      <Grid>
        <Grid.Col xs={12}><Einleitung time={currentTime}/></Grid.Col>
        <Grid.Col xs={4}><ColorSwitch/></Grid.Col>
        <Grid.Col xs={4}><Counter/></Grid.Col>
        <Grid.Col xs={4}><Einkaufsliste/></Grid.Col>
        <Grid.Col xs={6}><Linegraph/></Grid.Col>
        <Grid.Col xs={6}><LineGraph2/></Grid.Col>
        <Grid.Col xs={12}>{tabelle === null ? child : <TabelleAusDB tabelle={tabelle}/>}</Grid.Col>
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
