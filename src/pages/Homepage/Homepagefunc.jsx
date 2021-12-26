import React, {useState, useEffect} from 'react'
import Question from '../../components/Question/Question'
import Answer from '../../components/Answer/Answer'
import Button from '../../components/Button/Button'
import _ from 'lodash'

const Homepage = ({flashCards}) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [cards,setCards] = useState([])
    const [roundCards,setRoundCards] = useState([])
    const [currCard,setCurrCard] = useState({})

    useEffect(() => {
        setCards(flashCards)
        const shuffledCards = _.shuffle([...cards])
        setRoundCards(shuffledCards)
        console.log(roundCards)
        console.log(shuffledCards)
        console.log(flashCards)
    },[flashCards])


    const popCard = () => {
        const roundCardsCopy = [...roundCards]
        const currCard = roundCardsCopy.pop()
        console.log('current card: ',currCard)
        setCurrCard(currCard)
        setRoundCards(roundCardsCopy)
        setIsFlipped(true)
        console.log('currentShown: ', this.state.currCard)
        console.log('copy:', roundCardsCopy)
        console.log('original: ', this.state.roundCards)
    }

    const flipCard = () => setIsFlipped(true)

    return  <div className='homepage-container'>

    <div className={`flip-card ${isFlipped && "flipped"}`}>
    </div>
     <div className="flip-card-inner" >
        <div className="flip-card-front">
            {currCard &&
            <Question question={currCard.question} />
            }
        </div>
        <div className="flip-card-back">
            {currCard &&
            <Answer answer={currCard.answer} />
            }
        </div>
    </div>
    <Button content="Reveal Card" clickFunction={popCard} />
    <Button content="Reveal anwer" clickFunction={flipCard} />
    <div>
        <h3>Did you get it right?</h3>
        <Button content="yes" clickFunction={popCard} />
    </div>
</div>
}

export default Homepage