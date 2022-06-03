import { useState } from 'react'

function ColorSwitch() {

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

    return (
      <div style={{backgroundColor:backgroundColor, color: backgroundColor === "#000" && "white"}}>
        <h1 style={{color: backgroundColor === "#000" && "white"}}>Farbenwechsel</h1>

          <table>
            <tbody>
              <tr>
                <th>color</th>
                <th>value</th>
                <th>button</th>
              </tr>
              {farbliste.map((item, index) =>
                
                <tr key={index}>
                  <td>{item.color}</td>
                  <td>{item.value}</td>
                  <td><button onClick={() => setBackgroundColor(item.value) & console.log(backgroundColor)} style={{backgroundColor:item.value, color: item.value === "#000" && "white"}}>switch color</button></td>
                </tr>
  
                )}

            </tbody>
          </table>
      </div>
    );
  }
  
  export default ColorSwitch;