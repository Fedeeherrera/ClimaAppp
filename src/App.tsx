import CSS from './App.module.css'
import Form from './Form/Form'

function App() {
  return (
    <>
      <h1 className={CSS.title}>Buscador de Clima</h1>

      <div className={CSS.container}>
      <Form/>
        <p>2</p>
      </div>

    </>
  )
}

export default App
