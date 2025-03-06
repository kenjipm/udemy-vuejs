Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        addCounter(value) {
            this.counter += value;
        }
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return "Not there yet";
            } else if (this.counter > 37) {
                return "Too much!";
            } else {
                return this.counter;
            }
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.counter = 0;
            }, 5000);
        }
    }
}).mount("#assignment");