const app = new Vue({
    el:"#assignment",
    data:{
        inputClass: "",
        header: "this is a header",
        paragraphVisibility: true,
        backgroundColor: ""
    },
    computed: {
        inlineStyle() {
            return "background-color: " + this.backgroundColor;
        }
    },
    methods:{
        toggleVisibility(){
            this.paragraphVisibility = !this.paragraphVisibility;
        }
    }
})