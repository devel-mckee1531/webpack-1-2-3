import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = () => {
  return (
    <strong>
      Hello World !!!
    </strong>
  )
}


window.addEventListener('load', () => {
  const container = document.getElementById('root')
  ReactDOM.render(
    <HelloWorld />,
    container,
  )
})
