<template>
  <div>
    <input
      v-on:keyup.enter="addTodoItem"
      v-model="inputText"
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus>
    <div class="main">
      <input
        v-on:click="clickToggleAll"
        id="toggle-all"
        class="toggle-all"
        type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  props: {
    todoItems: Array,
    // allCheckStatus: Boolean
	},
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    addTodoItem() {
      if (this.inputText !== '') {
        this.$emit('addTodoItem',this.inputText)
        this.inputText = ''
      }
    },
    clickToggleAll() {
      this.$emit('clickToggleAll')
    }
  }
}
</script>