import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Topbar extends Component {
    render() {
        return (
            <Link to='/'>Noteful</Link>
        );
    }
}

export default Topbar;