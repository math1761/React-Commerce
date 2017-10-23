import React from 'react';
import '../../global.css';
import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css';
import {Link} from 'react-router-dom'

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="nav-link" to="/">HOOLI</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Inventaire</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}