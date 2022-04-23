import React from 'react';
import { v4 as uuid } from 'uuid';

import '../CSS/beverages.css';

import Beverage from './Beverage';
import andros_AppleJuice from '../Images/andros.jpg';
import theglace from '../Images/Honest_TheGlaceBio.jpg';
import limonade from '../Images/Lorina_LimonadeArtisanale.jpg';


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
            beverageName:"",
            productorName:"",
            grade:0,
            currentID:0,
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
        this.handleAddBeverage = this.handleAddBeverage.bind(this);
        this.handleBeverageName = this.handleBeverageName.bind(this);
        this.handleProductorName = this.handleProductorName.bind(this);
        this.handleGrade = this.handleGrade.bind(this);
        this.handleDeletionUser = this.handleDeletionUser.bind(this);

    }

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
        var currentB = <Beverage beverageName={this.state.beverageName} productorName={this.state.productorName} grade={this.state.grade}/>;
        var update = this.state.listBeveragesUser.slice();
        update.push(currentB);
        this.setState({listBeveragesUser: update});        
    }

    handleDeletionUser(event){
        console.log("Index: "+ event.target.value);
        var tab = [...this.state.listBeveragesUser];
        var index = event.target.value;
        tab.splice(index, 1);
        this.setState({listBeveragesUser: tab});
    }

    

    render(){
        return(
            <div className='Beverages'>
                <h1>La séléction des chefs :</h1>
                <div className='ChefSelection'>
                    {this.state.listBeveragesDevelopers.map((Beverage,index) =>
                        <div className="beverageDev" key={index}>
                            {Beverage}
                        </div>
                    )}
                </div>     

                <div className='UserSelection'>
                    <h1>Faites votre sélection:</h1>
                    <br/>
                    <br/>
                    <div className='AddForm'>
                        <form>
                            <label>
                                <label for="drinkName">Nom de votre boisson : </label>
                                <input type="text" name="drinkName" onChange={this.handleBeverageName}/>
                                <br/><br/>
                                <label for="productorName">Producteur de votre boisson : </label>
                                <input type="text" value={this.state.productorName} name="productorName" onChange={this.handleProductorName}/>
                                <br/><br/>
                                <label for="grade">Note que vous lui attribuez : </label>
                                <input type="number" value={this.state.grade} name="grade" onChange={this.handleGrade}/>
                                <br/><br/>
                                <input type="button" value="Ajouter" onClick={this.handleAddBeverage}/>
                            </label>
                        </form>     
                    </div>

                    <p>Faire un bouton pour clear le tableau</p>
                    <div className="UserBeveragesList">
	                    {this.state.listBeveragesUser.map((Beverage,index) =>
	                        <div className='beverageUser' key={index}>
	                            {Beverage}
	                            <button className="removeBev" value={index} onClick={this.handleDeletionUser}>Supprimer</button>
	                        </div>
	                    )}
                    </div>
                </div>    
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