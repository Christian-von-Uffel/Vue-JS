const app = new Vue({
  el: "#events",
  data:{
      counter: 0,
  },
  methods:{
    add(){
      this.counter = this.counter + 1;
    },
    subtract(){
      this.counter = this.counter - 1;
    },
  }
});
