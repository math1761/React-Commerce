import React from 'react';
import CreateClotheForm from './CreateClotheForm';

class Inventory extends React.Component {

    render() {
        return (
            <div>
                <h2>Ajouter un habit</h2>
                <CreateClotheForm addClothes={this.props.addClothes}/>
            </div>
        )
    }
}

export default Inventory;