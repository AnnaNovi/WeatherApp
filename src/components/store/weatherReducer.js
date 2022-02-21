export const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case 'setWeather':
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const getWeatherAction = (payload) => ({type: 'setWeather', payload})