import React, { useState } from "react";
import { Button, NumberInput, Table, TextInput } from '@mantine/core';

export default function TabelleAusDB(props){

    const [zeile,setZeile] = useState({Beschreibung:"",Wert:"",Einheit:""})
    const [tabelle,setTabelle] = useState(props.tabelle)
    function Neue_Zeile(){
        const newId = parseInt(tabelle.map(item => item.id).slice(-1))+1
        setTabelle([...tabelle,{id:newId, ...zeile}])
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
                    <td>{item.Beschreibung}</td>
                    <td>{item.Wert}</td>
                    <td>{item.Einheit}</td>
                </tr>
                )}
                <tr>
                    <td><Button onClick={()=> Neue_Zeile()}>+</Button></td>
                    <td><TextInput onChange={(e)=>setZeile({...zeile,Beschreibung:e.target.value})}/></td>
                    <td><NumberInput onChange={(e)=>setZeile({...zeile,Wert:e})}/></td>
                    <td><TextInput onChange={(e)=>setZeile({...zeile,Einheit:e.target.value})}/></td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}