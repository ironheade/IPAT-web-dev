import React, { useState } from "react";
import { Button, NumberInput, Table, TextInput } from '@mantine/core';

export default function TabelleAusDB(props){

    const [zeile,setZeile] = useState({Teilnehmer:"",Institut:"",Vorerfahrung:NaN})
    const [tabelle,setTabelle] = useState(props.tabelle)
    function Neue_Zeile(){
        const newId = parseInt(tabelle.map(item => item.id).slice(-1))+1
        setTabelle([...tabelle,{id:newId, ...zeile}])
        fetch('/Datenbank_write', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              Teilnehmer:zeile.Teilnehmer,
              Institut:zeile.Institut,
              Vorerfahrung:zeile.Vorerfahrung
            }),
          });
    }



    return(
        <>
        <Table>
            <thead>
                <tr>
                    {Object.keys(tabelle[0]).map((item,index) => 
                        <th key={index}>{item}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {tabelle.map((item,index) =>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.Teilnehmer}</td>
                    <td>{item.Institut}</td>
                    <td>{item.Vorerfahrung}</td>
                </tr>
                )}
                <tr>
                    <td><Button disabled={isNaN(zeile.Vorerfahrung) ? true:false} onClick={()=> Neue_Zeile()}>+</Button></td>
                    <td><TextInput onChange={(e)=>setZeile({...zeile,Teilnehmer:e.target.value})}/></td>
                    <td><TextInput onChange={(e)=>setZeile({...zeile,Institut:e.target.value})}/></td>
                    <td><NumberInput onChange={(e)=>setZeile({...zeile,Vorerfahrung:e})}/></td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}