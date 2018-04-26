import React from 'react';

export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Rechercher" className="search"/>
                </form>
            </div>
        )
    }
}