import ScoreWidget from './components/ScoreWidget'
import Login from './components/Login'
import Counter from './components/Counter'
import './App.css'

const App = () => {


  return (
    <>
      <div className="app-container">
        <h1>React Data</h1>
        {/* Points here is our props */}
        <h2>App Component (Parent Component)</h2>
        <Counter />
        <ScoreWidget 
          // points={100} 
          playerName="John Doe"
          team="Red"
        />
        <ScoreWidget 
          points={98} 
          playerName="Kobe Byrant"
          team="Red"
        />
        <ScoreWidget 
          points={111} 
          playerName="Stephen Curry"
          team="Blue"
        />
        <Login />
        <Counter />
      </div>
    </>
  )
}

export default App
