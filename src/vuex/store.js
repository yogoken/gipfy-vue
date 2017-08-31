import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import {
  CHANGE_KEYWORD,
  SEARCH
} from './mutation-types'

const getters = {
  gifs: state => state.gifs
}

function getGIFs (query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return fetch('http:/api.gifhy.com/v1/gifs/search?q=' + params + '&api_key=dc6zaTOxFJmzC')
    .then(res => res.json())
}

const actions = {
  [CHANGE_KEYWORD] ({ commit }, keyword) {
    commit(CHANGE_KEYWORD, keyword)
  },

  [SEARCH] ({ commit, state }) {
    getGIFs(state.keyword)
      .then(data => {
        commit(SEARCH, data)
      })
  }
}

const mutations = {
  [CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [SEARCH] (state, gifs) {
    state.gifs = gifs.data
  }
}

const state = {
  keyword: '',
  gifs: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
