const app = new Vue({
  el: "#events",
  data:{
      counter: 0,
      name: "",
  },
  methods:{
    add(){
      this.counter = this.counter + 1;
    },
    subtract(){
      this.counter = this.counter - 1;
    },
    setName(event){
      this.name = event.target.value;
    },
  }
});
