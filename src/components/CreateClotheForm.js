import React from 'react';


export default class createClotheForm extends React.Component {

    createClothe(e) {
        e.preventDefault();

        const clothe = {
            gender: this.gender.value,
            type: this.type.value,
            name: this.name.value,
            price: this.price.value,
            description: this.description.value,
            size1: this.size1.value,
            size2: this.size2.value,
            size3: this.size3.value
        };

        this.props.addClothes(clothe);

        this.addClotheForm.reset();

        console.log(clothe);
    }


    render() {
        return (
            <div>
                <form ref={(input) => this.addClotheForm = input} className='form-group'
                      onSubmit={(e) => this.createClothe(e)}>

                    <select ref={(input) => this.gender = input} className="custom-select">
                        <option value="Genre">Genre</option>
                        <option value="1">Homme</option>
                        <option value="2">Femme</option>
                    </select>

                    <select ref={(input) => this.type = input} className="custom-select">
                        <option value="Type de vêtements">Type de vêtements</option>
                        <option value="1">Haut</option>
                        <option value="2">Bas</option>
                    </select>

                    <div className="input-group">
                        <label htmlFor="S">S</label>
                        <input ref={(input) => this.size1 = input} type="checkbox" name="S" aria-label="S"/>
                        <label htmlFor="M">M</label>
                        <input ref={(input) => this.size2 = input} type="checkbox" name="M" aria-label="M"/>
                        <label htmlFor="L">L</label>
                        <input ref={(input) => this.size3 = input} type="checkbox" name="L" aria-label="L"/>
                    </div>

                    <input ref={(input) => this.name = input} name="name" type="text" placeholder="Nom du produit"
                           className='form-control'/>

                    <input ref={(input) => this.price = input} name="price" type="text" placeholder="Prix"
                           className='form-control'/>

                    <textarea ref={(input) => this.description = input} name="description" type="text"
                              placeholder="Description" className='form-control'/>

                    <button type="submit">Ajouter un habit</button>
                </form>
            </div>
        );
    }
}