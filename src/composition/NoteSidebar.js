import React, { Component } from 'react';

class NoteSidebar extends Component {
    render() {
        return (
            <div>
            <button onClick={() => this.props.history.goBack()}>Go back</button>
            {this.props.folder && (
                <h3>{this.props.folder.name}</h3>
            )}
            </div>
        );
    }
}

NoteSidebar.defaultProps = {
    history: {
        goBack: () => {}
    }
}

export default NoteSidebar;