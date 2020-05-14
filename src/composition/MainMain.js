import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Note from './NoteList';
import FilesContext from './FilesContext';

class MainMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = FilesContext;

    render() {
        const { folderId } = this.props.match.params
        const { notes=[] } = this.context
        const folderNotes = getNotesForFolder(notes, folderId)
        return (
            <>
            <ul className="note_list">
                {folderNotes.map(note =>
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