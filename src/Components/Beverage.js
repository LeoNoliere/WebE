import React from 'react'
import { v4 as uuid } from 'uuid';


/**
 * Cette classe à pour but de caractériser une boisson
 * En affichant toutes les informations qui le compose.
 */

//Nom de la boisson
//Producteur de la boisson (peut-être nul)
//Image
//Note (juste a number entre 0 & 5)
//ID de la personne : Charly / Jules / Enter your name
//Code couleur CSS correspondant: rose pâle pour Charly / vert pour Jules

class Beverage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            beverageID: uuid(),
            beverageName: '',
            productorName: '',
            image: new Image(),
            grade: 0,
            selectorID: 0,
            colorTag: ''
        }

    }

    handleChange(event){
        console.log("Suppression de l'élément");
    }

    render(){
        return(
            <div>
                <h1>{this.props.beverageName} - {this.props.productorName}</h1>
                <p>
                    <img src={this.props.image} alt={this.props.beverageName} height="200" width="200"></img><br/>
                    Produit par: {this.props.productorName}<br/>
                    Note: {this.props.grade}/5 <br/>
                    Choix de : {this.props.selectorID}
                    (Charly: 0 ; Jules: 1; Autre: +1) <br/>
                    Couleur qui sera sélectionné en fond: {this.props.colorTag}
                </p>
                <button onClick={this.handleChange}>Supprimer occurence</button>
            </div>
        )
    }
}

export default Beverage;