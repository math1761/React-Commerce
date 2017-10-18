import React from 'react';
import '../../global.css';
import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {

    constructor() {
        super();

        this.isOpen = this.isOpen.bind(this);
        this.state = {
            isOpen: false
        }
    }

    isOpen() {
        const opened = {...this.state.isOpen}

        this.opened = true;
        this.setState({opened});
    }

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
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span> </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add</Link>
                        </li>
                        <li>
                            <i className="fa fa-shopping-basket basket-icon" title="basket"></i>
                            {/*<div className="orders-wrapper">
                                <div className="top-rectangle"></div>
                                <div className="orders-container">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>*/}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}