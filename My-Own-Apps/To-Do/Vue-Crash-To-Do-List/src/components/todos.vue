<template>
  <div>
    <!-- I think the v-bind directive helps Vue know what order to execute the loop in -->
    <div v-bind:key="todo.id" v-for="todo in todos">
      <h3>{{todo.title}}</h3>
    </div>
  </div>
</template>

<script>
  export default{
    name: "todos",
    props: ["todos"],
    methods: {
      markComplete() {
        // this is pretty cool that you can just flip a boolean attribute using the not operator. I honestly just didn't know you could do this
        this.todo.completed = !this.todo.completed;
      }
    }
  }
</script>

<style scoped>

</style>
