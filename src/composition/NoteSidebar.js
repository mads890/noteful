import React, { Component } from 'react';
import FilesContext from './FilesContext';

class NoteSidebar extends Component {
    static defaultProps = {
        history: {
            goBack: () => {}
        },
        match: {
            params: {}
        }
    }
    static contextType = FilesContext;

    render() {
        const { notes, folders } = this.context
        const { noteId } = this.props.match.params
        const note = findNote(notes, noteId) || {}
        const folder = findFolder(folders, note.folderId)
        return (
            <div>
            <button onClick={() => this.props.history.goBack()}>Back</button>
            {folder && (
                <h3>{folder.name}</h3>
            )}
            </div>
        );
    }
}

export default NoteSidebar;