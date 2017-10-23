import React from 'react';
import CreateClotheForm from './CreateClotheForm';

class Inventory extends React.Component {

    constructor() {
        super();

        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e, key) {
        const clothes = this.props.clothes[key];

        const updatedClothe = {
            ...clothes,
            [e.target.name]: e.target.value
        };
        this.props.updateClothe(key, updatedClothe);
    }

    renderInventory(key) {
        const clothes = this.props.clothes[key];
        return (
            <div className="form-group" key={key}>
                <select type="text" name="status" value={clothes.gender} className="custom-select" placeholder="Genre" onChange={(e) => this.handleChange(e, key)}>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                </select>
                <select type="text" name="status" value={clothes.type} className="custom-select" placeholder="Type" onChange={(e) => this.handleChange(e, key)}>
                    <option value="haut">Haut</option>
                    <option value="bas">Bas</option>
                </select>
                <input type="text" name="name" value={clothes.name} className='form-control' placeholder="Nom du produit" onChange={(e) => this.handleChange(e, key)} />
                <input type="text" name="price" value={clothes.price} className='form-control' placeholder="Prix"  onChange={(e) => this.handleChange(e, key)}/>
                <select type="text" name="status" value={clothes.isAvailable} className="custom-select" placeholder="Disponible" onChange={(e) => this.handleChange(e, key)}>
                    <option value={true}>Oui</option>
                    <option value={false}>Non</option>
                </select>
                <textarea type="text" name="desc" value={clothes.description} className='form-control' placeholder="Description" onChange={(e) => this.handleChange(e, key)}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                {Object.keys(this.props.clothes).map(key => this.renderInventory(key))}
                <h2>Ajouter un habit</h2>
                <CreateClotheForm addClothes={this.props.addClothes}/>
            </div>
        )
    }
}

export default Inventory;