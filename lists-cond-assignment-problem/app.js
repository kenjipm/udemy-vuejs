Vue.createApp({
    data() {
        return {
            taskInput: "",
            tasks: [],
            isTasksVisible: true,
        };
    },
    computed: {
        buttonLabel() {
            return this.isTasksVisible ? "Hide Tasks" : "Show Tasks";
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskInput);
            this.taskInput = "";
        },
        toggleTaskVisibility() {
            this.isTasksVisible = !this.isTasksVisible;
        }
    }
}).mount("#assignment");