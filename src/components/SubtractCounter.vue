<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" @click="removeCounter()">
          Subtract
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/store'
import * as type from '../store/mutationTypes/types'

export default {
  methods: {
    removeCounter() {
      store.counter.dispatch({
        type: type.Decrement,
        amount: -20
      })
    }
  }
}
</script>
