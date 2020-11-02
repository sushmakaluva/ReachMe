import React from 'react';
import EscapeOutside from "react-escape-outside";

class Escape extends Component {

    constructor() {
        super()

        this.state = {
            isOpen: false,
        }

        this.handleEscapeOutside = this.handleEscapeOutside.bind(this)
    }

    handleEscapeOutside() {
        this.setState({ isOpen: false })
    }

    render() {
        return (
            <EscapeOutside onEscapeOutside={this.handleEscapeOutside}>
                <div>Some content that will be closed</div>
            </EscapeOutside>
        )
    }
}

default export Escape;