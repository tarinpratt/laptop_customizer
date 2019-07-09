import React, { Component } from 'react';


class Total extends Component{

  render(){
        const total = Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0)
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        .format(total)
        
        ; 
       

    }
}
export default Total;