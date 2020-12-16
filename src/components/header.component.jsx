import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className=" text-center"><a className="navbar-brand text-muted">IOGame App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent