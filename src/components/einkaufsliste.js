import { useState } from "react";

export default function Einkaufsliste() {
    const einkaufsliste = ["Apfel","Banane","Kiwi"]
    const [stateEinkaufsliste, setStateEinkaufsliste] = useState(einkaufsliste)
    const [neuerEinkauf, setNeuerEinkauf] = useState("")

    function Einkauf(){
        var neue_einkaufsliste = [...stateEinkaufsliste]
        neue_einkaufsliste.push(neuerEinkauf)
        setStateEinkaufsliste(neue_einkaufsliste)
        setNeuerEinkauf("")
    }

    return(
        <div>
            <h1>Einkaufsliste</h1>
            <ul>
                {stateEinkaufsliste.map((item, index) => 
                    <li key={index}>{item}</li>
                    )}
            </ul>
            <input placeholder="neues Item" value={neuerEinkauf} onChange={(event)=>setNeuerEinkauf(event.target.value)}></input>
            <button disabled={neuerEinkauf === "" ? true:false} onClick={()=>Einkauf()}>Item hinzufügen</button>
        </div>
    )
}