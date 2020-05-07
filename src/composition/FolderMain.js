import React, { Component } from 'react';
import Note from './NoteList';

class FolderMain extends Component {
    render() {
        return (
            <ul className="note_list filtered">
                <Note filter='folder' id={this.props.currentFolderId} />
            </ul>
        );
    }
}

export default FolderMain;