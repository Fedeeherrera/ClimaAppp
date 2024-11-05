import { ChangeEvent, useState } from 'react'
import { countries } from '../data/countries'
import type { SearchType } from '../types'
import CSS from './Form.module.css'

function Form() {

  const [search, setSearch] = useState<SearchType>({
    city : '',
    country : ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({...search, [e.target.name] : e.target.value})
  }
  return (
    <form className={CSS.form}>
      <div className={CSS.field}>
        <label htmlFor="city">Ciudad: </label>
        <input type="text" name="city" id="city" placeholder="Ciudad" value={search.city} onChange={handleChange}/>
      </div>

      <div className={CSS.field}>
        <label htmlFor="Pais">Pais: </label>
        <select value={search.country} name="country" id="country" onChange={handleChange}>
          <option value="">-- Seleccione un Pais --</option>
          {countries.map((country) => (
            <option value={country.code} key={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input className={CSS.submit} type="submit" value="Consultar Clima" />
    </form>
  )
}
export default Form
