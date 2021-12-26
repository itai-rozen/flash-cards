import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Api from './../../api'
import './form.css'

export default class Form extends React.Component {
    state = {id: '', question: '', answer: '' }
    handleSubmit = async e => {
        const {id, question, answer} = this.state
        e.preventDefault()
        if (this.props.formAction === 'add'){
            await Api.postCard({question,answer})
            this.props.updateState()
        } else {
            await Api.updateCard(id, {question,answer})
            this.props.updateState()
        }
    }

    handleChange = e => {
        const {id, value} = e.target
        this.setState({ [id] : value }) 
    }

    componentDidMount = () => {
        if (this.props.formAction === 'edit'){
            const { formAction, card} = this.props
            const {id, question, answer} = card
            this.setState({id: id, question: question, answer: answer})

        }
    }


    render(){
        return <div className='form-container'>
        <Link to="/manage">
            Back to manage page
        </Link>
         <form onSubmit={(e) => this.handleSubmit(e)}>
             <Button content="close" clickFunction={this.props.buttonClickFunction} />
            <label htmlFor="question">Question</label>
            <input value={this.state.question} onChange={(e) => this.handleChange(e)} id="question" type="text" className="form-input" />
            <label htmlFor="answer">Answer</label>
            <input value={this.state.answer} onChange={(e) => this.handleChange(e)} id="answer" type="text" className="form-input" />
            <input type="submit" value="Ok" />
        </form>
        </div>
    }
}