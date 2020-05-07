import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from './Store'

class FolderSidebar extends Component {
    
    render() {
        const foldersList = STORE.folders.map(folder => {
        if (folder.id === this.props.currentFolderId){
            return (
                <li className="folders_list_item selected">
                    <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                </li>
            )
        }
        return (
            <li className="folders_list_item">
                <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
            </li>
        )
    })
        return (
            <ul className="folders_list">
                {foldersList}
            </ul>
        );
    }
}

export default FolderSidebar;