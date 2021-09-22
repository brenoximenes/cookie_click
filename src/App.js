import React, { Component } from 'react';
import coockie from './cookie.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import ReactTooltip from 'react-tooltip';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
  }

  incrementCookie = () => {
    this.setState({ count: this.state.count + 1})
  }

  increment10 = () => {
    const interval = setInterval(() => {
      this.setState({ count: this.state.count + 10});
    }, 1000);
    return () => clearInterval(interval);
  }

  increment20 = () => {
    const interval = setInterval(() => {
      this.setState({ count: this.state.count + 20});
    }, 2000);
    return () => clearInterval(interval);
  }

  increment30 = () => {
    const interval = setInterval(() => {
      this.setState({ count: this.state.count + 20});
    }, 4000);
    return () => clearInterval(interval);
  }

  render() {
    return (
      <div className="overlay">
      <div className="App">
        <h1 className='title'>Click the Cookie</h1>
    
        <div className="cookie-wrapper">
        <img src={coockie} onClick={this.incrementCookie}
        className="cookie" alt="Cookie" />
        </div>

        <div className="cookie-counter">
        <h1>{this.state.count} Cookies</h1>
        </div>
        
        <div className="buttons">
    
          <span ref={ref => this.fooRef = ref} 
          data-tip='You have to Bake 50 Cookies to unlock'
          data-background-color='#B77234'>
          <button  disabled={this.state.count < 50} 
            className="btn" onTouchStart={() => { ReactTooltip.show(this.fooRef) }} 
            onClick={ this.increment10}>
            <img className="icon" src={icon1} alt="iconcookie" />
            <p className="btn-text"> +10 IN 1 SEC </p>
          </button>      
          <ReactTooltip />
          </span>
            
          <span ref={ref => this.fooRef = ref} 
          data-tip='You have to Bake 600 Cookies to unlock'
          data-background-color='#B77234'>
          <button  disabled={this.state.count < 600} 
            className="btn" onTouchStart={() => { ReactTooltip.show(this.fooRef) }} 
            onClick={ this.increment20}>
            <img className="icon" src={icon2} alt="iconcookie" />
            <p className="btn-text"> +20 IN 2 SEC </p>
          </button>      
          <ReactTooltip />
          </span>

          <span ref={ref => this.fooRef = ref} 
          data-tip='You have to Bake 5000 Cookies to unlock'
          data-background-color='#B77234'>
          <button  disabled={this.state.count < 5000} 
            className="btn" onTouchStart={() => { ReactTooltip.show(this.fooRef) }} 
            onClick={ this.increment30}>
            <img className="icon" src={icon3} alt="iconcookie" />
            <p className="btn-text"> +30 IN 4 SEC </p>
          </button>      
          <ReactTooltip />
          </span>
        
        </div>  
      </div>
      </div>
    );
  }
  
}

export default App;
