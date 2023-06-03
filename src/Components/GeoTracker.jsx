import React, { Component } from 'react'
import getInfo from '../Services/getInfo'
export default class GeoTracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: null,
            loading:true
        }
    }

    componentDidMount() {
        getInfo().then(data => {
            console.log(data);
        })
    }

  render() {
    return (
      <div>GeoTracker</div>
    )
  }
}
