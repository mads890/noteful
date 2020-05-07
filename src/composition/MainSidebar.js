import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from './Store'

class MainSidebar extends Component {
    render() {
        return (
            <>
            <ul className="folders_list">
                {this.props.folders.map(folder =>
                    <li key={folder.id}>
                        <FolderLink className="folder-link" to={`/folder.${folder.id}`}>
                            <span>{countNotesForFolder(this.props.notes, folder.id)}</span>
                            {folder.name}
                        </FolderLink>
                    </li>    
                )}
            </ul>
            <button className="add_folder_button" to='/add-folder'>Add folder</button>
            </>
        );
    }
}

export default MainSidebar;