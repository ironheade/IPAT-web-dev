import { useState } from 'react'

function ColorSwitch() {

    const [count, setCount] = useState(0)
    const liste = ["Apfel",
                  "Banane"
  ]
  const [backgroundColor,setBackgroundColor] = useState("#fff")
  const farbliste = [
      {
          color: "red",
          value: "#f00"
      },
      {
          color: "green",
          value: "#0f0"
      },
      {
          color: "blue",
          value: "#00f"
      },
      {
          color: "cyan",
          value: "#0ff"
      },
      {
          color: "magenta",
          value: "#f0f"
      },
      {
          color: "yellow",
          value: "#ff0"
      },
      {
          color: "black",
          value: "#000"
      },
      {
          color: "white",
          value: "#fff"
      }
  ]
  const [farben, setFarben] = useState(farbliste)

    return (
      <div style={{backgroundColor:backgroundColor}}>
        <h1>IPAT App</h1>

          <table>
            <tbody>
              <tr>
                <th>color</th>
                <th>value</th>
                <th>button</th>
              </tr>
              {farben.map((item, index) =>
                
                <tr key={index}>
                  <td>{item.color}</td>
                  <td>{item.value}</td>
                  <td><button onClick={() => setBackgroundColor(item.value) & console.log(backgroundColor)} style={{backgroundColor:item.value}}>switch color</button></td>
                </tr>
  
                )}
              <tr>
                <td>
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
  
  export default ColorSwitch;