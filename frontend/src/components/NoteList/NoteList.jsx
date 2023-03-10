import Note from "../Note/Note";

const NoteList = (props) => {
    return ( 
      <ul>
        {props.notes.map((entry) => <Note key={entry.id} entry={entry}/>)}
      </ul>

    );
}
    
export default NoteList;