import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from './NoteList';

class MainMain extends Component {
    render() {
        return (
            <>
            <ul className="note_list">
                {this.props.notes.map(note =>
                    <li key={note.id}>
                        <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />
                    </li>
                )}
            </ul>
            <div>
                <Link to='/add-note'>Add note</Link>
            </div>
            </>
        ); 
    }
}

export default MainMain;