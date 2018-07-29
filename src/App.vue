<template>
  <div class="todoapp">
    <TodoHeader/>
    <TodoInput/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  components: {
    TodoHeader, TodoInput, TodoList, TodoFooter
  },
  data() {
    return{
      todoList: []
    }
  }
}
</script>