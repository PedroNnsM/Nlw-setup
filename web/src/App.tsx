import { Habit } from "./components/Habit"
import './styles/global.css'

function App() {

  return (
    <div>
      <Habit completed={3} />
      <Habit completed={7} />
      <Habit completed={2} />
      <Habit completed={2} />
    </div>
  )
}

export default App
