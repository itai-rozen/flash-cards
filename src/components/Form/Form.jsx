import React from 'react'
import Button from '../Button/Button'
import Api from './../../api'
import './form.css'

export default class Form extends React.Component {
    state = {id: '', question: '', answer: '',error: '' }
    handleSubmit = async e => {
        const {id, question, answer} = this.state
        e.preventDefault()
        if (!question || !answer){
            this.setState({error: 'must fill Q & A fields!'})
            setTimeout(() => {
                this.setState({error: ''})
            }, 1500)
            return
        }
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
            const {  card} = this.props
            const {id, question, answer} = card
            this.setState({id: id, question: question, answer: answer})

        }
    }


    render(){
        return <div className='form-container'>

         <form onSubmit={(e) => this.handleSubmit(e)}>
             <Button content="close" clickFunction={this.props.buttonClickFunction} />
            <label htmlFor="question">Question</label>
            <input value={this.state.question} onChange={(e) => this.handleChange(e)} id="question" type="text" className="form-input" />
            <label htmlFor="answer">Answer</label>
            <input value={this.state.answer} onChange={(e) => this.handleChange(e)} id="answer" type="text" className="form-input" />
            <input type="submit" value="Ok" />
            <h5 className='error'>{this.state.error}</h5>
        </form>
        </div>
    }
}