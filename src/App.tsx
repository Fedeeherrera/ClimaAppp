import CSS from './App.module.css'
import Form from './Form/Form'
import useWeather from './hooks/useWeather'

function App() {

  const { fetchWeather } = useWeather()

  return (
    <>
      <h1 className={CSS.title}>Buscador de Clima</h1>

      <div className={CSS.container}>
      <Form fetchWeather={fetchWeather}/>
        <p>2</p>
      </div>

    </>
  )
}

export default App
