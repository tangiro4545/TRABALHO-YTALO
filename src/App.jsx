import google from './assets/Google.png'
import facebook from './assets/facebook.webp'
import './App.css'

function App() {

  return (
    <>
      <main>
        <header>
          <h1>Entrar</h1>
        </header>
        <section>
          <div className='entracom'>
            <button id='face'><img src={facebook} alt="" />Facebook</button>
            <button id='google'><img src={google} alt="" />Google</button>
          </div>
          <div className='divisao'><p className='traco'>——————————</p> <p className='ou'>Ou</p> <p className='traco'>——————————</p>
          </div> 
          <div className='card'>
            <input type="text"
            placeholder='Digite seu e-mail...' />
            <input type="text"
            placeholder='Digite sua senha...' />
            <button id='entrar'>Entrar</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
