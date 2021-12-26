import React from 'react'
import './answer.css'

export default class Answer extends React.Component {
    render() {
        return <div className="answer">{this.props.answer}</div>
    }
}