import React, { Component } from 'react';


class Total extends Component{


    render(){
        return Object.keys(this.state.selected)
        .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    

    }
}
export default Total;