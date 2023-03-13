import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PeriodicTable.css'
import useAuth from '../../hooks/useAuth';
import data from '../../utils/PeriodicTableJSON.json'
const PeriodicTable = () => {
  const [elements, setElements] = useState([]);
  const [user, token] = useAuth()


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://127.0.0.1:8000/api/elements/', 
      {headers:{Authorization:"Bearer " +token}});
      console.log(result.data);
      setElements(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
          <div className="header">
        <h1>The Periodic Table of Elements</h1>
      </div>
      <table>
        <tr>
          <td className="alkalai-metals"></td>
          <td>Alkali metals</td>
          <td className="transition-metals"></td>
          <td>Transition metals</td>
        </tr>
        <tr>
          <td className="alkaline-earth-metals"></td>
          <td>Alkaline earth metals</td>
          <td className="metalloids"></td>
          <td>Metalloids</td>
        </tr>
        <tr>
          <td className="polyatomic-nonmetals"></td>
          <td>Polyatomic nonmetals</td>
          <td className="diatomic-nonmetals"></td>
          <td>Diatomic nonmetals</td>
        </tr>
        <tr>
          <td className="unknown-properties"></td>
          <td>Unknown properties</td>
          <td className="lanthanides"></td>
          <td>Lanthanides</td>
        </tr>
        <tr>
          <td className="actinides"></td>
          <td>Actinides</td>
          <td className="noble-gases"></td>
          <td>Noble gases</td>
        </tr>
        <tr>
          <td className="post-transition-metals"></td>
          <td>Post-transition metals</td>
        </tr>
      </table>
    <div className="periodic-table" style={{"color":"black"}}>
    {data.elements.map((element) => (
        <div className="flip-card" style={{
          gridRow: element.ypos,
          gridColumn: element.xpos,
        }}>
        <div className="flip-card-inner">
        <div className={element.categoryStyleFront}>
            <div className="atomic-number">{element.number}</div>
            <div className="symbol">{element.symbol}</div>
        </div>
        <div className={element.categoryStyleBack}>
            <div className="element-name">{element.name}</div>
            <div className="atomic-mass">{element.atomic_mass} u</div>
            <div className="phase">{element.phase}</div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg" width="70"/><a href={element.source}
            target="_blank">
            <button className="bn632-hover bn22">More info</button>
            </a>
        </div>
        </div>
        </div>
    ))}
  </div>
  </div>
  );
};

export default PeriodicTable;

