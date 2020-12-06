const app = new Vue({
    el:"#assignment",
    data:{
        header:"Event Practice",
        output:""
    },
    methods:{
        alertMessage(){
            alert("woah, there coybow!");
        },
        setOutput(event){
            this.output = event.target.value;
        },
    }
});