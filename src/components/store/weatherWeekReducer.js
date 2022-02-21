export const weatherWeekReducer = (state = null, action) => {
  switch (action.type) {
    case 'setWeather':
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const getWeatherWeekAction = (payload) => ({type: 'setWeather', payload})