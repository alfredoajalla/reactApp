import { ReactNode } from 'react'
import './App.css'
import { AppForm, Button, ColorRed } from './components'

function App() {
  // Validations
  // submit
  const submit = () => {
    console.log("submited");
  }
  const handleClick = () => {
    console.log("Pressed a Button")
  }

  const sayHello = () => {
    alert("Hello!")
  }

  return (
    <>
    <ColorRed><Button parentMethod={sayHello}>My Red Button</Button></ColorRed>
    <Button parentMethod={handleClick}>Normal Button</Button>
    
    <AppForm>
      <button type="submit" onClick={submit}></button>
    </AppForm>
    </>
  )
}

export default App
