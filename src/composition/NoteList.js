import React, { Component } from 'react';
import FilesContext from './FilesContext';

class Note extends Component {
    render() {
        return (
            <div className='Note'>
                <h2>
                    <Link to={`/note/${this.props.id}`}>
                        {this.props.name}
                    </Link>
                </h2>
                <button onClick={this.context.deleteNote(this.props.id)}>Delete note</button>
                <div className='note-date'>
                    <p>Modified <span>{format(this.props.modified, 'Do MMM YYYY')}</span></p>
                </div>
            </div>
        );
    }
}

export default Note;