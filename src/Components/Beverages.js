import React from 'react'

import Beverage from './Beverage'
import andros_AppleJuice from '../Images/Andros_AppleJuice.avif'
import theglace from '../Images/Honest_TheGlaceBio.jpg'

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
            listBeverages: [
                <Beverage beverageName="Pommes préssées" 
                    productorName="Andros"
                    image={andros_AppleJuice}
                    grade={5}/>,
                <Beverage beverageName="Thé Glacé Bio" 
                    productorName="Honest"
                    image={theglace}
                    grade={5}/>    
            ]
        }
    }


    showBeverage(){
        const listItems = this.state.listBeverages.map((e) =>
            <li key={e.beverageName}>{e}</li>
        );
        return(
            <ul>{listItems}</ul>
        )
    }

    render(){
        
        return(
            <div className='Beverages'>
               La séléction des chef:         
               {this.state.listBeverages.map(Beverage => 
                <div key={Beverage.beverageID}> 
                    {Beverage}
                </div>    
               )}      
            </div>
        )
    }
}

export default Beverages;

/*
{this.state.listBeverages.forEach(
    item => {
        <li key={item.beverageID}>{item.beverageName}</li>
    }
)}

<ul>
    {this.state.listBeverages.map(item => {
        return <li key={item.beverageID}>{item.beverageName}</li>
    })}
</ul> 
*/