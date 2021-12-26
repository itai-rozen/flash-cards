import React from 'react'
import './button.css'

export default class Button extends React.Component {
    handleClick = async () => {
        if (this.props.clickFunction){
            try {
                await this.props.clickFunction(this.props.parameter)
                if (this.props.updateState) {
                    console.log('updated the state!')
                    this.props.updateState()
                }
            } catch(err){
                this.props.updateError(err.message)
            }
        } 
    }
    render() {
        return <button onClick={() => this.handleClick()}>{this.props.content}</button>
    }
}