import React, { Component } from 'react';
import '../Monti/Monti.css'
import './BreatheOrb.css'

class BreatheOrb extends Component {

  state = {
    orbtext: 'inhale',
    isVisible: false
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
      4000
    )


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


  render() {
    let className = 'orb';

    if (this.props.started) {
      className += ' orb_1';
    }

    return (
      this.state.isVisible &&
      <div className='outerorb'>
        <div className={className}>
          {/* {this.state.orbtext} */}
        </div>
      </div>
    )
  }
}

export default BreatheOrb;