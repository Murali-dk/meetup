import {Link} from 'react-router-dom'
import {MainContainer} from './styledComponent'
import Context from '../../Context/Context'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => (
  <Context.Consumer>
    {value => {
      const {isRegister} = value

      const navigateRegisterRoute = () => {
        const {history} = props
        console.log(history)
        history.replace('/register')
      }

      const renderHome = () => {
        const {slectValue, inputValue} = value
        const findText = topicsList.find(eachItem => eachItem.id === slectValue)
        const text = findText.displayText
        return (
          <div>
            <h1>Hello {inputValue}</h1>
            <p>Welcome to {text}</p>
          </div>
        )
      }

      const renderRegisterBtnHome = () => (
        <div>
          <h1>Welcome to Meetup</h1>
          <p>Please register for the topic</p>
          <Link to="/register">
            <button onClick={navigateRegisterRoute} type="button">
              Register
            </button>
          </Link>
        </div>
      )
      return (
        <MainContainer>
          <nav>
            <img
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            />
          </nav>
          {isRegister ? renderHome() : renderRegisterBtnHome()}
          <img
            alt="meetup"
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          />
        </MainContainer>
      )
    }}
  </Context.Consumer>
)

export default Home
