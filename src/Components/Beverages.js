import React from 'react';
import { v4 as uuid } from 'uuid';


import Beverage from './Beverage';
import andros_AppleJuice from '../Images/Andros_AppleJuice.avif';
import theglace from '../Images/Honest_TheGlaceBio.jpg';

/**
 * Fonctionnalités:
 * Affichage de la liste de boissons
 * Possibilité de supprimer des éléments de la liste
 * Possibilité d'entrer un nouvel élément dans la liste
 */
class Beverages extends React.Component{
    constructor(props){
        super(props);
        this.handleDeletion = this.handleDeletion.bind(this);
        this.state={
            listBeverages: [
                <Beverage beverageID= {uuid()}
                    beverageName="Pommes préssées"
                    productorName="Andros"
                    image={andros_AppleJuice}
                    grade={5}/>,
                <Beverage beverageID= {uuid()}
                    beverageName="Thé Glacé Bio" 
                    productorName="Honest"
                    image={theglace}
                    grade={5}/>    
            ]
        }
    }

    handleDeletion(event){
        console.log("HANDLEDELETION" + event.target.value);

        this.setState({listBeverages: this.state.listBeverages.filter(function(beverageID){
            return beverageID !== event.target.value
        })});
    }

    render(){
        
        return(
            <div className='Beverages'>
               La séléction des chef:         
               {this.state.listBeverages.map(Beverage => 
                <div key={this.beverageID}> 
                    {Beverage}
                    <button onClick={this.handleDeletion}>Supprimer dans parents</button>
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