import React, { Component } from 'react';
import FeatureItems from './FeatureItems';


class FeatureList extends Component{
    render(){
        return Object.keys(this.props.features)
                .map(key => {
                
                    return <div className='feature'>
                                <div className="feature__name">{key}</div>
                                <ul className="feature__list">
                                    <FeatureItems
                                        myKey={key}
                                        myFeatures={this.props.features}
                                        mySelected={this.props.selected}
                                        updateFeature={this.props.updateFeature}
                                    />
                                </ul>
                            </div>;
                });
            
        
    }
}
      
export default FeatureList;