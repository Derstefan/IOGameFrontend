import React, { Component } from 'react'

class PlanetComponent extends Component {


    render() {
        const {x,y}=this.props;
        const style = {
            top: x+"px",
            left: y+"px",
            backgroundColor: "green",
            
            width: "10px",
            height: "10px",
            position: "relative",
            borderRadius: "50%",          
        }
        return (
            <div style={style}>
            </div>
        )
    }
}

export default PlanetComponent