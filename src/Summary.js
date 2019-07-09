import React, { Component } from 'react';
import SummaryItems from './SummaryItems';

class Summary extends Component {

render() {

return Object.keys(this.props.selected)
          .map(key =>
            <SummaryItems 
            myKey={key}
            name={this.props.selected[key].name}
            cost={this.props.selected[key].cost}
            /> )
  }
}

export default Summary;