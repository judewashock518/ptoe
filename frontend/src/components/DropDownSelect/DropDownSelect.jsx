import React, { useState } from 'react';
import { useEffect } from 'react';
import Select from 'react-select';
import data from '../../utils/PeriodicTableJSON.json';

const DropDownSelect = () => {
   
    const data = [
        
            {
                "value": 1,
                "label": "H"
            },
            {
                "value": 2,
                "label": "He"
            },
            {
                "value": 3,
                "label": "Li"
            },
            {
                "value": 4,
                "label": "Be"
            },
            {
                "value": 5,
                "label": "B"
            },
            {
                "value": 6,
                "label": "C"
            },
            {
                "value": 7,
                "label": "N"
            },
            {
                "value": 8,
                "label": "O"
            },
            {
                "value": 9,
                "label": "F"
            },
            {
                "value": 10,
                "label": "Ne"
            },
            {
                "value": 11,
                "label": "Na"
            },
            {
                "value": 12,
                "label": "Mg"
            },
            {
                "value": 13,
                "label": "Al"
            },
            {
                "value": 14,
                "label": "Si"
            },
            {
                "value": 15,
                "label": "P"
            },
            {
                "value": 16,
                "label": "S"
            },
            {
                "value": 17,
                "label": "Cl"
            },
            {
                "value": 18,
                "label": "Ar"
            },
            {
                "value": 19,
                "label": "K"
            },
            {
                "value": 20,
                "label": "Ca"
            },
            {
                "value": 21,
                "label": "Sc"
            },
            {
                "value": 22,
                "label": "Ti"
            },
            {
                "value": 23,
                "label": "V"
            },
            {
                "value": 24,
                "label": "Cr"
            },
            {
                "value": 25,
                "label": "Mn"
            },
            {
                "value": 26,
                "label": "Fe"
            },
            {
                "value": 27,
                "label": "Co"
            },
            {
                "value": 28,
                "label": "Ni"
            },
            {
                "value": 29,
                "label": "Cu"
            },
            {
                "value": 30,
                "label": "Zn"
            },
            {
                "value": 31,
                "label": "Ga"
            },
            {
                "value": 32,
                "label": "Ge"
            },
            {
                "value": 33,
                "label": "As"
            },
            {
                "value": 34,
                "label": "Se"
            },
            {
                "value": 35,
                "label": "Br"
            },
            {
                "value": 36,
                "label": "Kr"
            },
            {
                "value": 37,
                "label": "Rb"
            },
            {
                "value": 38,
                "label": "Sr"
            },
            {
                "value": 39,
                "label": "Y"
            },
            {
                "value": 40,
                "label": "Zr"
            },
            {
                "value": 41,
                "label": "Nb"
            },
            {
                "value": 42,
                "label": "Mo"
            },
            {
                "value": 43,
                "label": "Tc"
            },
            {
                "value": 44,
                "label": "Ru"
            },
            {
                "value": 45,
                "label": "Rh"
            },
            {
                "value": 46,
                "label": "Pd"
            },
            {
                "value": 47,
                "label": "Ag"
            },
            {
                "value": 48,
                "label": "Cd"
            },
            {
                "value": 49,
                "label": "In"
            },
            {
                "value": 50,
                "label": "Sn"
            },
            {
                "value": 51,
                "label": "Sb"
            },
            {
                "value": 52,
                "label": "Te"
            },
            {
                "value": 53,
                "label": "I"
            },
            {
                "value": 54,
                "label": "Xe"
            },
            {
                "value": 55,
                "label": "Cs"
            },
            {
                "value": 56,
                "label": "Ba"
            },
            {
                "value": 57,
                "label": "La"
            },
            {
                "value": 58,
                "label": "Ce"
            },
            {
                "value": 59,
                "label": "Pr"
            },
            {
                "value": 60,
                "label": "Nd"
            },
            {
                "value": 61,
                "label": "Pm"
            },
            {
                "value": 62,
                "label": "Sm"
            },
            {
                "value": 63,
                "label": "Eu"
            },
            {
                "value": 64,
                "label": "Gd"
            },
            {
                "value": 65,
                "label": "Tb"
            },
            {
                "value": 66,
                "label": "Dy"
            },
            {
                "value": 67,
                "label": "Ho"
            },
            {
                "value": 68,
                "label": "Er"
            },
            {
                "value": 69,
                "label": "Tm"
            },
            {
                "value": 70,
                "label": "Yb"
            },
            {
                "value": 71,
                "label": "Lu"
            },
            {
                "value": 72,
                "label": "Hf"
            },
            {
                "value": 73,
                "label": "Ta"
            },
            {
                "value": 74,
                "label": "W"
            },
            {
                "value": 75,
                "label": "Re"
            },
            {
                "value": 76,
                "label": "Os"
            },
            {
                "value": 77,
                "label": "Ir"
            },
            {
                "value": 78,
                "label": "Pt"
            },
            {
                "value": 79,
                "label": "Au"
            },
            {
                "value": 80,
                "label": "Hg"
            },
            {
                "value": 81,
                "label": "Tl"
            },
            {
                "value": 82,
                "label": "Pb"
            },
            {
                "value": 83,
                "label": "Bi"
            },
            {
                "value": 84,
                "label": "Po"
            },
            {
                "value": 85,
                "label": "At"
            },
            {
                "value": 86,
                "label": "Rn"
            },
            {
                "value": 87,
                "label": "Fr"
            },
            {
                "value": 88,
                "label": "Ra"
            },
            {
                "value": 89,
                "label": "Ac"
            },
            {
                "value": 90,
                "label": "Th"
            },
            {
                "value": 91,
                "label": "Pa"
            },
            {
                "value": 92,
                "label": "U"
            },
            {
                "value": 93,
                "label": "Np"
            },
            {
                "value": 94,
                "label": "Pu"
            },
            {
                "value": 95,
                "label": "Am"
            },
            {
                "value": 96,
                "label": "Cm"
            },
            {
                "value": 97,
                "label": "Bk"
            },
            {
                "value": 98,
                "label": "Cf"
            },
            {
                "value": 99,
                "label": "Es"
            },
            {
                "value": 100,
                "label": "Fm"
            },
            {
                "value": 101,
                "label": "Md"
            },
            {
                "value": 102,
                "label": "No"
            },
            {
                "value": 103,
                "label": "Lr"
            },
            {
                "value": 104,
                "label": "Rf"
            },
            {
                "value": 105,
                "label": "Db"
            },
            {
                "value": 106,
                "label": "Sg"
            },
            {
                "value": 107,
                "label": "Bh"
            },
            {
                "value": 108,
                "label": "Hs"
            },
            {
                "value": 109,
                "label": "Mt"
            },
            {
                "value": 110,
                "label": "Ds"
            },
            {
                "value": 111,
                "label": "Rg"
            },
            {
                "value": 112,
                "label": "Cn"
            },
            {
                "value": 113,
                "label": "Nh"
            },
            {
                "value": 114,
                "label": "Fl"
            },
            {
                "value": 115,
                "label": "Mc"
            },
            {
                "value": 116,
                "label": "Lv"
            },
            {
                "value": 117,
                "label": "Ts"
            },
            {
                "value": 118,
                "label": "Og"
            },
            {
                "value": 119,
                "label": "Uue"
            }
        
    ];

    const [selectedValue, setSelectedValue] = useState([]);
    const handleChange = (e) => {
       
        setSelectedValue(Array.isArray(e) ? e.map(x => x.label) : []);
console.log(selectedValue)
    }
     
    return (
        <div className="App">
     
        <Select
            className="dropdown"
            placeholder="Select Option"
            value={data.filter(obj => selectedValue.includes(obj.label))}
            options={data}
            onChange={handleChange}
            isMulti
            isClearable
        />
     
        {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        </div>}
        </div>
    );
}
 
export default DropDownSelect;