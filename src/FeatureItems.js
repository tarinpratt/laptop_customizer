import React, { Component } from 'react';


class FeatureItems extends Component {

  render(){

     const featureArray = this.props.myFeatures[this.props.myKey].map((item, index) => {    
       const selectedClass = item.name === this.props.mySelected[this.props.myKey].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <li key={index} className="feature__item">
          <div className={featureClass}
            
            onClick={() => this.props.updateFeature(this.props.myKey, item)}>
              { item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(item.cost) })
              
          </div>
        </li>;
      })
      return featureArray;
    }
}
  export default FeatureItems;