import React from 'react';

export default class Product extends React.Component {


    render() {
        const {details, index} = this.props;
        const buttonText = details.isAvailable === "true" ? 'Ajouter au panier' : 'Victime de son succès !';
        const buttonStyle = details.isAvailable === "true" ? 'btn btn-success' : 'btn btn-danger';
        return (
            <li style={{"listStyle": "none"}}>
                <h3>{details.name}</h3>
                <span>Price: {details.price} €</span>
                <p><strong>Description</strong> : {details.description}</p>
                <div className="row">
                    <div className="col-md-6">
                        <button disabled={details.isAvailable === "false"} style={{"marginBottom": "20px"}}
                                className={buttonStyle}
                                onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-warning" onClick={this.props.modal}>Modifier</button>
                    </div>
                </div>
            </li>
        )
    }
}