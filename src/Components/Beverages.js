import React from 'react';
import { v4 as uuid } from 'uuid';

import '../CSS/beverages.css';

import Beverage from './Beverage';
import andros_AppleJuice from '../Images/andros.jpg';
import theglace from '../Images/Honest_TheGlaceBio.jpg';
import limonade from '../Images/Lorina_LimonadeArtisanale.jpg';
import intro from '../Images/intro.jpg';

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
            image: {intro},
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
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
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
        var currentB = <Beverage beverageName={this.state.beverageName} productorName={this.state.productorName} grade={this.state.grade} image={intro}/>;
        var update = this.state.listBeveragesUser.slice();
        update.push(currentB);
        this.setState({listBeveragesUser: update});        
    }

    handleDeletionUser(event){
        var tab = [...this.state.listBeveragesUser];
        var index = event.target.value;
        tab.splice(index, 1);
        this.setState({listBeveragesUser: tab});
    }

    handleDeleteAll(event){
        var tab = [];
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
                                <input type="number" value={this.state.grade} name="grade" min="0" max="5" onChange={this.handleGrade}/>
                                <br/><br/>
                                <input type="button" value="Ajouter" onClick={this.handleAddBeverage}/>
                                <br/><br/>
                                <input type="button" value="Vider la liste" onClick={this.handleDeleteAll}/>
                            </label>
                        </form>     
                    </div>


                    <div className="userBeveragesList">
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
<label for="drinkPicture">Sélectionnez votre photo : </label>
<input type="file" accept="image/*" multiple="false" name="drinkPicture" onChange={this.handlePicture}/>
*/