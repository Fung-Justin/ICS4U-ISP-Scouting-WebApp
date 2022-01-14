
import { createStore } from 'vuex'
import axios from 'axios'
import router from './router'






const store = createStore({
  state: {
    user: null
    
  },
  mutations: {
   SET_USER_DATA(state,userData){
     state.user = userData
     localStorage.setItem('user', JSON.stringify(userData))
     axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
   }
  },
  actions: {
    
      register ({ commit }, credentials){
        console.log(credentials);
          return axios.post('http://localhost:5000/register/', credentials).then(({data}) => {console.log(data),commit('SET_USER_DATA', data)})

         
      },

      login ({ commit }, credentials) {
        console.log('hello');
        return axios
          .post('http://localhost:5000/register/login', credentials)
          .then(({ data }) => { console.log(data);
            //commit('SET_USER_DATA', data)
          })
      }
      
  }
  
})    


console.log(localStorage.getItem('user'));


export default store
