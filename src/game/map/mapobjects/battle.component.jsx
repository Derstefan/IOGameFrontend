import React, { Component } from 'react'

class BattleComponent extends Component {


    render() {
        const {x,y}=this.props;
        const style = {
            top: x+"px",
            left: y+"px",
            backgroundColor: "red",  

            width: "10px",
            height: "10px",
            position: "relative",
        }
        return (
            <div style={style}>
            </div>
        )
    }
}

export default BattleComponent