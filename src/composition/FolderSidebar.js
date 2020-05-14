import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilesContext from './FilesContext';

class FolderSidebar extends Component {
    
    render() {
        const { folders=[], notes=[] } = this.context
        return (
            <div className='folder_sidebar'>
                <ul className='folder-list'>
                    {folders.map(folder =>
                        <li key={folder.id}>
                            <Link to={`/folder/${folder.id}`}>
                                {folder.name}
                            </Link>
                        </li>
                    )}
                </ul>
                <div className='add-folder-button'>
                    <Link to={'/add-folder'}>
                        Add New Folder
                    </Link>
                </div>
            </div>
        )
    }
}

export default FolderSidebar;