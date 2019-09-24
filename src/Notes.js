import React, {useState, useEffect} from 'react';
import uuid from "uuid/v4";
import Filler from './Filler';

const Notes = ({ theme }) => {

    const[notes, setNotes] = useState(
        JSON.parse(localStorage.getItem('notes')) || []
    );

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    const [noteBody, setNoteBody] = useState('');
    const[currentNote, setCurrentNote] = useState({id: null, noteBody: ''});

    const addNote = e => {

        e.preventDefault();
        setNotes([...notes, {id: uuid(), noteBody: noteBody}]);
        setNoteBody('');

    }

    const deleteNote = e => {

        const {id} = e.target.parentElement;
        setNotes(notes.filter(note => note.id !== id));

    }
   

    useEffect(() => {
        setNotes(notes.map(note => (note.id === currentNote.id ? currentNote : note)));
    }, [currentNote])
   

    return(
            <div className="notesContainer">
                {/* Add new note form*/}
                <div className="formContainer">
                    <form className={theme === 'dark' ? 'addFormDark' : 'addFormLight'} onSubmit={addNote}>
                        <button className={theme === 'dark' ? 'formBtnDark' : 'formBtnLight'}>
                            <i className="addIcon material-icons">add_box</i>
                        </button>
                    </form>
                </div>

                {/* if there are any notes - show them, else show opening/filler container */}
                {notes.length > 0 
                    ? (<div className="notesBox"> 
                        {notes && notes.map((note, id) => (
                        <div key={id} id={note.id} className="noteBox">
                            <div className="contentDiv">
                                <textarea spellCheck="false" value={note.noteBody} onChange={(e) => {setCurrentNote({id: note.id, noteBody: e.target.value});}} className="content"></textarea>
                            </div>
                            <button className="noteBtn" onClick={deleteNote}>x</button>
                        </div>
                        ))}
                    </div>)  
                    : (<Filler theme={theme}/>)
                }
            </div>
        )
}


export default Notes;





