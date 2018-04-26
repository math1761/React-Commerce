import React from 'react';
import '../global.css';
import ProductHome from '../components/ProductHome';
import Header from '../components/partials/Header';
import Filter from '../components/Filter';
import base from '../base';

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            clothes: {}
        }
    }

    componentWillMount() {
        this.ref = base.syncState(`/add`, {
            context: this,
            state: 'clothes'
        });
        console.log(this.state.clothes);
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <Filter/>
                    </div>
                    <div className="row">
                        {Object.keys(this.state.clothes).map(key => <ProductHome key={key}
                                                                                 details={this.state.clothes[key]}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;


