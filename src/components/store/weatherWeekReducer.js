export const weatherWeekReducer = (state = null, action) => {
  switch (action.type) {
    case 'setWeatherWeek':
      return {...state, ...action.payload}
    default:
      return state
  }
}

export const getWeatherWeekAction = (payload) => ({type: 'setWeatherWeek', payload})