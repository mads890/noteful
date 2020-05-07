import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import STORE from './composition/Store';
import './App.css';
import MainMain from './composition/MainMain';
import FolderMain from './composition/FolderMain';
import NoteMain from './composition/NoteMain';
import MainSidebar from './composition/MainSidebar';
import FolderSidebar from './composition/FolderSidebar';
import NoteSidebar from './composition/NoteSidebar';
import Topbar from './composition/Topbar';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(STORE), 600)
  }

  renderSidebarRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={props => (
              <MainSidebar
                folders={folders}
                notes={notes}
                {...props}
              />
            )}
            />
        ))}
        <Route
          path="/note/:noteId"
          render={props => {
            const {noteId} = props.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NoteSidebar {...props} folder={folder} />
          }}
          />
        <Route path='/add-folder' component={NoteSidebar} />
        <Route path='/add-note' component={NoteSidebar} />
      </>
    )
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={props => {
              const {folderId} = props.match.params;
              const folderNotes = getNotesForFolder(notes, folderId);
              return (
                <MainMain {...props} notes={folderNotes} />
              );
            }}
          />
        ))}
        <Route
          path='/note/:noteId'
          render={props => {
            const {noteId} = props.match.params;
            const ntoe = findNote(notes, noteId);
            return <NoteMain {...props} note={note} />;
          }}
        />
      </>
    )
  }

  render() {
    return (
      <>
        <header className="topbar">
          <Route path='/' component={Topbar} />
        </header>
        <main>
          <div className="folders">
            {this.renderNavRoutes()}
          </div>
          <div className="notes">
            {this.renderMainRoutes()}
          </div>
        </main>
      </>
    );
  }
}

export default App;
