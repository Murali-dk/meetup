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

const Register = props => (
  <Context.Consumer>
    {value => {
      const {
        slectValue,
        inputValue,
        clikced,
        clickedInput,
        errMsg,
        err,
        homeContent,
        clear,
      } = value

      const changeEvent = event => {
        clikced(event.target.value)
      }

      const changeInput = event => {
        clickedInput(event.target.value)
      }

      const submitForm = event => {
        event.preventDefault()
        if (inputValue === '') {
          errMsg('Please enter your name')
        } else {
          homeContent(inputValue, slectValue)
          const {history} = props
          history.replace('/')
        }
      }

      return (
        <div>
          <img
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <form onSubmit={submitForm}>
            <h1>Let us join</h1>
            <label htmlFor="name">NAME</label>
            <input
              onChange={changeInput}
              id="name"
              type="name"
              placeholder="Your name"
              value={inputValue}
            />
            <label htmlFor="topic">TOPICS</label>
            <select onChange={changeEvent} id="topic" value={slectValue}>
              {topicsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Register Now</button>
            <p>{err}</p>
          </form>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Register
