import React from 'react'
import _ from 'lodash'
import Spinner from '../../components/Spinner/Spinner'
import Question from '../../components/Question/Question'
import Answer from '../../components/Answer/Answer'
import './homepage.css'
import Button from '../../components/Button/Button'

export default class Homepage extends React.Component {

    state = {
        error: this.props.error,
        flashCards: [],
        lastPlayed: '',
        roundCards: [],
        currCard: { question: '', answer: '' },
        isFlipped: false
    }

    popCard = () => {
        const roundCardsCopy = [...this.state.roundCards]
        const currCard = roundCardsCopy.pop()
        console.log('current card: ', currCard)
        console.log('round cards:', this.state.roundCards)
        this.setState({ currCard: currCard, roundCards: roundCardsCopy, isFlipped: false })
        console.log('currentShown: ', this.state.currCard)
        console.log('copy:', roundCardsCopy)
        console.log('original: ', this.state.roundCards)
    }

    flipCard = () => {
        this.setState({ isFlipped: true })
    }



    componentDidMount = () => {
        const cardsCopy = [...this.props.flashCards]
        const shuffleCards = cardsCopy.sort(() => 0.5 - Math.random())
        console.log('copy: ', cardsCopy)
        console.log('shuffle: ', shuffleCards)
        this.setState(() => { return { roundCards: shuffleCards } })
        this.popCard()
    }






    render() {

        return <div className='homepage-container'>

            <div className={`flip-card ${this.state.isFlipped && "flipped"}`}>
            </div>
            <div className="flip-card-inner" >
                <div className="flip-card-front">
                    {this.state.currCard &&
                        <Question question={this.state.currCard.question} />
                    }
                </div>
                <div className="flip-card-back">
                    {this.state.currCard &&
                        <Answer answer={this.state.currCard.answer} />
                    }
                </div>
            </div>
            <button onClick={() => this.popCard()}>reveal card</button>
            {/* <Button content="Reveal Card" clickFunction={this.popCard} /> */}
            <Button content="Reveal anwer" clickFunction={this.flipCard} />
            <div>
                <h3>Did you get it right?</h3>
                <Button content="yes" clickFunction={this.popCard} />
            </div>
        </div>

    }

}