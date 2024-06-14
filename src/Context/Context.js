import React from 'react'

const Context = React.createContext({
  isRegister: false,
  clikced: () => {},
  clickedInput: () => {},
  slectValue: 'Arts and Culture',
  errMsg: () => {},
  err: '',
  homeContent: () => {},
  inputValue: '',
  clear: () => {},
})

export default Context
