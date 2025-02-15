import React, { Component } from 'react';
import FeatureHeader from './FeatureHeader';
import FeatureList from './FeatureList';
import Header from './Header';
import Total from './Total';
import TotalLabel from './TotalLabel';
import SummaryHeader from './SummaryHeader';
import Summary from './Summary';
import './App.css';

class App extends Component {
  
state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    return (
      <div className="App">
        <Header />   
        <main>
          <section className="main__form">
            <FeatureHeader />
            <FeatureList
            features={this.props.features}
            selected={this.state.selected}
            updateFeature={this.updateFeature}
            />
          </section>
          <section className="main__summary">
            <SummaryHeader />
            <Summary 
            selected={this.state.selected}
            />
            <div className="summary__total">
             <TotalLabel />
              <div className="summary__total__value">
                <Total   
                selected={this.state.selected}
              />
              </div>
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default App; 