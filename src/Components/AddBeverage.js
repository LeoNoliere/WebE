import React from 'react';
import Beverage from './Beverage';

class AddBeverage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            beverageName: '',
            productorName: '',
            grade: 0
        };
        this.handleBeverageName = this.handleBeverageName.bind(this);
        this.handleProductorName = this.handleProductorName.bind(this);
        this.handleGrade = this.handleGrade.bind(this);

        this.handleAddBeverage = this.handleAddBeverage.bind(this);
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
      
      handleAddBeverage(event){
        <Beverage beverageName={this.state.beverageName} 
                  productorName={this.state.productorName}
                  grade={this.state.grade}
        />          
      }
      

    render(){
        return(
            <div className='addBeverageForm'>
                <form>
                    <label>
                        Nom de votre boisson: 
                        <input type="text" onChange={this.handleBeverageName}/>
                        Producteur de votre boisson:
                        <input type="text" onChange={this.handleProductorName}/>
                        Note que vous lui attribué: 
                        <input type="text" onChange={this.handleGrade}/>

                        <button onClick={this.handleAddBeverage}>
                            Ajouter
                        </button>
                    </label>
                </form>
            </div>    
        );
    }
} 

export default AddBeverage;