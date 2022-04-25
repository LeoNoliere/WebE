import React from 'react';
import '../CSS/About.css';
class Dev extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            devPicture: new Image(),
            devLastName: '',
            devFirstName: ''  
        }
    }

    render(){
        return(
            <div className='Dev'>
                <img src={this.props.devPicture}/> <br/>
                Nom : {this.props.devLastName} <br/>
                Prénom : {this.props.devFirstName} <br/>
            </div>
        )
    }
}

export default Dev;