<template>
  <div>
    <input class="new-todo" placeholder="What needs to be done?" autofocus>
    <div class="main">
      <input v-model="inputText" id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data: function() {
    return {
      inputText: ''
    }
  }
}
</script>