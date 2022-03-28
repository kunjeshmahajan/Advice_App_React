import React from 'react'
import './App.css';
import axios from 'axios';
class App extends React.Component{
  state = {
    advice:''
  }

  fetchAdvice = ()=>{
    axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{
        const {advice} = response.data.slip
        this.setState({advice})
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  componentDidMount(){
    this.fetchAdvice()
  }
  render(){
    const {advice} = this.state
    return(
      <div className="app">
        <div className="card">
          <h1>{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give Me Advice</span>
          </button>
        </div>
      </div>
      
    )
  }
}

export default App;
