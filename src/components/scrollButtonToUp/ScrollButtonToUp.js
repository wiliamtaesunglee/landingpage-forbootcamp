import { useState, useEffect } from 'react'

const StateButtonValidation = () => {
 const [clicked, setClicked] = useState(false)

useEffect(() => {
  if(clicked) {
    console.log('ai sim!')
    window.scrollTo(4985 ,960)
  }
  setClicked(false)
}, [clicked])

const isClicked = (event) => {
  event.preventDefault()
  setClicked(true)

 }

return { isClicked }
}

export default StateButtonValidation
