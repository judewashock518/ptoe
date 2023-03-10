import Note from "../Note/Note";


const NoteList = (props) => {
    return ( 
      <ul>
        {props.parentEntries.map((entry) => <Note entry={entry}/>)}
      </ul>

    );
}
    
export default NoteList;