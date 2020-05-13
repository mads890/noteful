import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import STORE from './composition/Store';
import './App.css';
import MainMain from './composition/MainMain';
import NoteMain from './composition/NoteMain';
import MainSidebar from './composition/MainSidebar';
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

  handleDeleteNote = (id) => {
    const newNotesList = this.state.notes.map(note => {
      if (note.id !== id) {
        return note
      }
    })
    this.setState({
      notes: newNotesList
    })
    .then(() => {this.props.history.push('/')})
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
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
    }
    return (
      <FilesContext.Provider value={contextValue}>
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
            const note = findNote(notes, noteId);
            return <NoteMain {...props} note={note} />;
          }}
        />
      </FilesContext.Provider>
    )
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
    }
    return (
      <FilesContext.Provider value={contextValue}>
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
      </FilesContext.Provider>
    );
  }
}

export default App;
