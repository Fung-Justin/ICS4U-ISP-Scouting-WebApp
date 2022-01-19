import { createStore } from 'vuex'
import axios from 'axios'
import router from './router'






const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {

        register({ commit }, credentials) {
            console.log(credentials);
            return axios.post('http://localhost:5000/api/posts/register', credentials).then(({ data }) => { console.log('user data is: ', data) })


        }

    }

})

store.commit('increment');
console.log(store.state.count);

export default store