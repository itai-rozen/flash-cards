import React from 'react'
import Question from '../../components/Question/Question'
import Answer from '../../components/Answer/Answer'
import Button from '../../components/Button/Button'
import './homepage.css'

export default class Homepage extends React.Component {

    state = {
        error: this.props.error,
        lastPlayed: '',
        isFlipped: false,
        isResolved: true,
        isDone: false,
        cards: this.props.flashCards,
        roundCards: []
    }

    popCard = () => {
        const roundCardsCopy = [...this.state.roundCards]
        const currCard = roundCardsCopy.pop()
        this.setState({ currCard: currCard, roundCards: roundCardsCopy, isFlipped: false, isResolved:!this.state.isResolved })
        console.log(this.state.roundCards)

    }

    flipCard = () => {
        this.setState({ isFlipped: true })
        if (this.state.roundCards.length === 0){
            this.setState({isDone:true})
            return
        }
    }


    backToThePile = () => {
        const roundCardsCopy = [...this.state.roundCards]
        roundCardsCopy.unshift(this.state.currCard)
        this.setState({ roundCards: roundCardsCopy , isFlipped: false, isResolved:!this.state.isResolved})
    }
    startRound = () => {
        const shuffled = [...this.state.cards]
        this.setState({isDone:false, roundCards: shuffled.sort(() => 0.5 - Math.random()) })
    }
    componentDidMount = () => {
        this.startRound()
    }


    render() {

        return <div className='homepage-container'>
            <div className={`flip-card ${this.state.isFlipped && 'flipped'}`}>

                <div className={`flip-card-inner }`} >
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
            </div>
            <div className="progression">{this.state.cards.length-this.state.roundCards.length}/{this.state.cards.length}</div>
            <button disabled={!this.state.isResolved || this.state.isDone} onClick={this.popCard}>Reveal Card</button>
            <button disabled={this.state.isResolved || this.state.isDone}  onClick={this.flipCard}>Reveal answer</button>
            <div className="resolve-container">

            {(this.state.isFlipped && !this.state.isDone ) &&
                <div>
                    <h3>Did you get it right?</h3>
                    <button onClick={() => this.setState({isFlipped: false, isResolved:!this.state.isResolved})}>
                        yes
                    </button>
                    <button onClick={this.backToThePile}>
                        no
                    </button>
                </div>
            }
            </div>
            <div className="done-conatainer">
            {this.state.isDone && <div>
                    <h2>you're done!</h2>    
                    <button onClick={this.startRound}>start over?</button>
            </div>}
            </div>

        </div>

    }

}