import React, { Component } from 'react';


class Total extends Component{

    render(){
        return Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);    

    }
}
export default Total;