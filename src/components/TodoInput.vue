<template>
  <div>
    <input v-on:keyup.enter="addTodoItem" v-model="inputText" class="new-todo" placeholder="What needs to be done?" autofocus>
    <div class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      inputText: ''
    }
  },
  methods: {
    addTodoItem: function() {
      if (this.inputText !== '') {
        this.$emit('addTodoItem',this.inputText)
        this.inputText = ''
      }
    }
  }
}
</script>