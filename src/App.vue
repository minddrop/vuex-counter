<template>
  <div class="container">
    <div>Welcome to App Component</div>
    <Counter />
    <br />
    <div class="column is-11">
      <AddCounter />
    </div>
    <div class="column auto">
      <SubtractCounter />
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import AddCounter from './components/AddCounter.vue'
import SubtractCounter from './components/SubtractCounter.vue'

export default {
  components: {
    Counter,
    AddCounter,
    SubtractCounter
  }
}
</script>
