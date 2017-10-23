import React from 'react';

export default class ProductHome extends React.Component {

    render() {
        const {details} = this.props;
        return (
            <div className="col-md-4 col-xs-12">
                <h3>{details.name}</h3>
                <span>Price: {details.price} €</span>
                <p><strong>Description</strong> : {details.description}</p>
            </div>
        )
    }

}