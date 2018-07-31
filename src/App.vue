<template>
  <div class="todoapp">
    <TodoHeader/>
    <TodoInput
      v-on:addTodoItem="addTodo"/>
    <TodoList
      v-on:clickCheckbox="toggleChecked"
      v-bind:todoItems="todoItems"/>
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
      todoItems: [{
        checked: false,
        title: 'a'
        }]
    }
  },
  methods: {
    addTodo: function(value){
      this.todoItems.push({
        checked: false,
        title: value
      })
    },
    toggleChecked: function(index){
      this.todoItems[index].checked = !this.todoItems[index].checked
    }
  }
}
</script>