import React, { useState, useEffect } from 'react';
import CreateNoteForm from '../../components/CreateNoteForm/CreateNoteForm';
import NoteList from '../../components/NoteList/NoteList';
import './NotePadPage.css';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const NotePadPage = (props)=>{

    const [notes, setNotes] = useState();
    const [user, token] = useAuth();

  function addNewEntry(note){
    let tempEntries = [note, ...notes];

    setNotes(tempEntries);
  }
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/notepad/notes/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setNotes(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchNotes();
  }, [token]);
    return(
        <div>
            <CreateNoteForm addNewEntryProperty={addNewEntry}/>
            {notes && <NoteList notes = {notes}/>}
        </div>
    )
}
export default NotePadPage;