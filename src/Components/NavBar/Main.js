import React from 'react';
import Beverages from '../Beverages';
import Music from '../Music';

class Main extends React.Component{
    render(){
        return(
            <div className='Main'>
                <Beverages/>
                <Music/>
            </div>
        )
    }
}

export default Main;