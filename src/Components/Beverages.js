import React from 'react';
import { v4 as uuid } from 'uuid';


import Beverage from './Beverage';
import andros_AppleJuice from '../Images/Andros_AppleJuice.avif';
import theglace from '../Images/Honest_TheGlaceBio.jpg';
import limonade from '../Images/Lorina_LimonadeArtisanale.jpg';
import AddBeverage from './AddBeverage';

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
            listBeveragesUser: [],
            listBeveragesDevelopers: [
                <Beverage beverageID= {uuid()}
                    beverageName="Pommes préssées"
                    productorName="Andros"
                    image={andros_AppleJuice}
                    grade={5}/>,
                <Beverage beverageID= {uuid()}
                    beverageName="Thé Glacé Bio" 
                    productorName="Honest"
                    image={theglace}
                    grade={5}/>,
                <Beverage beverageID= {uuid()}
                    beverageName="Limonade Artisanale" 
                    productorName="Lorina"
                    image={limonade}
                    grade={5}/>
            ]
        }
    }

    

    render(){
        return(
            <div className='Beverages'>
                
            La séléction des chef:       
            {this.state.listBeveragesDevelopers.map((Beverage,index) => 
                <div key={index}> 
                    {Beverage}
                    <button value={this.beverageID} onClick={this.handleDeletion}>Supprimer dans parents</button>
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

//<AddBeverage onAddBeverage={this.handleAddBeverage}/>


//CONSTRUCTOR:
/*
this.handleBeverageName = this.handleBeverageName.bind(this);
        this.handleProductorName = this.handleProductorName.bind(this);
        this.handleGrade = this.handleGrade.bind(this);

        this.handleAddBeverage = this.handleAddBeverage.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
*/


//FUNCTIONS:
/*
handleBeverageName(event){
        this.setState({beverageName: event.target.value});
    }

    handleProductorName(event){
      this.setState({productorName: event.target.value});
    }

    handleGrade(event){
      this.setState({grade: event.target.value});
    }

    handleAddBeverage(){
        this.setState(previousState => ({
            listBeverages:[...previousState.listBeverages, 'nouvellevaleur']
        }));
        console.log("List: " + this.state.listBeverages);
    }

    handleDeletion(event){
        console.log("HANDLEDELETION" + event.target.value);

        this.setState({listBeverages: this.state.listBeverages.filter(function(beverageID){
            return beverageID !== event.target.value
        })});
    }
*/

//FORMULAIRE RENDER
/*
<form>
                    <label>
                        Nom de votre boisson: 
                        <input type="text" onChange={this.handleBeverageName}/>
                        Producteur de votre boisson:
                        <input type="text" onChange={this.handleProductorName}/>
                        Note que vous lui attribué: 
                        <input type="text" onChange={this.handleGrade}/>
                        <input type="submit" value="Ajouter" onClick={this.handleAddBeverage}/>
                    </label>
                </form>

{this.state.listBeverages.map(Beverage => 
                <div key={this.beverageID}> 
                    {Beverage}
                    <button value={this.beverageID} onClick={this.handleDeletion}>Supprimer dans parents</button>
                </div>    
               )}                
*/