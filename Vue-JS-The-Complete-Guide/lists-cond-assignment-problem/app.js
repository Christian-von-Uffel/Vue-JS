const app = new Vue({
    el:"#assignment",
    data:{
        newTask:"",
        taskListIsVisible: true,
        tasks: [
            "stuff",
            "things",
            // {
            //     title: "trade in macbook prop for store credit",
            //     completed: false,
            // },
            // {
            //     title: "buy the new macbook air",
            //     completed: false,
            // },
            // {
            //     title: "reach out to 3 software companies",
            //     completed: false,
            // },
            // {
            //     title: "apply to 3 more jobs",
            //     completed: false,
            // },
            // {
            //     title: "create drop",
            //     completed: false,
            // },
        ]
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = "";
        },
        toggleTaskListVisibility(){
            this.taskListIsVisible = !this.taskListIsVisible;
            console.log(this.taskListIsVisible);
        }
    },
    computed: {
        caption() {
            return (this.taskListIsVisible ? "hide task list" : "show task list");
        }
    }
})