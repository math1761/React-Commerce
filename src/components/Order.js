import React from 'react';

export default class Order extends React.Component {

    constructor() {
        super();

        this.renderOrder = this.renderOrder.bind(this);
    }

    renderOrder(key) {
        const clothe = this.props.clothes[key];
        const count = this.props.order[key];

        if (!clothe || !clothe.isAvailable) {
            return <li key={key}>Désolé, {clothe ? clothe.name : 'habit'} n'est plus disponible</li>
        }

        return (
            <li key={key}>
                <span>{count} {clothe.name} : <strong className="price">{clothe.price}</strong></span>
            </li>
        )
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const clothe = this.props.clothes[key];
            const count = this.props.order[key];
            const isAvailable = clothe && clothe.isAvailable;
            if (isAvailable) {
                return prevTotal + (count * clothe.price || 0)
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-container">
                <h2>Commande</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li>
                        <strong>Total: {total} €</strong>
                    </li>
                </ul>
            </div>
        )
    }
};