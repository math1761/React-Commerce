import React from 'react';
import '../global.css';
import Header from '../components/partials/Header';
import Inventory from '../components/Inventory';
import products from '../data.json';
import ProductList from "../components/ProductList";
import Order from '../components/Order';

class AddClothes extends React.Component {

    constructor() {
        super();

        this.addClothes = this.addClothes.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.state = {
            clothes: products,
            order: {}
        };
    }

    addClothes(clothe) {
        const clothes = {...this.state.clothes}

        const timestamp = Date.now();
        clothes[`clothe-${timestamp}`] = clothe;

        this.setState({clothes});
    }

    addToOrder(key) {
        const order = {...this.state.order};

        order[key] = order[key] + 1 || 1;

        this.setState({order});
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="main-container container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-xs-12">
                            <ul>
                                {Object.keys(this.state.clothes).map(key => <ProductList key={key}
                                                                                         index={key}
                                                                                         addToOrder={this.addToOrder}
                                                                                         details={this.state.clothes[key]}/>)}
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <Order clothes={this.state.clothes}
                                   order={this.state.order}/>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <Inventory addClothes={this.addClothes}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddClothes;