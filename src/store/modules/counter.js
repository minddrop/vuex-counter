const counter = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amout
    },
    decrement(state, payload) {
      state.count -= payload.amout
    }
  },
  actions: {
    increment(context, payload) {
      context.commit('increment', payload)
    },
    decrement(context, payload) {
      context.commit('decrement', payload)
    }
  }
}

export default counter
