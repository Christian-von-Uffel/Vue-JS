<template>
  <div id="app">
    <todos v-bind:todos="todos"/>
  </div>
</template>

<script>
  import todos from '.components/todos';
  export default {
    name: 'app',
    components: {

    },
    data(): {
      return {
        todos: [
          {
            id: 1,
            title: "Todo one",
            completed: false
          },
          {
            id: 2,
            title: "Todo two",
            completed: true
          },
          {
            id: 3,
            title: "Todo three",
            completed: false
          },
        ]
      }
    }
  }
</script>

<style>
  /* mmm, wild card, I like it */
  * {

  }
</style>
