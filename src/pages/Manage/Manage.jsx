import React from 'react'
import FlashCard from '../../components/FlashCard/FlashCard'
import Form from '../../components/Form/Form'
import './manage.css'
import Button from '../../components/Button/Button'

export default class Manage extends React.Component {
    state = { isAdd: false,  error: this.props.error }
    componentDidMount = () => {
        this.setState({ isAdd: false })
    }

    toggleAddForm = () => {
        this.setState({ isAdd: !this.state.isAdd })
    }



    render() {

        return <div className='manage-container'>
            <div className="flashcards-container">
            {
                this.props.flashCards.map(card => {
                    return <div className='flashcard' key={card.id}>
                        <FlashCard
                            updateError={this.props.updateError}
                            error={this.props.error}
                            updateState={this.props.updateState}
                            card={card} />

                    </div>
                })
            }
            </div>
            <div className="add-btn">
            <Button content="Add" clickFunction={this.toggleAddForm} />
            </div>
            {
                this.state.isAdd && <Form buttonClickFunction={this.toggleAddForm}
                    updateState={this.props.updateState}
                    formAction="add" />
            }

        </div>
    }
}