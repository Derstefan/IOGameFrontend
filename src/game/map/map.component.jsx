import React, { Component } from 'react'
import mapService from './services/map.service'

class MapComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameId:1,
            planets: [],
            fleets: [],
            battles: [],
        }
    }

    componentDidMount(){
        const {gameId} = this.state;
        mapService.getPlanetsMap(gameId).then((res)=>{
            this.setState({planets: res.data});
            console.log(res.data);
        },(error)=>{});

        mapService.getPlanetsMap(gameId).then((res)=>{
            this.setState({battles: res.data});
            console.log(res.data);
        },(error)=>{});

        mapService.getFleetsMap(gameId).then((res)=>{
            this.setState({fleets: res.data});
            console.log(res.data);
        },(error)=>{});

    }

    


    render() {
        return (
            <div>
                <br></br>
                asdwasd
            </div>
        )
    }
}

export default MapComponent