import React, { Component } from 'react';
import Features from './Features';
import Header from './Header';
import Total from './Total';
import TotalLabel from './TotalLabel';
import Summary from './Summary';
import './App.css';

class App extends Component {




  render() {


    return (
      <div className="App">
        <Header />   
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Features 
            features={this.props.features}
            />
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Summary />
            <div className="summary__total">
             <TotalLabel />
              <div className="summary__total__value">
                <Total />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App; 