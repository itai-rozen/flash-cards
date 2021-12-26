import React from 'react'
import Api  from './../../api'
import Button from '../Button/Button'
import './flashCard.css'
import Form from '../Form/Form'
import Question from '../Question/Question'
import Answer from '../Answer/Answer'

export default class FlashCard extends React.Component {
    state = {isEdit: false}
    toggleEditForm = () => {
        this.setState({isEdit : !this.state.isEdit})
    }
    render(){
        return <div className='card-container'>
            <Question question={this.props.card.question} />
            <Answer answer={this.props.card.answer} /> 
            <Button content="delete" updateState={this.props.updateState}
                            updateError={this.props.updateError}
                            clickFunction={Api.deleteCard}
                            parameter={this.props.card.id} />
                        <Button content="edit"
                            clickFunction={this.toggleEditForm} />
                        {this.state.isEdit && <Form card={this.props.card}
                            formAction="edit"
                            updateState={this.props.updateState}
                            buttonClickFunction={this.toggleEditForm} />
                        }
        </div>
    }
}