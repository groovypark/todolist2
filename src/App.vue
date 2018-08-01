<template>
  <div class="todoapp">
    <TodoHeader/>
    <TodoInput
      v-on:addTodoItem="addTodo"/>
    <TodoList
      v-on:clickCheckbox="toggleChecked"
      v-on:clickDestroy="destroyTodo"
      v-bind:todoItems="todoItems"/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import {localStroageSetItem, getLocalStorage} from './storage.js'

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
  created: function() {
    if (getLocalStorage('todoItems') !== null) {
      this.todoItems = getLocalStorage('todoItems')
    }
  },
  methods: {
    addTodo(value){
      this.todoItems.push({
        checked: false,
        title: value
      })
      localStroageSetItem('todoItems',JSON.stringify(this.todoItems))
    },
    destroyTodo(index){
      this.todoItems.splice(index,1)
      localStroageSetItem('todoItems',JSON.stringify(this.todoItems))
    },
    toggleChecked(index){
      this.todoItems[index].checked = !this.todoItems[index].checked
      localStroageSetItem('todoItems',JSON.stringify(this.todoItems))
    }
  }
}
</script>