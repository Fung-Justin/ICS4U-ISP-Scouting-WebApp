import { createStore } from 'vuex'
import axios from 'axios'





//const url = "http://localhost:5000";

const store = createStore({
    state: {
       errorMsg: null
    },
    mutations: {
        SET_USER_DATA(state,userData){
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
          },

        errorMsg(state,msg){
            state.errorMsg = msg;
        }
    },
    actions: {

        register({ commit }, credentials) {
            console.log(credentials);
            return axios.post('/api/register/new-user', credentials).then(({data}) => {commit('SET_USER_DATA', data),commit('errorMsg', null)})
            .catch(err => 
                commit('errorMsg',err.response.data));

        },
        login ({ commit }, credentials) {
           
            return axios
              .post("/api/register/test", credentials)
              .then(({ data }) => { commit('SET_USER_DATA', data),commit('errorMsg', null)
           
              }).catch(err => 
                commit('errorMsg',err.response.data));
          }

    }

})




export default store