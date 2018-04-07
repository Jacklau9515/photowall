import React, {Component} from 'react';
import Title from './Title';
import List from './List';

class Main extends Component{
    render(){
        return <div>
                <Title title={'Hello'}/>
                <List tasks={['A', 'B', 'C']}/>
                <List tasks={['1', '2', '3']}/>
                </div>
    }
}

export default Main;