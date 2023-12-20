import BackgroundCofe from "@layout/atoms/BackgroundCofe"
import '../src/styles/app.css'
import BackgroundDefault from "@ui/atoms/BackgroundDefault"
function App() {
  return (
    <div className="app">
      <BackgroundCofe>
        <BackgroundDefault>
          <p>TESTE</p>
        </BackgroundDefault>
      </BackgroundCofe>
    </div>
  )
}

export default App
