import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilesContext from './FilesContext';

class Note extends Component {
    static defaultProps = {
        onDeleteNote: () => {},
    }
    static contextType = FilesContext;

    handleDeleteNote = (e) => {
        e.preventDefault;
        const noteId = this.props.id

        fetch(`???/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => console.log(err))
            }
            else return response.json()
        })
        .then(() => {
            this.context.deleteNote(noteId)
            this.props.onDeleteNote(noteId)
        })
        .catch(err => {
            console.error({ error })
        })
    }

    render() {
        return (
            <div className='Note'>
                <h2>
                    <Link to={`/note/${this.props.id}`}>
                        {this.props.name}
                    </Link>
                </h2>
                <button onClick={e => this.handleDeleteNote(e)}>Delete note</button>
                <div className='note-date'>
                    <p>Modified <span>{format(this.props.modified, 'Do MMM YYYY')}</span></p>
                </div>
            </div>
        );
    }
}

export default Note;