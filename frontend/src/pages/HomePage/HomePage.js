import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="bg">
    <div className="header"><h1>The Periodic Table of Elements</h1></div>
    <table>
        <tr>
          <td className="alkalai-metals"></td>
          <td>Alkalai metals</td>
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
    <section>
    <div className="container">
    <div className="panel-one">
    <div className="box">
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-diatomic-nonmetals">
                <div className="atomic-number">1</div>
                <div className="symbol">H</div>
            </div>
            <div className="flip-card-back-diatomic-nonmetals">
                <div className="element-name">Hydrogen</div>
                <div className="atomic-mass">1.0080 u</div>
                <a href="https://en.wikipedia.org/wiki/Hydrogen"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkali-metals">
                <div className="atomic-number">3</div>
                <div className="symbol">Li</div>
            </div>
            <div className="flip-card-back-alkali-metals">
                <div className="element-name">Lithium</div>
                <div className="atomic-mass">6.9410 u</div>
                <a href="https://en.wikipedia.org/wiki/Lithium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkali-metals">
                <div className="atomic-number">11</div>
                <div className="symbol">Na</div>
            </div>
            <div className="flip-card-back-alkali-metals">
                <div className="element-name">Sodium</div>
                <div className="atomic-mass">22.990 u</div>
                <a href="https://en.wikipedia.org/wiki/Sodium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkali-metals">
                <div className="atomic-number">19</div>
                <div className="symbol">K</div>
            </div>
            <div className="flip-card-back-alkali-metals">
                <div className="element-name">Potassium</div>
                <div className="atomic-mass">39.098 u</div>
                <a href="https://en.wikipedia.org/wiki/Potassium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkali-metals">
                <div className="atomic-number">37</div>
                <div className="symbol">Rb</div>
            </div>
            <div className="flip-card-back-alkali-metals">
                <div className="element-name">Rubidium</div>
                <div className="atomic-mass">85.468 u</div>
                <a href="https://en.wikipedia.org/wiki/Rubidium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkali-metals">
                <div className="atomic-number">55</div>
                <div className="symbol">Cs</div>
            </div>
            <div className="flip-card-back-alkali-metals">
                <div className="element-name">Caesium</div>
                <div className="atomic-mass">132.91 u</div>
                <a href="https://en.wikipedia.org/wiki/Caesium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkali-metals">
                <div className="atomic-number">87</div>
                <div className="symbol">Fr</div>
            </div>
            <div className="flip-card-back-alkali-metals">
                <div className="element-name">Francium</div>
                <div className="atomic-mass">223 u</div>
                <a href="https://en.wikipedia.org/wiki/Francium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-two">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkaline-earth-metals">
                <div className="atomic-number">4</div>
                <div className="symbol">Be</div>
            </div>
            <div className="flip-card-back-alkaline-earth-metals">
                <div className="element-name">Beryllium</div>
                <div className="atomic-mass">9.0122 u</div>
                <a href="https://en.wikipedia.org/wiki/Beryllium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkaline-earth-metals">
                <div className="atomic-number">12</div>
                <div className="symbol">Mg</div>
            </div>
            <div className="flip-card-back-alkaline-earth-metals">
                <div className="element-name">Magnesium</div>
                <div className="atomic-mass">24.305 u</div>
                <a href="https://en.wikipedia.org/wiki/Magnesium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkaline-earth-metals">
                <div className="atomic-number">20</div>
                <div className="symbol">Ca</div>
            </div>
            <div className="flip-card-back-alkaline-earth-metals">
                <div className="element-name">Calcium</div>
                <div className="atomic-mass">40.078 u</div>
                <a href="https://en.wikipedia.org/wiki/Calcium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkaline-earth-metals">
                <div className="atomic-number">38</div>
                <div className="symbol">Sr</div>
            </div>
            <div className="flip-card-back-alkaline-earth-metals">
                <div className="element-name">Strontium</div>
                <div className="atomic-mass">87.620 u</div>
                <a href="https://en.wikipedia.org/wiki/Strontium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkaline-earth-metals">
                <div className="atomic-number">56</div>
                <div className="symbol">Ba</div>
            </div>
            <div className="flip-card-back-alkaline-earth-metals">
                <div className="element-name">Barium</div>
                <div className="atomic-mass">137.33 u</div>
                <a href="https://en.wikipedia.org/wiki/Barium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-alkaline-earth-metals">
                <div className="atomic-number">88</div>
                <div className="symbol">Ra</div>
            </div>
            <div className="flip-card-back-alkaline-earth-metals">
                <div className="element-name">Radium</div>
                <div className="atomic-mass">226 u</div>
                <a href="https://en.wikipedia.org/wiki/Radium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-three">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">21</div>
                <div className="symbol">Sc</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Scandium</div>
                <div className="atomic-mass">44.956 u</div>
                <a href="https://en.wikipedia.org/wiki/Scandium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">39</div>
                <div className="symbol">Y</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Yttrium</div>
                <div className="atomic-mass">88.906 u</div>
                <a href="https://en.wikipedia.org/wiki/Yttrium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">57</div>
                <div className="symbol">La</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Lanthanum</div>
                <div className="atomic-mass">138.91 u</div>
                <a href="https://en.wikipedia.org/wiki/Lanthanum"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">89</div>
                <div className="symbol">Ac</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Actinium</div>
                <div className="atomic-mass">227 u</div>
                <a href="https://en.wikipedia.org/wiki/Actinium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-four">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">22</div>
                <div className="symbol">Ti</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Titanium</div>
                <div className="atomic-mass">47.867 u</div>
                <a href="https://en.wikipedia.org/wiki/Titanium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">40</div>
                <div className="symbol">Zr</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Zirconium</div>
                <div className="atomic-mass">91.224 u</div>
                <a href="https://en.wikipedia.org/wiki/Zirconium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">72</div>
                <div className="symbol">Hf</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Hafnium</div>
                <div className="atomic-mass">178.49 u</div>
                <a href="https://en.wikipedia.org/wiki/Hafnium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">104</div>
                <div className="symbol">Rf</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Rutherfordium</div>
                <div className="atomic-mass">267 u</div>
                <a href="https://en.wikipedia.org/wiki/Rutherfordium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">58</div>
                <div className="symbol">Ce</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Cerium</div>
                <div className="atomic-mass">140.12 u</div>
                <a href="https://en.wikipedia.org/wiki/Cerium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">90</div>
                <div className="symbol">Th</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Thorium</div>
                <div className="atomic-mass">232.04 u</div>
                <a href="https://en.wikipedia.org/wiki/Thorium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-five">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">23</div>
                <div className="symbol">V</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Vanadium</div>
                <div className="atomic-mass">50.942 u</div>
                <a href="https://en.wikipedia.org/wiki/Vanadium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">41</div>
                <div className="symbol">Nb</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Niobium</div>
                <div className="atomic-mass">92.906 u</div>
                <a href="https://en.wikipedia.org/wiki/Niobium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">73</div>
                <div className="symbol">Ta</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Tantalum</div>
                <div className="atomic-mass">180.95 u</div>
                <a href="https://en.wikipedia.org/wiki/Tantalum"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">105</div>
                <div className="symbol">Db</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Dubnium</div>
                <div className="atomic-mass">262 u</div>
                <a href="https://en.wikipedia.org/wiki/Dubnium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">59</div>
                <div className="symbol">Pr</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Praseodymium</div>
                <div className="atomic-mass">140.91 u</div>
                <a href="https://en.wikipedia.org/wiki/Praseodymium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">91</div>
                <div className="symbol">Pa</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Protactinium</div>
                <div className="atomic-mass">231.04 u</div>
                <a href="https://en.wikipedia.org/wiki/Protactinium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-five">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">24</div>
                <div className="symbol">Cr</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Chromium</div>
                <div className="atomic-mass">51.996 u</div>
                <a href="https://en.wikipedia.org/wiki/Chromium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">42</div>
                <div className="symbol">Mo</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Molybdenum</div>
                <div className="atomic-mass">95.950 u</div>
                <a href="https://en.wikipedia.org/wiki/Molybdenum"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">74</div>
                <div className="symbol">W</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Tungsten</div>
                <div className="atomic-mass">183.84 u</div>
                <a href="https://en.wikipedia.org/wiki/Tungsten"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">106</div>
                <div className="symbol">Sg</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Seaborgium</div>
                <div className="atomic-mass">269 u</div>
                <a href="https://en.wikipedia.org/wiki/Seaborgium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">60</div>
                <div className="symbol">Nd</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Neodymium</div>
                <div className="atomic-mass">144.24 u</div>
                <a href="https://en.wikipedia.org/wiki/Neodymium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">92</div>
                <div className="symbol">U</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Uranium</div>
                <div className="atomic-mass">238.03 u</div>
                <a href="https://en.wikipedia.org/wiki/Uranium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-five">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">25</div>
                <div className="symbol">Mn</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Manganese</div>
                <div className="atomic-mass">54.938 u</div>
                <a href="https://en.wikipedia.org/wiki/Manganese"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">43</div>
                <div className="symbol">Tc</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Technetium</div>
                <div className="atomic-mass">98 u</div>
                <a href="https://en.wikipedia.org/wiki/Technetium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">75</div>
                <div className="symbol">Re</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Rhenium</div>
                <div className="atomic-mass">186.21 u</div>
                <a href="https://en.wikipedia.org/wiki/Rhenium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">107</div>
                <div className="symbol">Bh</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Bohrium</div>
                <div className="atomic-mass">264 u</div>
                <a href="https://en.wikipedia.org/wiki/Bohrium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">61</div>
                <div className="symbol">Pm</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Promethium</div>
                <div className="atomic-mass">145 u</div>
                <a href="https://en.wikipedia.org/wiki/Promethium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">93</div>
                <div className="symbol">Np</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Neptunium</div>
                <div className="atomic-mass">237.05 u</div>
                <a href="https://en.wikipedia.org/wiki/Neptunium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-five">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">26</div>
                <div className="symbol">Fe</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Iron</div>
                <div className="atomic-mass">55.845 u</div>
                <a href="https://en.wikipedia.org/wiki/Iron"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">44</div>
                <div className="symbol">Ru</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Ruthenium</div>
                <div className="atomic-mass">101.07 u</div>
                <a href="https://en.wikipedia.org/wiki/Ruthenium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">76</div>
                <div className="symbol">Os</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Osmium</div>
                <div className="atomic-mass">190.23 u</div>
                <a href="https://en.wikipedia.org/wiki/Osmium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">108</div>
                <div className="symbol">Hs</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Hassium</div>
                <div className="atomic-mass">269 u</div>
                <a href="https://en.wikipedia.org/wiki/Hassium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">62</div>
                <div className="symbol">Sm</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Samarium</div>
                <div className="atomic-mass">150.36 u</div>
                <a href="https://en.wikipedia.org/wiki/Samarium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">94</div>
                <div className="symbol">Pu</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Plutonium</div>
                <div className="atomic-mass">244 u</div>
                <a href="https://en.wikipedia.org/wiki/Plutonium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-five">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">27</div>
                <div className="symbol">Co</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Cobalt</div>
                <div className="atomic-mass">58.933 u</div>
                <a href="https://en.wikipedia.org/wiki/Cobalt"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">45</div>
                <div className="symbol">Rh</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Rhodium</div>
                <div className="atomic-mass">102.91 u</div>
                <a href="https://en.wikipedia.org/wiki/Rhodium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">77</div>
                <div className="symbol">Ir</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Iridium</div>
                <div className="atomic-mass">192.22 u</div>
                <a href="https://en.wikipedia.org/wiki/Tridium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">109</div>
                <div className="symbol">Mt</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Meitnerium</div>
                <div className="atomic-mass">278 u</div>
                <a href="https://en.wikipedia.org/wiki/Meitnerium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">63</div>
                <div className="symbol">Eu</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Europium</div>
                <div className="atomic-mass">151.96 u</div>
                <a href="https://en.wikipedia.org/wiki/Europium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">95</div>
                <div className="symbol">Am</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Americium</div>
                <div className="atomic-mass">243 u</div>
                <a href="https://en.wikipedia.org/wiki/Americium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-five">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">28</div>
                <div className="symbol">Ni</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Nickel</div>
                <div className="atomic-mass">58.693 u</div>
                <a href="https://en.wikipedia.org/wiki/Nickel"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">46</div>
                <div className="symbol">Pd</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Palladium</div>
                <div className="atomic-mass">106.42 u</div>
                <a href="https://en.wikipedia.org/wiki/Palladium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">78</div>
                <div className="symbol">Pt</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Platinum</div>
                <div className="atomic-mass">195.08 u</div>
                <a href="https://en.wikipedia.org/wiki/Platinum"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">110</div>
                <div className="symbol">Ds</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Darmstadtium</div>
                <div className="atomic-mass">281 u</div>
                <a href="https://en.wikipedia.org/wiki/Darmstadtium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">64</div>
                <div className="symbol">Gd</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Gadolinium</div>
                <div className="atomic-mass">157.25 u</div>
                <a href="https://en.wikipedia.org/wiki/Gadolinium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">96</div>
                <div className="symbol">Cm</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Curium</div>
                <div className="atomic-mass">247 u</div>
                <a href="https://en.wikipedia.org/wiki/Curium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-five">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">29</div>
                <div className="symbol">Cu</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Copper</div>
                <div className="atomic-mass">63.546 u</div>
                <a href="https://en.wikipedia.org/wiki/Copper"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">47</div>
                <div className="symbol">Ag</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Silver</div>
                <div className="atomic-mass">107.87 u</div>
                <a href="https://en.wikipedia.org/wiki/Silver"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">79</div>
                <div className="symbol">Au</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Gold</div>
                <div className="atomic-mass">196.97 u</div>
                <a href="https://en.wikipedia.org/wiki/Gold"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">111</div>
                <div className="symbol">Rg</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Roentgenium</div>
                <div className="atomic-mass">282 u</div>
                <a href="https://en.wikipedia.org/wiki/Roentgenium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">65</div>
                <div className="symbol">Tb</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Terbium</div>
                <div className="atomic-mass">158.93 u</div>
                <a href="https://en.wikipedia.org/wiki/Terbium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">97</div>
                <div className="symbol">Bk</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Berkelium</div>
                <div className="atomic-mass">247 u</div>
                <a href="https://en.wikipedia.org/wiki/Berkelium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-five">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">30</div>
                <div className="symbol">Zn</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Zinc</div>
                <div className="atomic-mass">65.380 u</div>
                <a href="https://en.wikipedia.org/wiki/Zinc"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">48</div>
                <div className="symbol">Cd</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Cadmium</div>
                <div className="atomic-mass">112.41 u</div>
                <a href="https://en.wikipedia.org/wiki/Cadmium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-transition-metals">
                <div className="atomic-number">80</div>
                <div className="symbol">Hg</div>
            </div>
            <div className="flip-card-back-transition-metals">
                <div className="element-name">Mercury</div>
                <div className="atomic-mass">200.59 u</div>
                <a href="https://en.wikipedia.org/wiki/Mercury"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">112</div>
                <div className="symbol">Cn</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Copernicium</div>
                <div className="atomic-mass">285 u</div>
                <a href="https://en.wikipedia.org/wiki/Copernicium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">66</div>
                <div className="symbol">Dy</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Dysprosium</div>
                <div className="atomic-mass">162.5 u</div>
                <a href="https://en.wikipedia.org/wiki/Dysprosium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">98</div>
                <div className="symbol">Cf</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Californium</div>
                <div className="atomic-mass">251 u</div>
                <a href="https://en.wikipedia.org/wiki/Californium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-two">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-metalloids">
                <div className="atomic-number">5</div>
                <div className="symbol">B</div>
            </div>
            <div className="flip-card-back-metalloids">
                <div className="element-name">Boron</div>
                <div className="atomic-mass">10.811 u</div>
                <a href="https://en.wikipedia.org/wiki/Boron"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">13</div>
                <div className="symbol">Al</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Aluminium</div>
                <div className="atomic-mass">26.982 u</div>
                <a href="https://en.wikipedia.org/wiki/Aluminium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">31</div>
                <div className="symbol">Ga</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Gallium</div>
                <div className="atomic-mass">69.723 u</div>
                <a href="https://en.wikipedia.org/wiki/Gallium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">49</div>
                <div className="symbol">In</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Indium</div>
                <div className="atomic-mass">114.82 u</div>
                <a href="https://en.wikipedia.org/wiki/Indium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">81</div>
                <div className="symbol">Tl</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Thallium</div>
                <div className="atomic-mass">204.38 u</div>
                <a href="https://en.wikipedia.org/wiki/Thallium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">113</div>
                <div className="symbol">Nh</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Nihonium</div>
                <div className="atomic-mass">286 u</div>
                <a href="https://en.wikipedia.org/wiki/Nihonium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">67</div>
                <div className="symbol">Ho</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Holmium</div>
                <div className="atomic-mass">164.93 u</div>
                <a href="https://en.wikipedia.org/wiki/Holmium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">99</div>
                <div className="symbol">Es</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Einsteinium</div>
                <div className="atomic-mass">252 u</div>
                <a href="https://en.wikipedia.org/wiki/Einsteinium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-two">
    <div className="box">
         <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-diatomic-nonmetals">
                <div className="atomic-number">6</div>
                <div className="symbol">C</div>
            </div>
            <div className="flip-card-back-diatomic-nonmetals">
                <div className="element-name">Carbon</div>
                <div className="atomic-mass">12.011 u</div>
                <a href="https://en.wikipedia.org/wiki/Carbon"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-metalloids">
                <div className="atomic-number">14</div>
                <div className="symbol">Si</div>
            </div>
            <div className="flip-card-back-metalloids">
                <div className="element-name">Silicon</div>
                <div className="atomic-mass">28.086 u</div>
                <a href="https://en.wikipedia.org/wiki/Silicon"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-metalloids">
                <div className="atomic-number">32</div>
                <div className="symbol">Ge</div>
            </div>
            <div className="flip-card-back-metalloids">
                <div className="element-name">Germanium</div>
                <div className="atomic-mass">72.640 u</div>
                <a href="https://en.wikipedia.org/wiki/Germanium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">50</div>
                <div className="symbol">Sn</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Tin</div>
                <div className="atomic-mass">118.71 u</div>
                <a href="https://en.wikipedia.org/wiki/Tin"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">82</div>
                <div className="symbol">Pb</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Lead</div>
                <div className="atomic-mass">207.20 u</div>
                <a href="https://en.wikipedia.org/wiki/Lead"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">114</div>
                <div className="symbol">Fl</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Flerovium</div>
                <div className="atomic-mass">289 u</div>
                <a href="https://en.wikipedia.org/wiki/Flerovium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">68</div>
                <div className="symbol">Er</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Erbium</div>
                <div className="atomic-mass">167.26 u</div>
                <a href="https://en.wikipedia.org/wiki/Erbium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">100</div>
                <div className="symbol">Fm</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Fermium</div>
                <div className="atomic-mass">257 u</div>
                <a href="https://en.wikipedia.org/wiki/Fermium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-two">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-diatomic-nonmetals">
                <div className="atomic-number">7</div>
                <div className="symbol">N</div>
            </div>
            <div className="flip-card-back-diatomic-nonmetals">
                <div className="element-name">Nitrogen</div>
                <div className="atomic-mass">14.007 u</div>
                <a href="https://en.wikipedia.org/wiki/Nitrogen"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-polyatomic-nonmetals">
                <div className="atomic-number">15</div>
                <div className="symbol">P</div>
            </div>
            <div className="flip-card-back-polyatomic-nonmetals">
                <div className="element-name">Phosphorus</div>
                <div className="atomic-mass">30.974 u</div>
                <a href="https://en.wikipedia.org/wiki/Phosphorus"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-metalloids">
                <div className="atomic-number">33</div>
                <div className="symbol">As</div>
            </div>
            <div className="flip-card-back-metalloids">
                <div className="element-name">Arsenic</div>
                <div className="atomic-mass">74.922 u</div>
                <a href="https://en.wikipedia.org/wiki/Arsenic"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-metalloids">
                <div className="atomic-number">51</div>
                <div className="symbol">Sb</div>
            </div>
            <div className="flip-card-back-metalloids">
                <div className="element-name">Antimony</div>
                <div className="atomic-mass">121.76 u</div>
                <a href="https://en.wikipedia.org/wiki/Antimony"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">83</div>
                <div className="symbol">Bi</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Bismuth</div>
                <div className="atomic-mass">208.98 u</div>
                <a href="https://en.wikipedia.org/wiki/Bismuth"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">115</div>
                <div className="symbol">Mc</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Moscovium</div>
                <div className="atomic-mass">289 u</div>
                <a href="https://en.wikipedia.org/wiki/Moscovium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">69</div>
                <div className="symbol">Tm</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Thulium</div>
                <div className="atomic-mass">168.93 u</div>
                <a href="https://en.wikipedia.org/wiki/Thulium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">101</div>
                <div className="symbol">Md</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Mendelevium</div>
                <div className="atomic-mass">258 u</div>
                <a href="https://en.wikipedia.org/wiki/Mendelevium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-two">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-diatomic-nonmetals">
                <div className="atomic-number">8</div>
                <div className="symbol">O</div>
            </div>
            <div className="flip-card-back-diatomic-nonmetals">
                <div className="element-name">Oxygen</div>
                <div className="atomic-mass">15.999 u</div>
                <a href="https://en.wikipedia.org/wiki/Oxygen"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-polyatomic-nonmetals">
                <div className="atomic-number">16</div>
                <div className="symbol">S</div>
            </div>
            <div className="flip-card-back-polyatomic-nonmetals">
                <div className="element-name">Sulfur</div>
                <div className="atomic-mass">32.065 u</div>
                <a href="https://en.wikipedia.org/wiki/Sulfur"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-polyatomic-nonmetals">
                <div className="atomic-number">34</div>
                <div className="symbol">Se</div>
            </div>
            <div className="flip-card-back-polyatomic-nonmetals">
                <div className="element-name">Selenium</div>
                <div className="atomic-mass">78.960 u</div>
                <a href="https://en.wikipedia.org/wiki/Selenium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-metalloids">
                <div className="atomic-number">52</div>
                <div className="symbol">Te</div>
            </div>
            <div className="flip-card-back-metalloids">
                <div className="element-name">Tellurium</div>
                <div className="atomic-mass">127.60 u</div>
                <a href="https://en.wikipedia.org/wiki/Tellurium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">84</div>
                <div className="symbol">Po</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Polonium</div>
                <div className="atomic-mass">209 u</div>
                <a href="https://en.wikipedia.org/wiki/Polonium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">116</div>
                <div className="symbol">Lv</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Livermorium</div>
                <div className="atomic-mass">293 u</div>
                <a href="https://en.wikipedia.org/wiki/Livermorium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">70</div>
                <div className="symbol">Yb</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Ytterbium</div>
                <div className="atomic-mass">173.04 u</div>
                <a href="https://en.wikipedia.org/wiki/Ytterbium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">102</div>
                <div className="symbol">No</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Nobelium</div>
                <div className="atomic-mass">259 u</div>
                <a href="https://en.wikipedia.org/wiki/Nobelium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-two">
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-diatomic-nonmetals">
                <div className="atomic-number">9</div>
                <div className="symbol">F</div>
            </div>
            <div className="flip-card-back-diatomic-nonmetals">
                <div className="element-name">Fluorine</div>
                <div className="atomic-mass">18.998 u</div>
                <a href="https://en.wikipedia.org/wiki/Fluorine"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-diatomic-nonmetals">
                <div className="atomic-number">17</div>
                <div className="symbol">Cl</div>
            </div>
            <div className="flip-card-back-diatomic-nonmetals">
                <div className="element-name">Chlorine</div>
                <div className="atomic-mass">35.453 u</div>
                <a href="https://en.wikipedia.org/wiki/Chlorine"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-diatomic-nonmetals">
                <div className="atomic-number">35</div>
                <div className="symbol">Br</div>
            </div>
            <div className="flip-card-back-diatomic-nonmetals">
                <div className="element-name">Bromine</div>
                <div className="atomic-mass">79.904 u</div>
                <a href="https://en.wikipedia.org/wiki/Bromine"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-diatomic-nonmetals">
                <div className="atomic-number">53</div>
                <div className="symbol">I</div>
            </div>
            <div className="flip-card-back-diatomic-nonmetals">
                <div className="element-name">Iodine</div>
                <div className="atomic-mass">126.90 u</div>
                <a href="https://en.wikipedia.org/wiki/Iodine"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-posttransition-metals">
                <div className="atomic-number">85</div>
                <div className="symbol">At</div>
            </div>
            <div className="flip-card-back-posttransition-metals">
                <div className="element-name">Astatine</div>
                <div className="atomic-mass">210 u</div>
                <a href="https://en.wikipedia.org/wiki/Astatine"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">117</div>
                <div className="symbol">Ts</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Tennessine</div>
                <div className="atomic-mass">294 u</div>
                <a href="https://en.wikipedia.org/wiki/Tennessine"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-lanthanides">
                <div className="atomic-number">71</div>
                <div className="symbol">Lu</div>
            </div>
            <div className="flip-card-back-lanthanides">
                <div className="element-name">Lutetium</div>
                <div className="atomic-mass">174.97 u</div>
                <a href="https://en.wikipedia.org/wiki/Lutetium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-actinides">
                <div className="atomic-number">103</div>
                <div className="symbol">Lr</div>
            </div>
            <div className="flip-card-back-actinides">
                <div className="element-name">Lawrencium</div>
                <div className="atomic-mass">262 u</div>
                <a href="https://en.wikipedia.org/wiki/Lawrencium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div className="panel-one">
    <div className="box">
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-noble-gases">
                <div className="atomic-number">2</div>
                <div className="symbol">He</div>
            </div>
            <div className="flip-card-back-noble-gases">
                <div className="element-name">Helium</div>
                <div className="atomic-mass">4.0026 u</div>
                <a href="https://en.wikipedia.org/wiki/Helium"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-noble-gases">
                <div className="atomic-number">10</div>
                <div className="symbol">Ne</div>
            </div>
            <div className="flip-card-back-noble-gases">
                <div className="element-name">Neon</div>
                <div className="atomic-mass">20.180 u</div>
                <a href="https://en.wikipedia.org/wiki/Neon"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-noble-gases">
                <div className="atomic-number">18</div>
                <div className="symbol">Ar</div>
            </div>
            <div className="flip-card-back-noble-gases">
                <div className="element-name">Argon</div>
                <div className="atomic-mass">39.948 u</div>
                <a href="https://en.wikipedia.org/wiki/Argon"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-noble-gases">
                <div className="atomic-number">36</div>
                <div className="symbol">Kr</div>
            </div>
            <div className="flip-card-back-noble-gases">
                <div className="element-name">Krypton</div>
                <div className="atomic-mass">83.798 u</div>
                <a href="https://en.wikipedia.org/wiki/Krypton"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-noble-gases">
                <div className="atomic-number">54</div>
                <div className="symbol">Xe</div>
            </div>
            <div className="flip-card-back-noble-gases">
                <div className="element-name">Xenon</div>
                <div className="atomic-mass">131.29 u</div>
                <a href="https://en.wikipedia.org/wiki/Xenon"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-noble-gases">
                <div className="atomic-number">86</div>
                <div className="symbol">Rn</div>
            </div>
            <div className="flip-card-back-noble-gases">
                <div className="element-name">Radon</div>
                <div className="atomic-mass">222 u</div>
                <a href="https://en.wikipedia.org/wiki/Radon"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    <div className="box">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front-unknown-properties">
                <div className="atomic-number">118</div>
                <div className="symbol">Og</div>
            </div>
            <div className="flip-card-back-unknown-properties">
                <div className="element-name">Oganesson</div>
                <div className="atomic-mass">294 u</div>
                <a href="https://en.wikipedia.org/wiki/Oganesson"><button className="bn632-hover bn22">More info</button></a>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
  );
};

export default HomePage;



// const HomePage = () => {
//   // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
//   // The "token" value is the JWT token that you will send in the header of any request requiring authentication
//   //TODO: Add an AddCars Page to add a car for a logged in user's garage
//   const [user, token] = useAuth();
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>The Periodic Table of Elements</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.model} {car.make}
//           </p>
//         ))}
//     </div>
//   );
// };
