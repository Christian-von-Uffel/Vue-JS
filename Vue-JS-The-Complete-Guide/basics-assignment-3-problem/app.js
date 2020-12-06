const app = new Vue({
    el:"#assignment",
    data:{
        count: 0,
    },
    methods: {
        addNumber(num){
            this.count = this.count + num;
        },
    },
    computed: {
        result(){
            if (this.count < 37){
                return "not there yet";
            } else if (this.count == 37){
                return "correct!";
            } else {
                return "too much";
            }
        }
    },
    watch: {
        result(){
            const that = this;
            setTimeout(function(){ that.count = 0; }, 5000);
        }
    }
});