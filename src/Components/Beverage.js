import React from 'react'
import { v4 as uuid } from 'uuid';

import '../CSS/beverage.css';

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
            grade: 0
        }

    }

    render(){
        return(
            <div className="beverage">
				<h2>{this.props.beverageName}</h2>
                <img src={this.props.image} alt={this.props.beverageName}></img><br/>
                <h2>{this.props.productorName}</h2>
                <p>Note: {this.props.grade}/5</p>
            </div>
        )
    }
}

export default Beverage;