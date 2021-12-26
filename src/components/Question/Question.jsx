import React from 'react'
import './question.css'

export default class Question extends React.Component {
    render() {
        return <div className="question">{this.props.question}</div>
    }
}