import { useReducer } from "react";
import axios from 'axios'

const initialState = {
  activityOptions: { accessibility: [], price: [] },
  user: { name: '', accessibility: '', price: '' },
  activity: { activity: '', accessibility: '', type: '', participants: '', price: '', link: '' },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'getActivityOptions':
      return { ...state, activityOptions: action.payload }
    case 'getUser':
      return { ...state, user: action.payload }
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

    async getUser() {
      const res = await axios.get('/user')
      dispatch({
        type: 'getUser',
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
      const res = await axios.post('/user', { name, accessibility, price })
      dispatch({
        type: 'getUser',
        payload: res.data
      })
    }
  }
  return [state, dispatcher]
}