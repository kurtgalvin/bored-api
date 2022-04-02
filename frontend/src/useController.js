import { useReducer } from "react";
import axios from 'axios'

const initialState = {
  activity: { activity: '', accessibility: '', type: '', participants: '', price: '', link: '' },
  activityOptions: { accessibility: [], price: [] }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'getActivityOptions':
      return { ...state, activityOptions: action.payload }
    case 'getActivity':
      return { ...state, activity: action.payload }
    default:
      return state
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatcher = {
    async getActivityOptions() {
      const res = await axios.get('/activity/options')
      dispatch({
        type: 'getActivityOptions',
        payload: res.data
      })
    },

    async getActivity() {
      const res = await axios.get('/activity')
      dispatch({
        type: 'getActivity',
        payload: res.data
      })
    },
  
    async createUser({ name, accessibility, price }) {
      await axios.post('/user', { name, accessibility, price })
    }
  }
  return [state, dispatcher]
}