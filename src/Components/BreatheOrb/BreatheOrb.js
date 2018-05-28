import React, { Component } from 'react';
import '../Monti/Monti.css'
import './BreatheOrb.css'

class BreatheOrb extends Component {

  state = {
    orbtext: 'inhale',
    isVisible: false,
    strokeDashoffset: 502.654824574,
    strokeDasharray: "502.654824574 502.654824574",
    progress: 0,
  }

  componentDidMount() {
    this.updateText();
    setTimeout(
      () => {
        this.setState({
          isVisible: true
        });
        window.scrollBy({
          top: 600,
          left: 0,
          behavior: 'smooth'
        });
      },
      1000
    )
  }

  componentWillReceiveProps(next) {
    if (next.started) {
      setTimeout(
        () => setInterval(
          () => this.setProgress(this.state.progress + 10),
          7500
        ),
        500
      )
      
    }
  }

  updateText = () => {
    //Sets the text to inhale
    this.setState({
      orbtext: 'inhale'
    })

    //Sets the text to exhale after 6500 ms
    setTimeout(
      () => this.setState({
        orbtext: 'exhale'
      }), 6000
    )

    setTimeout(
      this.updateText
      , 12000)
  }

  setProgress(value) {

    if(this.state.progress < 100) {
      const RADIUS = 80;
      const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  
      const progress = value / 100;
      const dashoffset = CIRCUMFERENCE * (1 - progress);
  
      console.log(dashoffset);
      console.log(CIRCUMFERENCE)
  
      this.setState({
        strokeDashoffset: dashoffset,
        strokeDasharray: CIRCUMFERENCE,
        progress: value
      })

      if(dashoffset === 0) {
        this.props.orbCompleted();
      }
    } 
  }


  render() {
    let className = 'orb';
    const { strokeDashoffset, strokeDasharray } = this.state;

    if (this.props.started) {
      className += ' orb_1';
    }

    return (
      this.state.isVisible &&
      <div className='outerorb'>
        <div className={className}>
        </div>
        <div className="demo">
          <svg className="progress" width="200" height="200" viewBox="-5 0 200 200">
            <circle className="progress__meter" cx="100" cy="100" r="80" strokeWidth="12" />
            <circle strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} className="progress__value" cx="100" cy="100" r="80" strokeWidth="12" />
          </svg>
        </div>
      </div>
    )
  }
}

export default BreatheOrb;