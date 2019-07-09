import React, { Component } from 'react';

class SummaryItems extends Component {
    render(){
        return <div className="summary__option" key={this.props.myKey}>
        <div className="summary__option__label">{this.props.myKey}  </div>
        <div className="summary__option__value">{this.props.name}</div>
        <div className="summary__option__cost">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(this.props.cost) }
        </div>
    </div>
    }
}

export default SummaryItems;