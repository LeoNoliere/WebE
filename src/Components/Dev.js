import React from 'react';

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
                <img src={this.props.devPicture} height="200" width="200"></img> <br/>
                Nom : {this.props.devLastName} <br/>
                Prénom : {this.props.devFirstName} <br/>
            </div>
        )
    }
}

export default Dev;