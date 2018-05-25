import React, { Component } from 'react';
import '../Monti/Monti.css'
import './BreatheOrb.css'

class BreatheOrb extends Component {

  state = {
    orbtext: 'inhale'
  }

  componentDidMount(){
    this.updateText();
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
    return(
      <div className='outerorb'>
        <div className='orb orb_1'>
          {this.state.orbtext}
        </div>
      </div>
    )
  }
}

export default BreatheOrb;