import Note from "../Note/Note";

const NoteList = (props) => {
    return ( 
      <ul className ="notelist">
        {props.notes.map((entry) => <Note getAllNotes={props.getAllNotes} key={entry.id} entry={entry} setToggle={props.setToggle}/>)}
      </ul>

    );
}
    
export default NoteList;