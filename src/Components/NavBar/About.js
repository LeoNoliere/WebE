import React from 'react';
import Dev from '../../Components/Dev.js';
import charly from '../../Images/CharlyB.jpg'
//import charly from '../../Images/charly.jpeg'

class About extends React.Component{
    render(){
        return(
            <div className='About'>
                Voici les informations sur les développeurs qui on participé à ce TP: <br/>
                <Dev devPicture={charly} devLastName="Beaugas" devFirstName="Charly"/>
                <Dev devLastName="Benveniste" devFirstName="Jules"/>
            </div>
        )
    }

}

export default About;