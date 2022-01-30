import React from "react";

class HeroText extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: 'This is Hero Text '
        }
    }

    render() {
        return(
            <div>
                <div>
                    <h1>{this.state.text}</h1>
                    <button onClick={() => this.changeText()}>change text</button>
                </div>
            </div>
        )

    }

    changeText() {
        this.setState({
            text:'This is new heading '
        })
    }
}

export default HeroText;