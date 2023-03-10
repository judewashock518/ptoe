import React, { useState } from 'react';
import CreateNoteForm from '../../components/CreateNoteForm/CreateNoteForm';
import NoteList from '../../components/NoteList/NoteList';
import './NotePadPage.css';

const NotePadPage = (props)=>{

    const [entries, setEntries] = useState();

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

    return(
        <div>
            <CreateNoteForm addNewEntryProperty={addNewEntry}/>
        </div>
    )
}
export default NotePadPage;