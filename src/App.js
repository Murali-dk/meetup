import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Context from './Context/Context'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isRegister: false,
    slectValue: 'ARTS_AND_CULTURE',
    inputValue: '',
    err: '',
  }

  clear = () => {
    this.setState({inputValue: '', slectValue: 'ARTS_AND_CULTURE'})
  }

  homeContent = (i, s) => {
    this.setState({isRegister: true, inputValue: i, slectValue: s})
  }

  clikced = read => {
    console.log(read)
    this.setState({slectValue: read})
  }

  clickedInput = input => {
    console.log(input)
    this.setState({inputValue: input})
  }

  errMsg = msg => {
    console.log(msg)
    this.setState({err: msg})
  }

  render() {
    const {isRegister, slectValue, inputValue, err} = this.state
    return (
      <Context.Provider
        value={{
          isRegister,
          slectValue,
          clikced: this.clikced,
          inputValue,
          clickedInput: this.clickedInput,
          errMsg: this.errMsg,
          err,
          homeContent: this.homeContent,
          clear: this.clear,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
