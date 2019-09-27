<template>
  <div class="container">
    <div>Welcome to App Component</div>
    <Counter />
    <br>
    <div class="column is-11">
      <AddCounter />
    </div>
    <div class="column auto">
      <RemoveCounter />
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import AddCounter from './components/AddCounter.vue'
import RemoveCounter from './components/RemoveCounter.vue'

export default {
  components: {
    Counter,
    AddCounter,
    RemoveCounter,
  },
}
</script>
