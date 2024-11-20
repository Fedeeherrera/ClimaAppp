import axios from 'axios'
import { SearchType } from '../types';

export default function useWeather() {

  const fetchWeather = async (search : SearchType) => {
    const appID = 'c5f627843268b28f070c1d250162d9a1'
    
    try {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`
      console.log(geoURL);
      

    } catch (error) {
      console.log(error)
    }
  }

  return {
    fetchWeather,
  }
}
