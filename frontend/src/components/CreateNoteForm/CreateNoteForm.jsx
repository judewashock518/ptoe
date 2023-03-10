import axios from 'axios';
import React, { useState } from 'react';
import './CreateNoteForm.css';
import useAuth from '../../hooks/useAuth';


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
            element_csv : element_csv,
            total_elements_studied : total_elements_studied
        };
        console.log(newEntry);
        props.getAllNotes();
        
        const response = await axios.post("http://127.0.0.1:8000/api/notepad/notes/", newEntry, {headers: {Authorization: "Bearer " + token}});
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div className='create_note_border_box'>
                <label className="note_label_flex">Heading</label>
                <input className="input_box" type='text' value={heading} onChange={(event) => setHeading(event.target.value)} />
                <div className="post_flex_box">
                <label className="note_label_flex">Content</label>
                <textarea className="text_box" type='text' rows='4'value={content} onChange={(event) => setContent(event.target.value)}></textarea>
                <label className="note_label_flex">Date</label>
                <input type ='date' className='form-control' value={date} onChange={(event) => setDate(event.target.value)} />
                <label className="note_label_flex">Elements Studied by Symbol</label>
                <textarea className="text_box" type='text' rows='2'value={element_csv} onChange={(event) => setElementCsv(event.target.value)}></textarea>
                <label className="note_label_flex">Total Elements Studied</label>
                <input type ='number' id='quantity' min='1' max='119' value={total_elements_studied} onChange={(event) => setTotalElementsStudied(event.target.value)} />
                <button type='submit' className='note_button' style={{'margin-right': '10rem'}}>Add Note</button>
                </div>
            </div>
        </form>

    );
}
 
export default CreateNoteForm;