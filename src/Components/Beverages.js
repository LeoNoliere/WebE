import React from 'react'

import Beverage from './Beverage'
import andros_AppleJuice from '../Images/Andros_AppleJuice.avif'

/**
 * Fonctionnalités:
 * Affichage de la liste de boissons
 * Possibilité de supprimer des éléments de la liste
 * Possibilité d'entrer un nouvel élément dans la liste
 */
class Beverages extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listBeverages: []
        }
    }

    componentDidMount(){
        this.state.listBeverages.push(<Beverage beverageName="Apple Juice" 
        productorName="Andros"
        image={andros_AppleJuice}
        grade={5}
        selectorID={0}
        colorTag='#de9de0'/>);

        this.state.listBeverages.push(<Beverage beverageName="Apple Juice" 
        productorName="Andros"
        image={andros_AppleJuice}
        grade={5}
        selectorID={0}
        colorTag='#de9de0'/>);
    }

    componentWillUnmount(){
        this.state.listBeverages.pop();
        this.state.listBeverages.pop();
    }
    render(){
        return(
            <div className='Beverages'>
                Composition des boissons
                <ol>
                    {this.state.listBeverages.map(Beverage => {
                        return <li key={Beverage.beverageID}>{Beverage.beverageName}</li>
                    })}
                </ol>          
            </div>
        )
    }
}

export default Beverages;