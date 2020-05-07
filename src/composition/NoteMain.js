import React, { Component } from 'react';
import STORE from './Store';
import Note from './NoteList';

class NoteMain extends Component {
    render() {
        return (
            <section>
                <Note
                    id={this.props.note.id}
                    name={this.props.note.name}
                    modified={this.props.note.modified}
                />
                <div className="note-content">
                    {this.props.note.content}
                </div>
            </section>
        );
    }
}

export default NoteMain;