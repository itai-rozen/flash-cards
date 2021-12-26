import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Manage from './pages/Manage/Manage';
import Api from './api'
import './App.css';
import Nav from './components/Nav/Nav';

export default class App extends React.Component {
  state = { flashCards: [], error: '' ,isLoading:true}

  updateState = async () => {
    try {
      const data = await Api.getCards()
      console.log(data)
      this.setState({ flashCards: data.data})
    } catch (err){
      console.log('error:',err)
      this.setState({ error: err.message})
    }
  }


  updateError = msg => this.setState({error: msg})
  componentDidMount =  () => {
     this.updateState()
  }
  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            {this.state.flashCards.length &&
            <Route path="/" element={<Homepage updateError={this.updateError} 
            error={this.state.error}  
            updateState={this.updateState}
            flashCards={this.state.flashCards} 
            />} />
          }
            <Route path="/manage" element={<Manage updateError={this.updateError} 
                                                   error={this.state.error} 
                                                   updateState={this.updateState} 
                                                   flashCards={this.state.flashCards} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

}

