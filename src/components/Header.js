import React from 'react'

const Header = ({onDarkModeClick, onDarkMode}) => {
  return (
    <header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
      {onDarkMode ? "Dark" : "Light"} Mode
    </button>
  </header>
  )
}

export default Header