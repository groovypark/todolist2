<template>
	<div>
		<ul v-for="(item, index) in todoItems" :key="index" class="todo-list">
			<li v-bind:class="{'completed': item.checked}">
				<div class="view">
					<input
						v-on:click="clickCheckbox(index)"
						v-bind="{'checked': item.checked}"
						class="toggle" type="checkbox">
					<label>{{ item.title }}</label>
					<button v-on:click="clickDestroy(index)" class="destroy"></button>
				</div>
				<input class="edit" value="Create a TodoMVC template">
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TodoList',
	props: {
    todoItems: Array
	},
	methods: {
		clickCheckbox(index) {
			this.$emit('clickCheckbox', index)
		},
		clickDestroy(index) {
			this.$emit('clickDestroy', index)
		}
	},
}
</script>