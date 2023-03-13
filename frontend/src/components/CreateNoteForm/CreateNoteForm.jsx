import axios from 'axios';
import React, { useState } from 'react';
import './CreateNoteForm.css';
import useAuth from '../../hooks/useAuth';
import DropDownSelect from '../DropDownSelect/DropDownSelect';
import Select from 'react-select';
import data from '../../utils/PeriodicTableJSON.json';

const CreateNoteForm = (props) => {

    const [heading, setHeading] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [element_csv, setElementCsv] = useState('');
    const [total_elements_studied, setTotalElementsStudied] = useState('');
    const [user, token] = useAuth();

    async function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            heading: heading,
            content: content,
            date: date,
            //element_csv is an array of strings (element symbols). .join will join all the strings together with a comma
            element_csv : element_csv.join(', '),
            total_elements_studied : total_elements_studied
        };
        console.log(newEntry);

        const response = await axios.post("http://127.0.0.1:8000/api/notepad/notes/", newEntry, {headers: {Authorization: "Bearer " + token}});
        props.getAllNotes();

        
    }
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

    const handleChange = (e) => {
        setElementCsv(Array.isArray(e) ? e.map(x => x.label) : []);
        console.log(element_csv)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='note_form_border_box'>
                <label className="note_label_flex">Heading</label>
                <input className="input_box" type='text' style={{width:600}} value={heading} onChange={(event) => setHeading(event.target.value)} />
                <div className="post_flex_box">
                <label className="note_label_flex">Content</label>
                <textarea className="text_box" type='text' style={{width:600}} rows='4'value={content} onChange={(event) => setContent(event.target.value)}></textarea>
                <label className="note_label_flex">Date</label>
                <input type ='date' className='form-control' style={{width:600}} value={date} onChange={(event) => setDate(event.target.value)} />
                <label className="note_label_flex">Elements Studied by Symbol</label>
                <Select
                    className="dropdown"
                    placeholder="Select Option"
                    value={data.filter(obj => element_csv.includes(obj.label))}
                    options={data}
                    onChange={handleChange}
                    isMulti
                    isClearable
                />
                <label className="note_label_flex">Total Elements Studied</label>
                <input type ='number' id='quantity' min='1' max='119' style={{width:600}} value={total_elements_studied} onChange={(event) => setTotalElementsStudied(event.target.value)} />
                <button type='submit' className='note_button' style={{'margin-right': '10rem'}}>Add Note</button>
                </div>
            </div>
        </form>

    );
}
 
export default CreateNoteForm;